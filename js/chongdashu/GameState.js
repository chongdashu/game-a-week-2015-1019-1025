/**
 * 
 * Copyright (c) Chong-U Lim
 * http://github.com/chongdashu
 */
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * GameState
 * @class GameState
 * @constructor
 **/
var GameState = function(game) {
};
var p = GameState.prototype;

    p.prototypes = null;
    p.dataIndex = 0;
    
    // @phaser
    p.preload = function() {
       
    };

    // @phaser
    p.create = function() {

        // var logo = game.add.sprite(0, 0, 'phaser-logo');
        // logo.anchor.setTo(0.5, 0.5);

        var ball = game.add.sprite(0,0);
        var texture1 = game.make.sprite(0,0, "texture2");
        var texture2 = game.make.sprite(0,0, "texture2");
        
        var mask = game.add.graphics(0,0);
        mask.beginFill(0xFFFFFF);
        mask.drawCircle(0, 0, 250);
        
        // ball.mask = mask;

        this.rotation =  Phaser.Math.degToRad(-15);

        texture1.anchor.set(0.5,0.5);
        texture2.anchor.set(0.5,0.5);
        
        ball.addChild(texture1);
        ball.addChild(texture2);

        texture1.rotation = this.rotation;
        texture2.rotation = this.rotation;

        texture1.x += texture1.width/2 * Math.cos(this.rotation);
        texture2.x -= texture1.width/2 * Math.cos(this.rotation);
        texture1.y += texture1.width/2 * Math.sin(this.rotation);
        texture2.y -= texture1.width/2 * Math.sin(this.rotation);

        this.texture1 = texture1;
        this.texture2 = texture2;

        this.speed = 1;

        var sphere = game.add.sprite(0,0,"sphere");
        sphere.anchor.set(0.5, 0.5);

    };

    // @phaser
    p.update = function() {

        if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            this.speed ++;
        }
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
            this.speed --;
            this.speed = Math.max(this.speed, 1);
        }

        if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            this.rotation = Phaser.Math.degToRad(Phaser.Math.radToDeg(this.rotation) +1);
            this.texture1.x = this.texture1.width/2 * Math.cos(this.rotation);
            this.texture2.x = -this.texture1.width/2 * Math.cos(this.rotation);
            this.texture1.y = this.texture1.width/2 * Math.sin(this.rotation);
            this.texture2.y = -this.texture1.width/2 * Math.sin(this.rotation);

        }
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            this.rotation = Phaser.Math.degToRad(Phaser.Math.radToDeg(this.rotation) -1);
            this.texture1.x = this.texture1.width/2 * Math.cos(this.rotation);
            this.texture2.x = -this.texture1.width/2 * Math.cos(this.rotation);
            this.texture1.y = this.texture1.width/2 * Math.sin(this.rotation);
            this.texture2.y = -this.texture1.width/2 * Math.sin(this.rotation);
        }

        this.texture1.rotation = this.rotation;
        this.texture2.rotation = this.rotation;



        var xshift = Math.cos(this.rotation);
        var yshift = Math.sin(this.rotation);

        this.texture1.x -= this.speed * xshift;
        this.texture1.y -= this.speed * yshift;

        this.texture2.x -= this.speed * xshift;
        this.texture2.y -= this.speed * yshift;

        var l = this.texture1.width/2;
        var xdist = l * Math.cos(this.rotation);
        var ydist = l * Math.sin(this.rotation);
        var buffer = 100;

        if (this.texture1.x + xdist + buffer < 0) {
            this.texture1.x = this.texture2.x + 2 * xdist;
            this.texture1.y = this.texture2.y + 2 * ydist;
        }

        if (this.texture2.x + xdist + buffer < 0 ) {
            this.texture2.x = this.texture1.x + 2 * xdist;
            this.texture2.y = this.texture1.y + 2 * ydist;
        }
       

    };

    

// Link
// ----
chongdashu.GameState = GameState;

}());


