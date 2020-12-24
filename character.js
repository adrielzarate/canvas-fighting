class Square {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw(ctx) {
        ctx.strokeRect(
            this.x,
            this.y,
            this.width,
            this.height
        );
    }
}

class Hit extends Square {
    constructor(x, y, width, height, hit = false) {
        super(x, y, width, height);
        this.hit = hit;
        this.borderColor = '#ff0000';
    }
}

// class Head extends Square {
//     constructor(x, y, width, height) {
//         super(x, y, width, height);
//     }
// }

// class Torso extends Square {
//     constructor(x, y, width, height) {
//         super(x, y, width, height);
//     }
// }

class Limb extends Square {
    constructor(x, y, width, height) {
        super(x, y, width, height);
    }
}

class Hands extends Hit {
    constructor(x, y, width, height, hit) {
        super(x, y, width, height, hit);
    }
}

class Legs extends Hit {
    constructor(x, y, width, height, hit) {
        super(x, y, width, height, hit);
    }
}

export class Body extends Square {
    constructor(x, y, width, height) {
        super(x, y, width, height);
    }
}

export default class Character {
    /*
    * STATUS
    *
    * normal,
    * normal kick
    * nomal punch
    * down
    * down kick
    * down punch
    * up
    * up kick
    * up punch
    * damage torso
    * damage legs
    * walk
    * died
    * win
    */
    constructor(ctx, energy, chData) {
        this.ctx = ctx;
        this.energy = energy;
        this.chData = chData;
    }

    switchSide() {
        this.side = !this.side;
    }

    createCharacter() {

        this.status = this.chData['normal'];

        const body = new Body(
            this.status.body.x,
            this.status.body.y,
            this.status.body.w,
            this.status.body.h
        );
        const head = new Limb(
            this.status.head.x,
            this.status.head.y,
            this.status.head.w,
            this.status.head.h
        );
        const torso = new Limb(
            this.status.torso.x,
            this.status.torso.y,
            this.status.torso.w,
            this.status.torso.h
        );
        const hands = new Hands(
            this.status.hands.x,
            this.status.hands.y,
            this.status.hands.w,
            this.status.hands.h,
            this.status.hands.hit
        );
        const legs = new Legs(
            this.status.legs.x,
            this.status.legs.y,
            this.status.legs.w,
            this.status.legs.h,
            this.status.legs.hit
        );

        return { body, head, torso, hands, legs };
    }

    // aux
    drawSquares(chParts) {
        chParts['body'].draw(this.ctx);
        this.ctx.translate(chParts.body.x, chParts.body.y);

        for (const part in chParts) {
            if(part !== 'body') chParts[part].draw(this.ctx);
        }

        this.ctx.translate(-chParts.body.x, -chParts.body.y);
    }
}
