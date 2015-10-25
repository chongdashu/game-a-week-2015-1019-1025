/**
 * 
 * Copyright (c) Chong-U Lim
 * http://github.com/chongdashu
 */
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * FloorComponent
 * @class FloorComponent
 * @constructor
 **/
var FloorComponent = function() {
    // @param {Phaser.Keyboard} entity
    this.init();
};
var p = createjs.extend(FloorComponent, chongdashu.Component);
    
    FloorComponent.TYPE = "component:FloorComponent";

    p.init = function()
    {
        console.log("[FloorComponent], init()");
        this.Component_init(FloorComponent.TYPE);
    };

    p.update = function() {
        this.Component_update();
    };
    

// Link
// ----
chongdashu.FloorComponent = createjs.promote(FloorComponent, "Component");

}());