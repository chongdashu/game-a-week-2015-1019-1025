/**
 * 
 * Copyright (c) Chong-U Lim
 * http://github.com/chongdashu
 */
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * WallComponent
 * @class WallComponent
 * @constructor
 **/
var WallComponent = function() {
    // @param {Phaser.Keyboard} entity
    this.init();
};
var p = createjs.extend(WallComponent, chongdashu.Component);
    
    WallComponent.TYPE = "component:WallComponent";

    p.init = function()
    {
        console.log("[WallComponent], init()");
        this.Component_init(WallComponent.TYPE);
    };

    p.update = function() {
        this.Component_update();
    };
    

// Link
// ----
chongdashu.WallComponent = createjs.promote(WallComponent, "Component");

}());