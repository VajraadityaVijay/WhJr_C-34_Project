class Structure {
    constructor(x, y, width, height, xNumber, yNumber) {
        this.structureGroup = [];
        this.colors = ["orange", "lightgreen", "lightblue", "yellow"];
        this.colorRandomizer;
        this.color = [];

        this.options = {
            isStatic: false
        }

        for(var i = 0; i < xNumber; i++) {
            for(var j = 0; j < yNumber; j++) {
              this.block = Matter.Bodies.rectangle(x + (i * width), y - (j * height), width, height, this.options);
              World.add(world, this.block)
              this.structureGroup.push(this.block);
            }
        }

        this.eachWidth = width;
        this.eachHeight = height;
    }

    setColors() {
        for(var i = 0; i < this.structureGroup.length; i++) {
            this.colorRandomizer = Math.round(random(0, 3));
            this.color.push(this.colors[this.colorRandomizer]);
        }
    }

    display() {
        for(var i = 0; i < this.structureGroup.length; i++) {
            fill(this.color[i]);
            ellipse(this.structureGroup[i].position.x, this.structureGroup[i].position.y, this.eachWidth, this.eachHeight);
        }
    }
}