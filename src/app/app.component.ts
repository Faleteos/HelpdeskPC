import { Component, OnInit } from '@angular/core';
// import { LoginService } from 'src/app/Services/login.service';
import { LoginService } from './Services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'helpdeskpc01';

  constructor(public loginservice:LoginService) {
   }
   login: any;
   
   ngOnInit(): void {
   }
}
