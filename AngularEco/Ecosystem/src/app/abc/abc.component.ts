import { Component, OnInit } from '@angular/core';
import { FilterService } from '../filter.service';
import { Person } from '../person';


@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css']
})
export class AbcComponent implements OnInit {

  people: Person[];

  constructor(private filterService: FilterService) { }

  ngOnInit(): void {}

  getpeople():void{
    console.log("Success");
    this.filterService.getAnotherPerson().subscribe((p)=>{
        this.people = p;
        console.log('Observable is Working');
    },
    (error) => {
      console.log(error);
    }
    )
    


  
  // get peopleList(): Person[]{
  //   return this.filterService.getPerson();
  }

}
