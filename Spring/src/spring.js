class Spring {

    constructor(k, m, len, baseX, baseY, wid, damping) {
        this.k = k;
        this.m = m;
        this.len = len;

        this.baseX = baseX;
        this.baseY = baseY;
        this.yPos = baseY + len;
        this.wid = wid;

        this.damping = k * 1.15;

        this.pos = 0;
        this.vel = 0;
        this.acc = 0;

        this.grabbing = false;
        this.lastMouseY = 0;
    }

    setK(k) {
        this.k = k;
        this.damping = k * 1.15;
    }

    dist(a, b, x, y) {
        let dx = abs(a-x);
        let dy = abs(b-y);

        return sqrt(dx*dx + dy*dy);
    }

    applyForce(f) {
        this.acc += f/this.m;
    }

    draw() {
        strokeWeight(this.wid);
        line(this.baseX, this.baseY, this.baseX, this.yPos);
        rect(this.baseX-25, this.yPos, 50, 8);
    }

    update() {
        this.applyForce(-this.k * this.pos);
        this.applyForce(-this.vel * this.damping);

        this.pos += this.vel;
        this.vel += this.acc;

        this.yPos = this.baseY + this.len - this.pos;

        this.acc = 0;
    }

    mouseDrag(pressed, x, y) {
        if(pressed) {
            if(this.dist(this.baseX, this.yPos, x, y) < 20) {
                this.grabbing = true;
            }
        }
        else {
            this.grabbing = false;
        }

        if(this.grabbing) {
            this.yPos = y;

            this.vel = y - this.lastMouseY;
        }

        this.lastMouseY = y;
    }
}
