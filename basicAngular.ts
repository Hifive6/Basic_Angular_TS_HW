function sayHello(person: string): string{
    return "Hello " + person;
}

let person1 = "Super Student";

document.getElementById("id1").innerHTML = sayHello(person1);

class Person{

    private firstN: string;
    private lastN: string;
    private age: string;
    private phone: string;
    private state: string;
    private zipcode: string;
    private occupation: string;

    constructor(firstN: string, lastN: string, age: string, phone: string, state: string, zipcode: string, occupation: string){
        this.firstN = firstN;
        this.lastN = lastN;
        this.age = age;
        this.phone = phone;
        this.state= state;
        this.zipcode = zipcode;
        this.occupation = occupation;
    }

    //getters
    getfullName(): string{
        return "Full Name: " + this.firstN + this.lastN;
    }

    getNameAndPhone(): string{
        return this.getfullName() + 
        "\nPhone Number: " + this.phone; 
    }

    getLocation(): string{
        return this.getfullName() + " lives in the state of " + this.state + " witin the zipcode of " + this.zipcode;
    }




}