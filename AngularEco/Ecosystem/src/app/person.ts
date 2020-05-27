export class Person {
    private firstN: string;
    private lastN: string;
    private age: number;

    constructor(firstN: string, lastN: string, age: number){
        this.firstN = firstN;
        this.lastN = lastN;
        this.age = age;
    }

    getFullInfo(): string{
        return this.firstN + " " + this.lastN + " age: " + this.age;
    }

    setFullInfo(firstN: string, lastN: string, age: number): void{
        this.firstN = firstN;
        this.lastN = firstN;
        this.age = age;
    }
}
