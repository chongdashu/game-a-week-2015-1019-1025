/**
 * 
 * Copyright (c) Chong-U Lim
 * http://github.com/chongdashu
 */
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * ScoreComponent
 * @class ScoreComponent
 * @constructor
 **/
var ScoreComponent = function() {
    // @param {Phaser.Keyboard} entity
    this.init();
};
var p = createjs.extend(ScoreComponent, chongdashu.Component);
    
    ScoreComponent.TYPE = "component:ScoreComponent";

    p.init = function()
    {
        console.log("[ScoreComponent], init()");
        this.Component_init(ScoreComponent.TYPE);
    };

    p.update = function() {
        this.Component_update();
    };
    

// Link
// ----
chongdashu.ScoreComponent = createjs.promote(ScoreComponent, "Component");

}());