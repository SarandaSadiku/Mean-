function VehicleConstructor(name, wheels, passengers, speed){

    // private
    var self = this;
    var distance_travelled = 0;
    var updateDistanceTravelled = function(){
        distance_travelled += self.speed;
    }
    // public
    this.name = name;
    this.wheels = wheels;
    this.passengers = passengers;
    this.speed = speed;


    this.makeNoise = function(){
        console.log("Makeing noise!");
    }

    this.move = function(){
        updateDistanceTravelled();
        this.makeNoise();
    }

    this.checkMiles = function(){
        console.log(distance_travelled);
    }
}
var Bike = new VehicleConstructor("Bike", 2, 1);
// Bike.makeNoise();
Bike.makeNoise = function(){
    console.log("ring ring");
}
Bike.move();
Bike.checkMiles();

var Sedan = new VehicleConstructor("Sedan", 4, 4);
Sedan.makeNoise = function(){
    console.log("honk honk");
}
Sedan.makeNoise();
Sedan.move();
Sedan.checkMiles();

var Bus = new VehicleConstructor("Bus", 8,1,10);
Bus.pickUpPassengers = function(passengers){
    Bus.passengers += passengers;
}
console.log(Bus.passengers)
Bus.pickUpPassengers(14);
console.log(Bus.passengers)
Bus.move();
Bus.checkMiles();
