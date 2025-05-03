import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormsModule,FormBuilder,Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterModule,LoginComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  regdata: any;

  constructor(private _formbuilder:FormBuilder, private http:HttpClient, private router:Router, private apiService:ApiService){}

  ngOnInit(){
    
    this.regdata=this._formbuilder.group({
      fname:["",[Validators.required,Validators.minLength(3)]],
      lname:["",Validators.required],
      email:["",[Validators.required,Validators.email]],
      mobileNo :["",Validators.required],
      password:["",[Validators.required,Validators.minLength(8)]]

    })
  }
  register(formData:FormGroup){
    console.log(formData.value);
    console.log(formData.valid);

    this.apiService.registerUser(formData.value).subscribe(
      response => {
        alert("SignUp Successful!!");
        this.regdata.reset()
        this.router.navigate(['login'])
        },
        error=>{
          alert("Something went wrong. Please check !!"+error)
        }
    )

    // this.http.post<any>("http://localhost:3000/signupUsers",formData.value).
    // subscribe(res=>{
    //   alert("SignUp Successful!!");
    //   this.regdata.reset()
    //   this.router.navigate(['login'])
    // },err=>{
    //   alert("Something went wrong. Please check !!")
    // })
    
  }
}
