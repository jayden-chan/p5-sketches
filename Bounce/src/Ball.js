class Ball {
    constructor(radius, xPos, yPos, xVel, yVel) {
        this.radius = radius;

        this.xPos = xPos;
        this.yPos = yPos;

        this.xVel = xVel;
        this.yVel = yVel;

        this.xAcc = 0;
        this.yAcc = 0;

        this.restitution = -0.9;

        this.collidedX = false;
        this.collidedY = false;
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
            this.collidedY = true;
        }
        else {
            this.collidedY = false;
        }
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

