/**
 * 
 * Copyright (c) Chong-U Lim
 * http://github.com/chongdashu
 */
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * PlayerSystem
 * @class PlayerSystem
 * @constructor
 **/
var PlayerSystem = function(state) {
    this.init(state);
};
var p = createjs.extend(PlayerSystem, chongdashu.System);

    p.init = function(state)
    {
        console.log("[PlayerSystem], init()");
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
chongdashu.PlayerSystem = createjs.promote(PlayerSystem, "System");

}());


