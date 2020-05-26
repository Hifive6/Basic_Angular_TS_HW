// function sayHello(person: string): string{
//     return "Hello " + person;
// }



class Person{

    private firstN: string;
    private lastN: string;
    private age: string;
    private phone: string;
    private state: string;
    private zipcode: string;
    private occupation: string;
    private hourlyWage: number;
    private hours: number;
    private degrees: string[];
    

    constructor(firstN: string, lastN: string, age: string, phone: string, state: string, zipcode: string, occupation: string, hourlyWage: number, hours?: number){
        this.firstN = firstN;
        this.lastN = lastN;
        this.age = age;
        this.phone = phone;
        this.state= state;
        this.zipcode = zipcode;
        this.occupation = occupation;
        this.hourlyWage = hourlyWage;
        if(hours){
            this.hours = hours;
        } else {
            this.hours = 40;
        }
        
    }

    //getters
    getFullName(): string{
        return "Full Name: " + this.firstN + " " +this.lastN;
    }

    setFullName(firstN: string, lastN: string): void{
        this.firstN = firstN;
        this.lastN = lastN;
    }

    getNameAndPhone(): string{
        return this.getFullName() + 
        "\nPhone Number: " + this.phone; 
    }

    getLocation(): string{
        return this.getFullName() + " lives in the state of " + this.state + " within the zipcode of " + this.zipcode;
    }
    getOccupation(): string{
        return this.getFullName() + " works as a " + this.occupation + " at age " + this.age;
    }
    weeklyWage(wage?: number): number{
        wage = this.hourlyWage * this.hours;
        return wage; 
    }
    personInfo(): string{
        return this.getFullName() + " makes $" + this.weeklyWage() + " per Week!"
    }
    addCerts(...certs){
        for(let i = 0; i < certs.length; i++){
            this.degrees.push(certs[i]);
        }
    }
    public static newPerson(config: PersonOptions):{ age: string, phone: string } {
        let newPerson = {
            age: "30",
            phone: "K-000"
        }
        if(config.age){
            newPerson.age = config.age;
        }
        if(config.phone){
            newPerson.phone = config.phone
        }
        return newPerson;
     }
    
   
   
    
}

interface PersonOptions{
    firstN: string;
    lastN: string;
    age?: string;
    phone?: string;
   
}



let person0 =  Person.newPerson({firstN: "George", lastN: "Bergs", age: "23", phone: "K098"});
console.log(person0);

let person1 = new Person("Joe", "Smith", "23", "K-555", "Texas", "79903", "Teacher", 23);

let person2 = new Person("Hannah", "Storm", "56", "K-556", "Connecticut", "06001", "Sports Anchor", 70);

let person3 = new Person("Omar", "Little", "33", "K-576", "Maryland", "12116", "Character", 80);

let person4 = new Person("Jack", "Hallsburg", "18", "K-585", "Maine", "03901", "Mad Scientist", 10);



document.getElementById("id1").innerHTML = person1.getFullName();

document.getElementById("id2").innerHTML = person2.getLocation();

document.getElementById("id3").innerHTML = person3.getNameAndPhone();

document.getElementById("id4").innerHTML = person4.getOccupation();

document.getElementById("id5").innerHTML = person3.personInfo();
// document.getElementById("id6").innerHTML = person0





