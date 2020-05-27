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
    this.peopleList = this.filterService.getPerson();
   
  }
  // get peopleList(): Person[]{
  //   return this.filterService.getPerson();
  // }

}
