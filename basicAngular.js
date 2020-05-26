function sayHello(person) {
    return "Hello " + person;
}
var person1 = "Super Student";
document.getElementById("id1").innerHTML = sayHello(person1);
var Person = /** @class */ (function () {
    function Person(firstN, lastN, age, phone, state, zipcode, occupation) {
        this.firstN = firstN;
        this.lastN = lastN;
        this.age = age;
        this.phone = phone;
        this.state = state;
        this.zipcode = zipcode;
        this.occupation = occupation;
    }
    //getters
    Person.prototype.getfullName = function () {
        return "Full Name: " + this.firstN + this.lastN;
    };
    Person.prototype.getNameAndPhone = function () {
        return this.getfullName() +
            "\nPhone Number: " + this.phone;
    };
    Person.prototype.getLocation = function () {
        return this.getfullName() + " lives in the state of " + this.state + " witin the zipcode of " + this.zipcode;
    };
    return Person;
}());
