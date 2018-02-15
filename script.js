function Ninja(name){
    this.name = name;
    this.health =100;
    let speed= 3;
    let strength = 3;
    this.sayName=function() {
        console.log(`My Name name is ${this.name}`);
    }

    Ninja.prototype.showStats = function() {
        console.log(`Name: ${this.name}, Health:${this.health}, Speed:${speed}, Strength:${strength}`);
        return this;
    }
    Ninja.prototype.drinkSake = function(){
        this.health += 10;
        return this;
    }
    Ninja.prototype.punch= function(ninja){
        if(ninja instanceof Ninja){
        ninja.health-= 5;
        console.log(`${ninja.name} was punched by ${this.name} and lost 5 health`)
        }else{
            console.log("Get out.")
        }

    }
    Ninja.prototype.kick = function(ninja){
        if(ninja instanceof Ninja){
            let damage = 15 * strength;
            ninja.health-= damage;
            console.log(`${ninja.name} was kicked by ${this.name} and lost ${damage} health`);
        } else{
            console.log('This is not a ninja. He is not allowed');
        }
     
    }
 

}
// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.drinkSake();
// ninja1.showStats();
const blueNinja = new Ninja("Goemon");
const redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
blueNinja.kick(redNinja);
blueNinja.kick("let me in");
blueNinja.punch("let me in");