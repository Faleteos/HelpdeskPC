import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  constructor(public Api: ApiService){}
  ngOnInit(): void {
    this.GetPersonas();
  //  throw new Error('Method not implemented.');
  }

 public GetPersonas(){
  var response=this.Api.Get("Personas");
 } 

}
