/**
 * 
 * Copyright (c) Chong-U Lim
 * http://github.com/chongdashu
 */
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * EnemyComponent
 * @class EnemyComponent
 * @constructor
 **/
var EnemyComponent = function() {
    // @param {Phaser.Keyboard} entity
    this.init();
};
var p = createjs.extend(EnemyComponent, chongdashu.Component);
    
    EnemyComponent.TYPE = "component:EnemyComponent";

    p.init = function()
    {
        console.log("[EnemyComponent], init()");
        this.Component_init(EnemyComponent.TYPE);
    };

    p.update = function() {
        this.Component_update();
    };
    

// Link
// ----
chongdashu.EnemyComponent = createjs.promote(EnemyComponent, "Component");

}());