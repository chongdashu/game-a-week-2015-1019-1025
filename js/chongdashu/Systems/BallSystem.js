/**
 * 
 * Copyright (c) Chong-U Lim
 * http://github.com/chongdashu
 */
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * BallSystem
 * @class BallSystem
 * @constructor
 **/
var BallSystem = function(state) {
    this.init(state);
};
var p = createjs.extend(BallSystem, chongdashu.System);

    p.init = function(state)
    {
        console.log("[BallSystem], init()");
        this.System_init(state);

        // Add components here
        // e.g., 
        // this.addComponent(chongdashu.KeyboardComponent.TYPE);
    };


    p.update = function(entity) {
        if (this.System_update(entity)) {
            
        }
    };

    p.onBallFloorCollide = function(ball, floor) {
        
    };

    p.onPlayerBallCollide = function(player, ball) {
    };

// Link
// ----
chongdashu.BallSystem = createjs.promote(BallSystem, "System");

}());


