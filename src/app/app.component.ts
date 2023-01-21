import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practica2';
  data:any = {
  name:String,
  summary:String,
  valuation:Number,
  address:String,
  city:String,
  state:String
  };

  constructor(private http:HttpClient){
  }
  ngOnInit(){
    this.http.get('https://api.spacexdata.com/v4/company').subscribe((data:any)=>{this.data=data;});
    console.log(this.data);
  }

   nose(){
    let res = Object.values(this.data);
    console.log(res);
   }


}
