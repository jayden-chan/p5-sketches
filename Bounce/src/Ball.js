class Ball {
    constructor(radius, xPos, yPos, xVel, yVel) {
        this.radius = radius;

        this.xPos = xPos;
        this.yPos = yPos;

        this.xVel = xVel;
        this.yVel = yVel;

        this.xAcc = 0;
        this.yAcc = 0;

        this.restitution = -0.8;
        this.friction = 0.9;

        this.collidedX = false;
        this.collidedY = false;

        this.lastMouseX = 0;
        this.lastMouseY = 0;

        this.grabbing = false;
    }

    dist(a, b, x, y) {
        let dx = abs(a-x);
        let dy = abs(b-y);

        return sqrt(dx*dx + dy*dy);
    }

    checkWallCollision() {
        if(!this.collidedX && (this.xPos <= this.radius || this.xPos >= (800 - this.radius))) {
            this.xVel *= this.restitution;
            this.collidedX = true;
        }
        else {
            this.collidedX = false;
        }
        if(!this.collidedY && (this.yPos <= this.radius || this.yPos >= (800 - this.radius))) {
            this.yVel *= this.restitution;
            this.xVel *= this.friction;
            this.collidedY = true;
        }
        else {
            this.collidedY = false;
        }
    }

    mouseDrag(pressed, x, y) {
        if(pressed) {
            if(this.dist(this.xPos, this.yPos, x, y) < this.radius * 3) {
                this.grabbing = true;
            }
        }
        else {
            this.grabbing = false;
        }

        if(this.grabbing) {
            this.xPos = x;
            this.yPos = y;

            this.xVel = x - this.lastMouseX;
            this.yVel = y - this.lastMouseY;
        }

        this.lastMouseX = x;
        this.lastMouseY = y;
    }

    applyForce(forceX, forceY) {
        this.xAcc += forceX;
        this.yAcc += forceY;
    }

    draw() {
        ellipse(this.xPos, this.yPos, this.radius * 2);
    }

    update() {
        this.checkWallCollision();

        this.xPos += this.xVel;
        this.yPos += this.yVel;

        this.xVel += this.xAcc;
        this.yVel += this.yAcc;

        this.xAcc = 0;
        this.yAcc = 0;
    }
}
