import { Camera } from './camera.js';
import { distanceBetween, ctx, canvas, mouseBtnDown } from '../script.js';
export class Game {
    static cycle() {
        ctx === null || ctx === void 0 ? void 0 : ctx.resetTransform();
        ctx === null || ctx === void 0 ? void 0 : ctx.clearRect(0, 0, canvas.width, canvas.height);
        Camera.update(Game.players[0].position);
        for (let i = 0; i < Game.players.length; i++) {
            const p = Game.players[i];
            p.draw();
            p.move();
            p.drawAndMoveSnowballs();
            p.checkSnowballs();
            p.drawHealth();
            p.drawUsername();
            p.movePlayerAroundObstacles();
            while (p.pushOtherPlayersAway()) { }
            if (distanceBetween(p.position, p.destination) < 50 && mouseBtnDown == true) {
                p.drawAimLine();
                p.velocity.x = 0;
                p.velocity.y = 0;
            }
            else if (distanceBetween(p.position, p.destination) < 20) {
                p.velocity.x = 0;
                p.velocity.y = 0;
            }
        }
        Game.drawObstacles();
        requestAnimationFrame(Game.cycle);
    }
    static drawObstacles() {
        for (let i = 0; i < Game.obstacles.length; i++) {
            Game.obstacles[i].draw();
        }
    }
}
Game.players = [];
Game.obstacles = [];
//# sourceMappingURL=game.js.map