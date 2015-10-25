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

        this.createEntities();
        this.createSystems();

    };

    p.createEntities = function() {

    };

    p.createSystems = function() {
        this.systems = this.systems || [];
        this.systems.push(this.playerSystem = new chongdashu.PlayerSystem(this));
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


