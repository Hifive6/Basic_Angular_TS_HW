import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private personArray: Person[] = [
    new Person("Omar", "Little", 23),
    new Person("Joe", "Smales", 23),
    new Person("Jake", "Biggs", 23)
  ]
  constructor() { }

  getPerson(): Person[]{
    return this.personArray;
  }
}
