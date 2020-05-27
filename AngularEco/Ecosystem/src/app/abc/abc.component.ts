import { Component, OnInit } from '@angular/core';
import { FilterService } from '../filter.service';
import { Person } from '../person';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css']
})
export class AbcComponent implements OnInit {

  peopleList: Person[];

  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
    
    this.ngOnInit;
   
   
  }

  getPeople(){
    this.filterService.getPerson().subscribe(p => 
      this.peopleList = p);
  }
  // get peopleList(): Person[]{
  //   return this.filterService.getPerson();
  // }

}
