/**
 * 
 * Copyright (c) Chong-U Lim
 * http://github.com/chongdashu
 */
this.chongdashu = this.chongdashu||{};

(function() {
    "use strict";

/**
 * ScoreSystem
 * @class ScoreSystem
 * @constructor
 **/
var ScoreSystem = function(state) {
    this.init(state);
};
var p = createjs.extend(ScoreSystem, chongdashu.System);

    ScoreSystem.ROUNDSTATE_STARTING = "starting";
    ScoreSystem.ROUNDSTATE_RUNNING = "running";
    ScoreSystem.ROUNDSTATE_END = "end";

    p.playerServe = null;
    p.roundStartCooldown = null;
    p.roundState = null;
    p.scores = {};

    p.init = function(state)
    {
        console.log("[ScoreSystem], init()");
        this.System_init(state);

        // Add components here
        // e.g., 
        this.addComponent(chongdashu.ScoreComponent.TYPE);

        this.playerServe = Phaser.RIGHT;
        this.roundStartCooldown = 3000;
        this.roundState = ScoreSystem.ROUNDSTATE_STARTING;
        this.scores[Phaser.RIGHT] = 0;
        this.scores[Phaser.LEFT] = 0;

        this.onInit();
    };


    p.update = function(entity) {
        if (this.System_update(entity)) {
            
            if (this.roundState == ScoreSystem.ROUNDSTATE_STARTING) {
                if (this.roundStartCooldown <= 0) {
                    this.roundState = ScoreSystem.ROUNDSTATE_RUNNING;
                    this.roundStartCooldown = 3000;
                    this.onRun();
                }
                else {
                    this.roundStartCooldown -= this.game.time.elapsed;
                }

                this.state.countdownText.setText(Math.ceil(this.roundStartCooldown / 1000 ).toFixed(0));
            }

            else if (this.roundState == ScoreSystem.ROUNDSTATE_RUNNING) {

            }

            else if (this.roundState == ScoreSystem.ROUNDSTATE_END) {
                if (this.roundStartCooldown <= 0) {
                    this.roundState = ScoreSystem.ROUNDSTATE_STARTING;
                    this.roundStartCooldown = 3000;
                    this.onInit();
                }
                else {
                    this.roundStartCooldown -= this.game.time.elapsed;
                }
            }
        }



        this.state.scoreTextLeft.setText("P1 Score: " + this.scores[Phaser.LEFT]);
        this.state.scoreTextRight.setText("P2 Score: " + this.scores[Phaser.RIGHT]);

    };

    p.onInit = function() {

        // set balls
        this.state.ballGroup.forEach(function(ball) {
            ball.body.allowGravity = false;
            if (this.playerServe == Phaser.RIGHT) {
                ball.position.x = this.game.world.width/4;
            }
            else if (this.playerServe == Phaser.LEFT) {
                ball.position.x = -this.game.world.width/4;
            }
        }, this);

        // set players
        this.state.playerRight.position.x = this.game.world.width/4;
        this.state.playerRight.position.y = this.game.world.height/5;

        this.state.playerLeft.position.x = -this.game.world.width/4;
        this.state.playerLeft.position.y = this.game.world.height/5;


    };

    p.onRun = function() {
        this.state.countdownText.visible = false;
        this.state.ballGroup.forEach(function(ball) {
            ball.body.allowGravity = true;
        }, this);
        
    };

    p.onBallFloorCollide = function(ball, floor) {
        this.roundState = ScoreSystem.ROUNDSTATE_END;

        this.roundStartCooldown = 2000;

        this.state.countdownText.visible = true;

        if (ball.x < 0 ) {
            this.scores[Phaser.LEFT]++;
            this.state.countdownText.setText("P1 slam dunked P2!");
        }
        else {
            this.scores[Phaser.RIGHT]++;
            this.state.countdownText.setText("P2 home runned P1!");
        }
    };

// Link
// ----
chongdashu.ScoreSystem = createjs.promote(ScoreSystem, "System");

}());


