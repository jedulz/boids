## Boid Notes.

I saw daniel shiffman use p5 js to do it and I tried to recreate what he did but I didnt fully understand vecors or some of their functions

So I found a vector class online this : https://evanw.github.io/lightgl.js/docs/vector.html

but i still couldnt get it work that well, so I added some functions for limiting and set magnitude but still couldnt get it

so I watched Sabastien Lague's video on it and then watched KDPRoss's video on creating it in JS.

My goal is to create a boids simulation from scratch using Javascript, which when I looked at KDPRoss's code, thats what he did.

So now after talking with my coworkers about vectors and other beginner physic's that i didnt know. I going to try and recreate what KDPRoss did

but in my own way. I want to learn everything about this project.

Let's start with 10 points that move in random directions and bounce of the walls.


Okay so i didnt make them bounce off the walls but I did have them go through the walls and appear on the other size
I think ill add a function to have them steer away from the walls but not right now

Next I want them to draw the distance to those nearby



I think the lines for the distance is really cool but I need to be able to steer them so I can align them

I'll add a function to change the accleration by a givin force


that sort of worked. it kept adding more and more acceleration on keydown

i also put the things in folders since i think there are some milestones with this project that i wanted to keep and get back to easily.

Ill create a folder for this new step.

Changing everything to use triangles instead of dots and also having them face the way they are going

i wanna do something like this: https://www.khanacademy.org/computing/computer-programming/programming-natural-simulations/programming-angular-movement/a/pointing-towards-movement


I got them to be triangles and also face the direction they were going.

Now I want to update things, I am trying to find the distance between one point and the closest point on a line segment

If i update my lookNearby function I could have the boid look at all the segments for each boid in the flock that are nearby!important

** To get the equation of a line all we need is a point, and a slope and plug them into this

ax + by + c = 0

//https://www.coolmath.com/algebra/08-lines/12-finding-equation-two-points-02

arbitrary (3,3), 1/3

y-y1 = m(x-x1) : y-3 = 1/3(x-3) multiply all by three

3y-9 = 3x-9

y = 1x + 0   or   1x - 1y = 0
y = mx + b   or   ax + by + c


bad example but this should still work and it covers an edge case




For now i just added an overlay menu to the homepage of boids so that I can look back at my progress on making this and 

get an idea for how I learned this.



I just found out that the video I was watching doesnt do collision detection between a point and a line

just compares boids by a point at the center of them. 

-Move the points


I got alignment!