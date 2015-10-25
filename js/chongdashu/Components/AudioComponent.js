/**
 * 
 * Copyright (c) Chong-U Lim
 * http://github.com/chongdashu
 */
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * AudioComponent
 * @class AudioComponent
 * @constructor
 **/
var AudioComponent = function(state) {
    // @param {Phaser.Keyboard} entity
    this.init(state);
};
var p = createjs.extend(AudioComponent, chongdashu.Component);
    
    AudioComponent.TYPE = "component:AudioComponent";

    p.audioCache = {};

    p.init = function(state)
    {
        console.log("[AudioComponent], init()");
        this.Component_init(AudioComponent.TYPE);

        this.audioCache = {};
    };

    p.play = function(audioName) {
        if (!(audioName in this.audioCache)) {
            this.audioCache[audioName] = this.state.add.audio(audioName);
        }
        this.audioCache[audioName].play();
    };

    p.update = function() {
        this.Component_update();
    };
    

// Link
// ----
chongdashu.AudioComponent = createjs.promote(AudioComponent, "Component");

}());