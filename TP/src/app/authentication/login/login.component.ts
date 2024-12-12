import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user={
    name:'',
    firstname:'',
    age:0,
    email:'',
    password:''
  }
  users:any;
cvService=inject(CvService);
router=inject(Router);
tstr=inject(ToastrService) 
// onGetUsers(){
//   this.cvService.getCvs().subscribe({
//     next:(res)=>{
//       this.users=res;
//     },
//     error:(err)=>{
//       console.log(err);
//     }
//   })
// }
onSubmit(form:NgForm) {
 
 if (form.valid){
  this.tstr.success('User logged successfully','Success');
}
  else{
    this.tstr.error('User doesnt exist','Error');}
  }
}


