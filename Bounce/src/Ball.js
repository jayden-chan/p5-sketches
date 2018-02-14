class Ball {
    constructor(xPos, yPos, xVel, yVel) {
        this.xPos = xPos;
        this.yPos = yPos;
        
        this.xVel = xVel;
        this.yVel = yVel;

        this.xAcc = 0;
        this.yAcc = 0;
    }

    draw() {
        ellipse(this.xPos, this.yPos, 20);
    }

    update() {
        this.xPos += this.xVel;
        this.yPos += this.yVel;

        this.xVel += this.xAcc;
        this.yVel += this.yAcc;

        this.xAcc = 0;
        this.yAcc = 0;
    }
}
