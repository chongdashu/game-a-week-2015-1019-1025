/**
 * 
 * Copyright (c) Chong-U Lim
 * http://github.com/chongdashu
 */
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * AISystem
 * @class AISystem
 * @constructor
 **/
var AISystem = function(state) {
    this.init(state);
};
var p = createjs.extend(AISystem, chongdashu.System);

    p.init = function(state)
    {
        console.log("[AISystem], init()");
        this.System_init(state);

        // Add components here
        // e.g., 
        // this.addComponent(chongdashu.KeyboardComponent.TYPE);
    };


    p.update = function(entity) {
        if (this.System_update(entity)) {
            
        }
    };

// Link
// ----
chongdashu.AISystem = createjs.promote(AISystem, "System");

}());


