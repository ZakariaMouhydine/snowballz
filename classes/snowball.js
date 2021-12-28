import { Game } from './game.js';
import { distanceBetween, ctx, snowballRadius, myIndex } from '../script.js';
export class Snowball {
    constructor(position, velocity) {
        this.color = "";
        this.size = 0;
        this.distance = 0;
        this.active = true;
        this.position = position;
        this.velocity = velocity;
    }
    draw() {
        ctx === null || ctx === void 0 ? void 0 : ctx.save();
        ctx === null || ctx === void 0 ? void 0 : ctx.translate(this.position.x, this.position.y);
        ctx === null || ctx === void 0 ? void 0 : ctx.beginPath();
        ctx === null || ctx === void 0 ? void 0 : ctx.arc(0, 0, 8, 0, Math.PI * 2);
        ctx === null || ctx === void 0 ? void 0 : ctx.stroke();
        ctx.fillStyle = "snow";
        ctx === null || ctx === void 0 ? void 0 : ctx.fill();
        ctx === null || ctx === void 0 ? void 0 : ctx.closePath;
        ctx === null || ctx === void 0 ? void 0 : ctx.restore();
    }
    move() {
        this.position = this.position.add(this.velocity);
    }
    checkAgainstPlayers() {
        for (let i = 0; i < Game.players.length; i++) {
            if (i != myIndex) {
                const p = Game.players[i];
                let playerToSnowball = distanceBetween(p.position, this.position);
                if (playerToSnowball < p.radius + snowballRadius) {
                    this.active = false;
                    p.hp -= 10;
                }
            }
        }
    }
    checkAgainstObstacles() {
        for (let i = 0; i < Game.obstacles.length; i++) {
            const obstacle = Game.obstacles[i];
            let snowballToObstacle = distanceBetween(obstacle.position, this.position);
            if (snowballToObstacle < obstacle.radius + snowballRadius) {
                this.active = false;
            }
        }
    }
}
//# sourceMappingURL=snowball.js.map