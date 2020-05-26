function sayHello(person: string): string{
    return "Hello " + person;
}

let person1 = "Super Student";

document.getElementById("id1").innerHTML = sayHello(person1);