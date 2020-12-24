import Character from './character.js';

export default class Game {

    constructor(ch1DataURL, ch2DataURL) {
        this.ch1DataURL = ch1DataURL;
        this.ch2DataURL = ch2DataURL;
        this.canvas = this.getCanvas();
        this.ctx = this.canvas.getContext('2d');
    }

    loadJSON(JSON_URL) {
        return fetch(JSON_URL).then(response => response.json());
    }

    getCanvas() {
        const canvas = document.getElementById('canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        return canvas;
    }

    keyboardEvents() {
        document.addEventListener('keydown', (ev) => {
            switch (ev.code) {
                case 'ArrowUp':
                    // ArrowUp
                    break;
                case 'ArrowDown':
                    // ArrowDown
                    break;
                case 'ArrowRight':
                    // ArrowRight
                    break;
                case 'ArrowLeft':
                    // ArrowLeft
                    break;
                case 'KeyA':
                    // KeyA
                    break;
                case 'KeyB':
                    // KeyB
                    break;
                default:
                    // miss!
                    break;
            }
        });
    }

    update() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        window.requestAnimationFrame(update);
    }

    async play() {
        const ch1Data = await this.loadJSON(this.ch1DataURL);
        this.ch1 = new Character(this.ctx, 100, ch1Data);
        this.ch1.drawSquares(this.ch1.createCharacter());
        this.keyboardEvents();
        this.update();
    }
}