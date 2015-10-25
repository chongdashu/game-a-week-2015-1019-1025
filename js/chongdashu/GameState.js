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
    
    // @phaser
    p.preload = function() {
    };

    // @phaser
    p.create = function() {

        var logo = game.add.sprite(0, 0, 'phaser-logo');
        logo.anchor.setTo(0.5, 0.5);
    };

    // @phaser
    p.update = function() {
    };

    

// Link
// ----
chongdashu.GameState = GameState;

}());


