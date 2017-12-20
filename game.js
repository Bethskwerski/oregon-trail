(function () {
    /*
    * Interfaces
    */
    /*
    * Classes
    */
    //The traveler class that implements the ITraveler interface
    //This is currently in violation of its contract with the interface. 
    //Create the code required to satisfy the contract with the interface
    var Traveler = /** @class */ (function () {
        function Traveler(food, name, isHealthy) {
            this.food = food;
            this.name = name;
            this.isHealthy = isHealthy;
        }
        Traveler.prototype.hunt = function () {
            if ((Math.random() * 10) <= 5) {
                this.food += 100;
            }
            return this.food;
        };
        Traveler.prototype.eat = function () {
            if (this.food - 20 >= 0) {
                this.food -= 20;
                return true;
            }
            else {
                this.isHealthy = false;
                return this.isHealthy;
            }
        };
        return Traveler;
    }());
    //The wagon class that implements the IWagon interface
    //This is currently in violation of its contract with the interface.
    //Create the code required to satisfy the contract with the interface 
    var Wagon = /** @class */ (function () {
        function Wagon(capacity, passengerArray) {
            this.capacity = capacity;
            this.passengerArray = passengerArray;
        }
        Wagon.prototype.addPassenger = function (traveler) {
            if (this.passengerArray.length < 4) {
                this.capacity += 1;
                this.passengerArray.push(traveler);
                return "Added";
            }
            else {
                return "Sorry";
            }
        };
        Wagon.prototype.isQuarantined = function () {
            for (var _i = 0, _a = this.passengerArray; _i < _a.length; _i++) {
                var passenger = _a[_i];
                if (!passenger.isHealthy) {
                    return true;
                }
            }
            return false;
        };
        Wagon.prototype.getFood = function () {
            var wagonFood = 0;
            for (var _i = 0, _a = this.passengerArray; _i < _a.length; _i++) {
                var passenger = _a[_i];
                wagonFood += passenger.food;
            }
            return wagonFood;
        };
        return Wagon;
    }());
    var traveler1 = new Traveler((Math.round(Math.random() * 100)), "David", true);
    var traveler2 = new Traveler((Math.round(Math.random() * 100)), "Lori", true);
    var traveler3 = new Traveler((Math.round(Math.random() * 100)), "Britta", true);
    var traveler4 = new Traveler((Math.round(Math.random() * 100)), "Jon", true);
    var traveler5 = new Traveler((Math.round(Math.random() * 100)), "Ted", true);
    var wagon = new Wagon(4, []);
    console.log(traveler1.name + " went hunting and this traveler's food is now " + traveler1.hunt());
    console.log(traveler2.name + " went hunting and this traveler's food is now " + traveler2.hunt());
    console.log(traveler3.name + " is healthy = " + traveler4.eat());
    console.log(traveler4.name + " is healthy = " + traveler2.eat());
    console.log(traveler5.name + " is healthy = " + traveler5.eat());
    var travelers = new Array(traveler1, traveler2, traveler3, traveler4, traveler5);
    for (var i = 0; i < travelers.length; i++) {
        if ((Math.random() * 10) <= 5) {
            wagon.addPassenger(travelers[i]);
        }
    }
    console.log("Wagon is quantined = " + wagon.isQuarantined());
    console.log("Passengers of the wagon have a total of " + wagon.getFood() + " food.");
    /*
    * Play the game
    *
    * Create 5 healthy travelers object with a random amount of food between 0 and 100 (inclusive)
 

    *
    * Create wagon with an empty passenger list and a capacity of 4.

    *
    * Make 3 of 5 the travelers eat by calling their eat methods
    *
    * Make the remaining 2 travelers hunt
    *
    * Create an array of your travelers, loop over the array of travelers and give each traveler a 50% chance
    * of attempting to be being added to the wagon using the wagons addPassenger method.
    *
    * Run the isQuarantined method for the wagon
    *
    * Run the getFood method for the wagon
    *
    * the return values of all the methods should be displayed in the console using console.log()
    * the console.log statements should not live inside any methods on the objects
    *
    */
})();
