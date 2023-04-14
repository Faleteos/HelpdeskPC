import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }
  url= "https://localhost:7009/api/"

  async Get(controlador:string){
    var response:any
    await this.http.get(this.url+controlador).subscribe(res=>{
      response=res
      console.log(res); 
    })
    
    return response
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

  async Delete(controlador:string, id:string, body:any){
    var response:any
    await this.http.delete(this.url+controlador+"/"+id).subscribe(res=>{
      response=res 
    })
    return response
  }

}
