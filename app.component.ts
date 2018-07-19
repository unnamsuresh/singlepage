import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses=["angular","reactjs","nodejs"];
  newCourse="";
  pushCourse=function(){
    if(this.newCourse!="")
    {
this.courses.push(this.newCourse);
this.newCourse="";
    }
  }
  removeCourse=function(index){
    this.courses.splice(index,1);
  }
}
