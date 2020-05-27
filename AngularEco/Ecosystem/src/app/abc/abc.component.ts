import { Component, OnInit } from '@angular/core';
import { FilterService } from '../filter.service';
import { Person } from '../person';


@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css']
})
export class AbcComponent implements OnInit {

  // peopleList: string[];

  constructor(private filterService: FilterService) { }

  ngOnInit(): void {}

  // get people():{
  //   console.log("Success")
  //   this.filterService.getPerson().subscribe(p => 
  //     this.peopleList = p.map((ap: any)=>{
  //       return ap;
  //     }));
  
  get peopleList(): Person[]{
    return this.filterService.getPerson();
  }

}
