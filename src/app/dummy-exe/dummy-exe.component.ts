import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Observable,Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-dummy-exe',
  templateUrl: './dummy-exe.component.html',
  styleUrls: ['./dummy-exe.component.scss']
})
export class DummyExeComponent {
  totalnumber:any[] = [];
  favoriteanswer!: string;
  correctanswer:number;
  empForm: FormGroup;
  currentnumber:number;
   remintime:number = 20;
    timer =interval(1000);
    isformvalid:boolean =false;
  isfinished:boolean =false;
   isstarted:boolean=false;
   isterminate:boolean=false;
     subscribtion: Subscription [] =[];
  constructor(private http:HttpClient,private _fb: FormBuilder,){
   this.empForm = this._fb.group({
      name:''
   })
     this.currentnumber =0;
     this.correctanswer =0;

  }
  ngOnInit(){
    this.loadjson();

  }
  loadjson(){
    this.http.get("assets/q.json").subscribe((res:any)=>{

        this.totalnumber=res;
    })
  }
  next(){
    this.getoutdata();
    if(this.currentnumber < this.totalnumber.length){
      this.currentnumber++;
      this.remintime=20;
      this.favoriteanswer = 'null';


    }
    if(this.currentnumber >= this.totalnumber.length){
      this.finish();
      // console.log(this.favoriteanswer);
      // console.log(this.correctanswer);
    }
  }
  quize(){

   this.subscribtion.push( this.timer.subscribe(res=>{

      if(this.remintime !=0){
        this.remintime--;
      }
      if(this.remintime == 0){

        this.next();

      }
      // console.log(res);

    })
   )
  }
  finish(){
    this.subscribtion.forEach(element => {
      element.unsubscribe();
  });
    this.currentnumber =0;
    this.remintime=20;
    this.isfinished=true;
    this.isstarted=false;


  }
  exit(){
      this.correctanswer=0;
    this.isfinished=false;
  }
  onFormSubmit() {
    if (this.empForm.valid) {
      this.isformvalid=false;
      this.isstarted=true;
      // console.log(this.empForm.value)
      this.quize();
    }
    else{
      this.isformvalid=true;
      // console.log('not valid');
    }
  }
  getoutdata(){
    for(let i=0;i<3;i++){
      if(this.totalnumber[this.currentnumber].answer[i].isanswer == true ){
        if(this.totalnumber[this.currentnumber].answer[i].isanswer == this.favoriteanswer)
           this.correctanswer++;

      }
    }
  }

}
