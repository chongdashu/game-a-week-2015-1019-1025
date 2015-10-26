/**
 * 
 * Copyright (c) Chong-U Lim
 * http://github.com/chongdashu
 */
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * Entity
 * @class Entity
 * @constructor
 **/
var Entity = function(state) {
    this.init(state);
};
var p = Entity.prototype;
Entity.prototype.constructor = Entity;
    
    p.komponents = {};

    p.init = function(state)
    {
        console.log("[Entity], init()");
        this.state = state;
        this.game = state.game;
        this.komponents = [];
    };

    p.update = function() {

    };

    p.render = function() {

    };


    

// Link
// ----
chongdashu.Entity = Entity;

}());


