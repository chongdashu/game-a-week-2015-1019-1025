/**
 * 
 * Copyright (c) Chong-U Lim
 * http://github.com/chongdashu
 */
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * PlayerComponent
 * @class PlayerComponent
 * @constructor
 **/
var PlayerComponent = function() {
    // @param {Phaser.Keyboard} entity
    this.init();
};
var p = createjs.extend(PlayerComponent, chongdashu.Component);
    
    PlayerComponent.TYPE = "component:PlayerComponent";

    p.init = function()
    {
        console.log("[PlayerComponent], init()");
        this.Component_init(PlayerComponent.TYPE);
    };

    p.update = function() {
        this.Component_update();
    };
    

// Link
// ----
chongdashu.PlayerComponent = createjs.promote(PlayerComponent, "Component");

}());