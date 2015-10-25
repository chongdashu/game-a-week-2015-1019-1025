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
        this.game.physics.arcade.gravity.y = 200;
    };

    p.createGroups = function() {
        this.wallGroup = this.game.add.group();
        this.ballGroup = this.game.add.group();
        this.playerGroup = this.game.add.group();
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

            // components
            new chongdashu.BallComponent().addTo(player);

        }, this);
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
        this.systems.push(this.playerSystem = new chongdashu.BoundarySystem(this));
        this.systems.push(this.playerSystem = new chongdashu.AISystem(this));
        this.systems.push(this.ballSystem = new chongdashu.BallSystem(this));
        this.systems.push(this.ballSystem = new chongdashu.ScoreSystem(this));
    };


    // @phaser
    p.update = function() {
        this.updatePhysics();
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


