import { Injectable } from '@angular/core';
import { Person } from './person';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private personArray: Person[] = [
    new Person("Omar", "Little", 30),
    new Person("Joe", "Smales", 23),
    new Person("Jake", "Biggs", 45)
  ]
  constructor(private aPerson: Person) { }

  getPerson(): Person[]{
    return this.personArray.filter((person)=>{
      this.delay(4000);
      return person.getFullInfo();
    })
  }

  // getAnotherPerson(): Observable<Person[]>{
  //   return of(people);
  // }

  async delay(ms: number){
    await new Promise(resolve =>
      setTimeout(()=> 
       resolve(), ms));
  }
}
