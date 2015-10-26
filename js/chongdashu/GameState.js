/**
 * 
 * Copyright (c) Chong-U Lim
 * http://github.com/chongdashu
 */
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * GameState
 * @class GameState
 * @constructor
 **/
var GameState = function(game) {
};
var p = GameState.prototype;

    p.prototypes = null;
    p.dataIndex = 0;

    p.groups = null;
    p.systems = null;
    
    // @phaser
    p.preload = function() {
    };

    // @phaser
    p.create = function() {

        var logo = game.add.sprite(0, 0, 'phaser-logo');
        logo.anchor.setTo(0.5, 0.5);

        this.createWorld();
        this.createSystems();
        this.createDebug();

    };

    p.createDebug = function() {
        // Create a bitmap the same size as the stage
        var bitmap = this.game.add.bitmapData(this.game.width, this.game.height);
        
        // These functions use the canvas context to draw lines using the canvas API
        for(var y = this.game.height-32; y >= 0; y -= 32) {
            bitmap.context.beginPath();
            bitmap.context.strokeStyle = 'rgba(255, 255, 255, 0.5)';
            bitmap.context.moveTo(0, y);
            bitmap.context.lineTo(this.game.width, y);
            bitmap.context.stroke();
        }

        this.game.add.image(-this.game.world.width/2, -this.game.world.height/2, bitmap);
    };

    p.createWorld = function() {
        this.createPhysics();
        this.createGroups();
        this.createWalls();
        this.createBalls();
        this.createPlayers();
    };

    p.createPhysics = function() {
        this.game.physics.startSystem(Phaser.Physics.Arcade);
        this.game.physics.arcade.gravity.y = 500;
    };

    p.createGroups = function() {
        this.groups = [];
        
        this.groups.push(this.wallGroup = this.game.add.group());
        this.groups.push(this.ballGroup = this.game.add.group());
        this.groups.push(this.playerGroup = this.game.add.group());
    };

    p.createBalls = function() {
        this.ballGroup.create(0, 0, "ball");
        this.ballGroup.forEach(function(ball) {
            
            ball.anchor.set(0.5, 0.5);

            this.game.physics.enable(ball);
            ball.body.bounce.set(0.5,1);
            ball.body.collideWorldBounds = true;

            new chongdashu.BallComponent().addTo(ball);

        }, this);

    };

    p.createPlayers = function() {
        this.playerLeft = this.playerGroup.create(-this.game.world.width/4, 0, "player");
        this.playerRight = this.playerGroup.create(+this.game.world.width/4, 0, "player");

        this.playerGroup.forEach(function(player) {
            
            // sprite
            player.anchor.set(0.5, 0.5);

            // physics
            this.game.physics.enable(player);
            player.body.collideWorldBounds = true;
            player.body.drag.set(50,0);
            player.body.friction.set(50,10);

            // components
            new chongdashu.KeyboardComponent(this.game.input.keyboard).addTo(player);

        }, this);

        new chongdashu.PlayerComponent().addTo(this.playerRight);
        new chongdashu.EnemyComponent().addTo(this.playerLeft);
    };

    p.createWalls = function() {

        var wallVerticalImage = this.game.cache.getImage("wall-vertical");
        var wallHorizontalImage = this.game.cache.getImage("wall-horizontal");
        var floorImage = this.game.cache.getImage("floor");
        var netImage = this.game.cache.getImage("net");

        this.wallLeft = this.wallGroup.create(-this.game.world.width/2 + wallVerticalImage.width/2, 0, "wall-vertical");
        this.wallRight = this.wallGroup.create(+this.game.world.width/2 - wallVerticalImage.width/2, 0, "wall-vertical");
        this.wallTop = this.wallGroup.create(0, -this.game.world.height/2 + wallHorizontalImage.height/2, "wall-horizontal");
        this.wallBottom = this.wallGroup.create(0, +this.game.world.height/2 -wallHorizontalImage.height/2, "wall-horizontal");

        this.floor = this.wallGroup.create(this.wallBottom.x, this.wallBottom.y - this.wallBottom.height/2 - floorImage.height/2, "floor");
        new chongdashu.FloorComponent().addTo(this.floor);
        
        this.net = this.wallGroup.create(this.floor.x, this.floor.y - this.floor.height/2 - netImage.height/2,  "net");

        this.wallGroup.forEach(function(wall) {
            
            wall.anchor.set(0.5, 0.5);

            this.game.physics.enable(wall);
            wall.body.immovable = true;
            wall.body.allowGravity = false;

            new chongdashu.WallComponent().addTo(wall);

        }, this);

    };

    p.createSystems = function() {
        
        this.systems = this.systems || [];

        this.systems.push(this.playerSystem = new chongdashu.PlayerSystem(this));
        this.systems.push(this.enemySystem = new chongdashu.EnemySystem(this));
        
        this.systems.push(this.boundarySystem = new chongdashu.BoundarySystem(this));
        this.systems.push(this.aiSystem = new chongdashu.AISystem(this));
        this.systems.push(this.ballSystem = new chongdashu.BallSystem(this));
        this.systems.push(this.scoreSystem = new chongdashu.ScoreSystem(this));

    };


    // @phaser
    p.update = function() {
        this.updatePhysics();
        this.updateSystems();
    };

    p.updateSystems = function() {
        var self = this;
        $.each(self.systems, function(system_index, system) {
            $.each(self.groups, function(group_index, group) {
                self.playerGroup.forEach(function(entity) {
                    $.each(entity.komponents, function(component_index, component) {
                        component.update();
                    });
                    system.update(entity);
                });
            });
        });
        
    
    };

    p.updatePhysics = function() {
        this.game.physics.arcade.collide(this.ballGroup, this.wallGroup);
        this.game.physics.arcade.collide(this.playerGroup, this.wallGroup);
        this.game.physics.arcade.collide(this.playerGroup, this.ballGroup);
    };

    

// Link
// ----
chongdashu.GameState = GameState;

}());


