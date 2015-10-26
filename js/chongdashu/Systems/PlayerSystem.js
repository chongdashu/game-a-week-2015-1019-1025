/**
 * 
 * Copyright (c) Chong-U Lim
 * http://github.com/chongdashu
 */
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * PlayerSystem
 * @class PlayerSystem
 * @constructor
 **/
var PlayerSystem = function(state) {
    this.init(state);
};
var p = createjs.extend(PlayerSystem, chongdashu.System);

    PlayerSystem.SPEED_X = 200;

    p.init = function(state)
    {
        console.log("[PlayerSystem], init()");
        this.System_init(state);

        // Add components here
        // e.g., 
        this.addComponent(chongdashu.PlayerComponent.TYPE);
        this.addComponent(chongdashu.KeyboardComponent.TYPE);
    };

    p.update = function(entity) {

        if (this.System_update(entity)) {
            var self = this;
            var sprite = entity;
            var kc = sprite.komponents[chongdashu.KeyboardComponent.TYPE];

            if (kc.isDown(Phaser.Keyboard.LEFT)) {
                sprite.body.velocity.x = -PlayerSystem.SPEED_X;
                sprite.body.facingX = Phaser.LEFT;
                
            }
            if (kc.isDown(Phaser.Keyboard.RIGHT)) {
                sprite.body.velocity.x = +PlayerSystem.SPEED_X;
                sprite.body.facingX = Phaser.RIGHT;
            }

            if (kc.isUp(Phaser.Keyboard.RIGHT) && kc.isUp(Phaser.Keyboard.LEFT)) {
                sprite.body.velocity.x = 0;
            }

            if (kc.isJustDown(Phaser.Keyboard.UP)) {
                sprite.body.velocity.y = -300;
            }
        }
    };

    p.onBallFloorCollide = function(ball, floor) {
        
    };

    p.onPlayerBallCollide = function(player, ball) {
    };

// Link
// ----
chongdashu.PlayerSystem = createjs.promote(PlayerSystem, "System");

}());


