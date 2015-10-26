/**
 * 
 * Copyright (c) Chong-U Lim
 * http://github.com/chongdashu
 */
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * ScoreSystem
 * @class ScoreSystem
 * @constructor
 **/
var ScoreSystem = function(state) {
    this.init(state);
};
var p = createjs.extend(ScoreSystem, chongdashu.System);

    p.init = function(state)
    {
        console.log("[ScoreSystem], init()");
        this.System_init(state);

        // Add components here
        // e.g., 
        this.addComponent(chongdashu.ScoreComponent.TYPE);
    };


    p.update = function(entity) {
        if (this.System_update(entity)) {
            
        }
    };

    p.onBallFloorCollide = function(ball, floor) {
        
    };

// Link
// ----
chongdashu.ScoreSystem = createjs.promote(ScoreSystem, "System");

}());


