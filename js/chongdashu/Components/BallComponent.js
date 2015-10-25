/**
 * 
 * Copyright (c) Chong-U Lim
 * http://github.com/chongdashu
 */
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * BallComponent
 * @class BallComponent
 * @constructor
 **/
var BallComponent = function() {
    // @param {Phaser.Keyboard} entity
    this.init();
};
var p = createjs.extend(BallComponent, chongdashu.Component);
    
    BallComponent.TYPE = "component:BallComponent";

    p.init = function()
    {
        console.log("[BallComponent], init()");
        this.Component_init(BallComponent.TYPE);
    };

    p.update = function() {
        this.Component_update();
    };
    

// Link
// ----
chongdashu.BallComponent = createjs.promote(BallComponent, "Component");

}());