/**
 * 
 * Copyright (c) Chong-U Lim
 * http://github.com/chongdashu
 */
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * EnemySystem
 * @class EnemySystem
 * @constructor
 **/
var EnemySystem = function(state) {
    this.init(state);
};
var p = createjs.extend(EnemySystem, chongdashu.System);

    EnemySystem.SPEED_X = 200;

    p.init = function(state)
    {
        console.log("[EnemySystem], init()");
        this.System_init(state);

        // Add components here
        // e.g., 
        this.addComponent(chongdashu.EnemyComponent.TYPE);
        this.addComponent(chongdashu.KeyboardComponent.TYPE);
    };

    p.update = function(entity) {

        if (this.System_update(entity)) {
            var self = this;
            var sprite = entity;
            var kc = sprite.komponents[chongdashu.KeyboardComponent.TYPE];

            if (kc.isDown(Phaser.Keyboard.A)) {
                sprite.body.velocity.x = -EnemySystem.SPEED_X;
                sprite.body.facingX = Phaser.LEFT;
                
            }
            if (kc.isDown(Phaser.Keyboard.D)) {
                sprite.body.velocity.x = +EnemySystem.SPEED_X;
                sprite.body.facingX = Phaser.RIGHT;
            }

            if (kc.isUp(Phaser.Keyboard.D) && kc.isUp(Phaser.Keyboard.A)) {
                sprite.body.velocity.x = 0;
            }

            if (kc.isJustDown(Phaser.Keyboard.W)) {
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
chongdashu.EnemySystem = createjs.promote(EnemySystem, "System");

}());


