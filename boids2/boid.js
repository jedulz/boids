class Boid{
    constructor(x,y,radius,vx,vy,color){
        this.position = {
            x: x || randBetw(1,10),
            y: y || randBetw(1,10)
        }

        this.radius = radius || 5;

        this.velocity = {
            x: vx || randBetw(1,4)*randSign(),
            y: vy || randBetw(1,4)*randSign()
        }

        this.acceleration = {
            x:0,
            y:0
        }
        this.color = color;
    }
    
    /**
     * 
     * @param {array} flock array of boids
     * 
     * @returns {vector{x,y}} velocity vector
     */
    align(flock){
        let steer = {
            x:0,
            y:0
        }
        let neighborCount = 0;
        let perceptionRadius = 100;
        for (const other of flock) {
            if(other != this){
                if(distance(this.position, other.position) < perceptionRadius){
                    steer.x += other.velocity.x;
                    steer.y += other.velocity.y;
                    neighborCount++;
                }
            }
        }
        if(neighborCount == 0){
            return steer;
        }
        steer.x /= neighborCount;
        steer.y /= neighborCount;
        steer = normalize(steer, 1);
        return steer;
    }

    lookNear(flock, ctx){
        let perceptionRadius = 80;

        if(flock[1] == this){
            ctx.beginPath();
            ctx.fillStyle = "rgb(255, 255, 255, 0.1)"
            ctx.arc(this.position.x, this.position.y, perceptionRadius, 0, 2 * Math.PI);
            ctx.fill();
        }
        
        for(let other of flock){
            //get distance between this and other
            if(other != this && distance(this.position, other.position) < perceptionRadius){
                ctx.beginPath();
                ctx.strokeStyle = "white"
                ctx.moveTo(this.position.x, this.position.y);
                ctx.lineTo(other.position.x, other.position.y);
                ctx.stroke();
            }
        }
    }

    steer(force){
        this.acceleration.x += force.x,
        this.acceleration.y += force.y
    }

    edges(worldX, worldY){
        if(this.position.x > worldX){
            this.position.x = 0;
        }else if(this.position.x < 0){
            this.position.x = worldX;
        }
        if(this.position.y > worldY){
            this.position.y = 0;
        }else if(this.position.y < 0){
            this.position.y = worldY;
        }
    }

    update(flock){

        let alignment = this.align(flock);

        this.velocity.x += alignment.x
        this.velocity.y += alignment.y

        this.velocity = normalize(this.velocity, 5);

        this.velocity.x += this.acceleration.x
        this.velocity.y += this.acceleration.y

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

    draw(ctx){
        var angle = Math.atan2(this.velocity.y, this.velocity.x);
        ctx.save();
        //rectMode(CENTER);
        ctx.translate(this.position.x, this.position.y);
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        //create a triangle
        ctx.moveTo(15, 0);
        ctx.lineTo(-10, 6);
        ctx.lineTo(-10, -6);
        ctx.fill();
        ctx.restore();
    }
}
