// 1. Copy and paste your prototype in here and refactor into class syntax.
// Hi, reviewer, I'll refactor into class syntax here but I won't paste my prototypes. Instead, I'm using the side bar in VSCode as a reference to avoid scrolling. Thanks!
// Adding B to the naming convention since it is interfering with prototypes.js

class CuboidMakerB{
    constructor(length, width, height){
        this.length =length;
        this.width = width;
        this.height = height;
    }
    volumeB(){
        return this.length * this.width * this.height;
    }
    surfaceAreaB(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}
const cuboidB = new CuboidMakerB(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidB.volumeB()); // 100
console.log(cuboidB.surfaceAreaB()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.