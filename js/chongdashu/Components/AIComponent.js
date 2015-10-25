/**
 * 
 * Copyright (c) Chong-U Lim
 * http://github.com/chongdashu
 */
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * AIComponent
 * @class AIComponent
 * @constructor
 **/
var AIComponent = function() {
    // @param {Phaser.Keyboard} entity
    this.init(entity);
};
var p = createjs.extend(AIComponent, chongdashu.Component);
    
    AIComponent.TYPE = "component:AIComponent";

    p.init = function()
    {
        console.log("[AIComponent], init()");
        this.Component_init(AIComponent.TYPE);
    };

    p.update = function() {
        this.Component_update();
    };
    

// Link
// ----
chongdashu.AIComponent = createjs.promote(AIComponent, "Component");

}());