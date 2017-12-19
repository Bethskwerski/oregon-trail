(function () {

    /*
    * Interfaces
    */

    //interface describing what attributes and methods a traveler should have
    interface ITraveler {
        food: number;
        name: string;
        isHealthy: boolean;

        //when implemented, There should be 50% chance to increase the traveler's food by 100.
        //return the travelers new food value
        hunt(): number;

        //when implemented, we should check to see if the traveler has a food supply of 20
        //If they do then we should consume 20 of the available food supply
        //If they don't have 20 food then we should change isHealthy to false
        //return the travelers health after attempting to eat
        eat(): boolean;


    }

    //interface describing attributes and methods a wagon should have
    interface IWagon {
        capacity: number;
        passengerArray: Traveler[];

        //when implemented, we should add the traveler to the wagon if the capacity permits
        //this function should return the string "added" on success and "sorry" on failure
        addPassenger(traveler: Traveler): string;

        //this should return true if there is at least one unhealthy person in the wagon
        //if everyone is healthy false should be returned
        isQuarantined(): boolean;

        //Return the total amount of food among all passengers of the wagon.
        getFood(): number;

    }

    /*
    * Classes
    */

    //The traveler class that implements the ITraveler interface
    //This is currently in violation of its contract with the interface. 
    //Create the code required to satisfy the contract with the interface
    class Traveler implements ITraveler {
        food: number;
        name: string;
        isHealthy: boolean;

        constructor(food: number, name: string, isHealthy: boolean) {
            this.food = food;
            this.name = name;
            this.isHealthy = isHealthy;
        }

        hunt() {
            if ((Math.random() * 10) <= 5) {
                this.food += 100;
                
            }
            return this.food;
        }

        eat() {
            if (this.food - 20 >= 0) {
                this.food -= 20;
                return true;
            }
            else {
                this.isHealthy = false;
                return this.isHealthy;
            }

        }

    }




    //The wagon class that implements the IWagon interface
    //This is currently in violation of its contract with the interface.
    //Create the code required to satisfy the contract with the interface 
    class Wagon implements IWagon {

        capacity: number;
        passengerArray: Traveler[];

        constructor(capacity: number, passengerArray: Traveler[]) {
            this.capacity = capacity;
            this.passengerArray = passengerArray;
        }



        addPassenger(traveler: Traveler) {
            if (this.passengerArray.length < 4) {
                this.capacity += 1;
                this.passengerArray.push(traveler);
                return "Added";
            }
            else {
                return "Sorry";
            }

        }
        isQuarantined() {
            for (let passenger of this.passengerArray) {
                if (!passenger.isHealthy) {
                    return true;
                }
            }

            return false;

        }

        getFood() {
            let wagonFood:number = 0;
            for (let passenger of this.passengerArray) {
               wagonFood += passenger.food;
               
            }
            return wagonFood;

        }



    }


    let traveler1 = new Traveler((Math.round(Math.random() * 100)), "David", true);
    let traveler2 = new Traveler((Math.round(Math.random() * 100)), "Lori", true);
    let traveler3 = new Traveler((Math.round(Math.random() * 100)), "Britta", true);
    let traveler4 = new Traveler((Math.round(Math.random() * 100)), "Jon", true);
    let traveler5 = new Traveler((Math.round(Math.random() * 100)), "Ted", true);

    let wagon = new Wagon(4, []);

    
    console.log(traveler1.name + " went hunting and this traveler's food is now " + traveler1.hunt());
    console.log(traveler2.name + " went hunting and this traveler's food is now " + traveler2.hunt());
    console.log(traveler3.name + " is healthy = " + traveler4.eat());
    console.log(traveler4.name + " is healthy = " +  traveler2.eat());
    console.log(traveler5.name + " is healthy = " + traveler5.eat());

    let travelers = new Array<Traveler>(traveler1,traveler2, traveler3, traveler4, traveler5);

    for (let i = 0; i < travelers.length; i++) {
        wagon.addPassenger(travelers[i]);
        }
    
    console.log("wagon is quantined = " + wagon.isQuarantined());
    console.log("Passengers of the wagon have a total of " +  wagon.getFood() + " food." )
  




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

