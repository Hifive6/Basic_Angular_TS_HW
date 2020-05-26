// function sayHello(person: string): string{
//     return "Hello " + person;
// }
var Person = /** @class */ (function () {
    function Person(firstN, lastN, age, phone, state, zipcode, occupation, hourlyWage, hours) {
        this.firstN = firstN;
        this.lastN = lastN;
        this.age = age;
        this.phone = phone;
        this.state = state;
        this.zipcode = zipcode;
        this.occupation = occupation;
        this.hourlyWage = hourlyWage;
        if (hours) {
            this.hours = hours;
        }
        else {
            this.hours = 40;
        }
    }
    //getters
    Person.prototype.getFullName = function () {
        return "Full Name: " + this.firstN + " " + this.lastN;
    };
    Person.prototype.setFullName = function (firstN, lastN) {
        this.firstN = firstN;
        this.lastN = lastN;
    };
    Person.prototype.getNameAndPhone = function () {
        return this.getFullName() +
            "\nPhone Number: " + this.phone;
    };
    Person.prototype.getLocation = function () {
        return this.getFullName() + " lives in the state of " + this.state + " within the zipcode of " + this.zipcode;
    };
    Person.prototype.getOccupation = function () {
        return this.getFullName() + " works as a " + this.occupation + " at age " + this.age;
    };
    Person.prototype.weeklyWage = function (wage) {
        wage = this.hourlyWage * this.hours;
        return wage;
    };
    Person.prototype.personInfo = function () {
        return this.getFullName() + " makes $" + this.weeklyWage() + " per Week!";
    };
    return Person;
}());
var person1 = new Person("Joe", "Smith", "23", "K-555", "Texas", "79903", "Teacher", 23);
var person2 = new Person("Hannah", "Storm", "56", "K-556", "Connecticut", "06001", "Sports Anchor", 70);
var person3 = new Person("Omar", "Little", "33", "K-576", "Maryland", "12116", "Character", 80);
var person4 = new Person("Jack", "Hallsburg", "18", "K-585", "Maine", "03901", "Mad Scientist", 10);
console.log(person4.weeklyWage());
document.getElementById("id1").innerHTML = person1.getFullName();
document.getElementById("id2").innerHTML = person2.getLocation();
document.getElementById("id3").innerHTML = person3.getNameAndPhone();
document.getElementById("id4").innerHTML = person4.getOccupation();
document.getElementById("id5").innerHTML = person3.personInfo();
