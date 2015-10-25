/**
 * 
 * Copyright (c) Chong-U Lim
 * http://github.com/chongdashu
 */
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * BoundarySystem
 * @class BoundarySystem
 * @constructor
 **/
var BoundarySystem = function(state) {
    this.init(state);
};
var p = createjs.extend(BoundarySystem, chongdashu.System);

    p.init = function(state)
    {
        console.log("[BoundarySystem], init()");
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
chongdashu.BoundarySystem = createjs.promote(BoundarySystem, "System");

}());


