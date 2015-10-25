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
    };

    p.createPhysics = function() {
        this.game.physics.startSystem(Phaser.Physics.Arcade);
        this.game.physics.arcade.gravity.y = 200;
    };

    p.createGroups = function() {
        this.wallGroup = this.game.add.group();
    };

    p.createWalls = function() {

        var wallVerticalImage = this.game.cache.getImage("wall-vertical");
        var wallHorizontalImage = this.game.cache.getImage("wall-horizontal");

        this.wallLeft = this.wallGroup.create(-this.game.world.width/2 + wallVerticalImage.width/2, 0, "wall-vertical");
        this.wallRight = this.wallGroup.create(+this.game.world.width/2 - wallVerticalImage.width/2, 0, "wall-vertical");
        this.wallTop = this.wallGroup.create(0, -this.game.world.height/2 + wallHorizontalImage.height/2, "wall-horizontal");
        this.wallBottom = this.wallGroup.create(0, +this.game.world.height/2 -wallHorizontalImage.height/2, "wall-horizontal");

        this.wallGroup.forEach(function(wall) {
            this.game.physics.enable(wall);
            
            wall.anchor.set(0.5, 0.5);

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
    };

    

// Link
// ----
chongdashu.GameState = GameState;

}());


