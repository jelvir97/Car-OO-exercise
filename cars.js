class Vehicle{
    constructor(make, model, year){
        this.make = make,
        this.model = model,
        this.year = year
    }
    honk(){
        return 'Beep!'
    }
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }

}

class Car extends Vehicle{
    constructor(...data){
        super(...data);
        
    }
    numWheels = 4
}

class Motorcycle extends Vehicle{
    constructor(...data){
        super(...data);

    }
    numWheels = 2;
    revEngine(){
        return "VROOM!!"
    }
}

class Garage{
    constructor(capacity){
        this.capacity = capacity;
    }
    vehicles = [];
    add(veh){
        if(this.vehicles.length < this.capacity){
            if(veh instanceof Vehicle){
                this.vehicles.push(veh);
                return `Your ${veh.make} ${veh.model} has been added to garage.`
            }else{
                return "Only Vechicles are allowed in the garage."
            }
        }else{
            return "Garage is at capacity!"
        }
    }
}