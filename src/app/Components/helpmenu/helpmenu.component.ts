import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-helpmenu',
  templateUrl: './helpmenu.component.html',
  styleUrls: ['./helpmenu.component.css']
})
export class HelpmenuComponent {

  isWeb$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Web)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public loginservice:LoginService) {
    
    }

  async onSubmit(){
   localStorage.setItem('login', 'logout');
   this.loginservice.login.next("logout"); 
   location.href='/';
  }

}
