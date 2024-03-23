import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/Patient';

@Component({
  selector: 'app-home-front',
  templateUrl: './home-front.component.html',
  styleUrls: ['./home-front.component.css']
})
export class HomeFrontComponent implements OnInit{

   UserConnected! :any;
  ngOnInit(): void {
   this.UserConnected = localStorage.getItem('Patient');
   console.log(typeof this.UserConnected);
   const abc =JSON.parse(this.UserConnected);
   console.log(abc.user);
   console.log(abc.idpatient);

   const pas: Patient ={
    idpatient: abc.idpatient,
    user:abc.user,
    typePatient: abc.typePatient,
    archiver: abc.archiver,
}
   console.log("Brahmi------------------");
   console.log(pas);
   
   
  }
  


}
