/**
 * 
 * Copyright (c) Chong-U Lim
 * http://github.com/chongdashu
 */
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * MenuState
 * @class MenuState
 * @constructor
 **/
var MenuState = function(game) {
};
var p = MenuState.prototype;
    

    // @phaser
    p.preload = function() {
        console.log("[MenuState], preload()");
        
    };

    // @phaser
    p.create = function() {
        console.log("[MenuState], create()");

        // Preloader specific stuff.
        // -------------------------
        this.game.world.setBounds(
            -GLOBAL_GAME_WIDTH/2,
            -GLOBAL_GAME_HEIGHT/2,
            GLOBAL_GAME_WIDTH, GLOBAL_GAME_HEIGHT);

        this.game.camera.setPosition(-GLOBAL_GAME_WIDTH/2, -GLOBAL_GAME_HEIGHT/2);
        this.game.camera.setSize(GLOBAL_GAME_WIDTH, GLOBAL_GAME_HEIGHT);
        
        var titleStyle = {
            font: "bold 24px Consolas",
            fill: "#ffaabb",
            boundsAlignH: "center",
            boundsAlignV: "middle",
            stroke: "black",
            strokeThickness: 4
        };
        var subtitleStyle = {
            font: "16px Consolas",
            fill: "#aaaabb",
            boundsAlignH: "center",
            boundsAlignV: "middle",
            stroke: "black",
            strokeThickness: 3
        };
        var instructionStyle = {
            font: "12px Consolas",
            fill: "#fefefe",
            boundsAlignH: "center",
            boundsAlignV: "middle",
            stroke: "black",
            strokeThickness: 1
        };
        var twitterText = {
            font: "11px Consolas",
            fill: "#aaaaff",
            boundsAlignH: "center",
            boundsAlignV: "middle",
            stroke: "black",
            strokeThickness: 1
        };
        var startStyle = {
            font: "12px Consolas",
            fill: "#fefefe",
            boundsAlignH: "center",
            boundsAlignV: "middle",
            stroke: "black",
            strokeThickness: 1
        };

        this.titleText = this.game.add.text(0, -64, "<Untitled>", titleStyle);
        this.titleText.anchor.setTo(0.5, 0.5);
        this.subtitleText = this.game.add.text(0, -64+32, "#OGAW-2", subtitleStyle);
        this.subtitleText.anchor.setTo(0.5, 0.5);
        this.twitterText = this.game.add.text(0, 0, "@chongdashu", twitterText);
        this.twitterText.anchor.setTo(0.5, 0.5);
        
        this.startText = this.game.add.text(0, +96, "Click Anywhere To Begin", instructionStyle);
        this.startText.anchor.setTo(0.5, 0.5);
        
        this.instructionsText = this.game.add.text(0, +64, "", startStyle);
        this.instructionsText.anchor.setTo(0.5, 0.5);

        this.game.input.keyboard.onDownCallback = function(e) {
            
            console.log(e);

            this.game.state.start("GameState");
            this.game.input.keyboard.onDownCallback = null;
        };
    };

    // @phaser
    p.update = function() {
        // this.loadingText.text = "Loading: " + this.load.progress + "%";
        if (this.game.input.activePointer.isDown) {

            this.game.state.start("GameState");
            this.game.input.keyboard.onDownCallback = null;
        }
    };

    // @phaser
    p.render = function() {
    };
    

// Link
// ----
chongdashu.MenuState = MenuState;

}());


