import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 // get(arg0: string) {
   // throw new Error('Method not implemented.');
  //}

  constructor(public http:HttpClient) { }
  url= "https://localhost:7271/api/"

  public async get(controlador: string){
    var response:any
    await this.http.get(this.url+controlador).toPromise().then(res=>{
      response=res
      console.log(res); 
    })
    
    return response
  }

  /**Login para acceder */
  public getIdLogin(controlador:string,data:string):Observable<any>{
     return this.http.get(this.url+controlador+"/"+data,{responseType:'text'});
  }
  

  async Post(controlador:string, body:any){
    var response:any
    await this.http.post(this.url+controlador+"/", body).subscribe(res=>{
      response=res 
    })

    return response
  }

  async Put(controlador:string, id:string, body:any){
    var response:any
    await this.http.put(this.url+controlador+"/"+id, body).subscribe(res=>{
      response=res 
    })
    return response
  }


  async Delete(controlador:string, id:string){
    var response:any
     this.http.delete(this.url+controlador+"/"+id).subscribe(res=>{
      response=res 
    })
    return await response
  }

}
