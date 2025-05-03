import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule, SignupComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // corrected to styleUrls
})
export class LoginComponent implements OnInit {
  logindata: any;

  constructor(
    private _formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private apiService: ApiService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.logindata = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login(formData: FormGroup) {
    if (formData.valid) {
      this.apiService.getUserByEmail(formData.value.email).subscribe({
        next: (response: any) => {
          if (
            response.length > 0 &&
            response[0].password === formData.value.password
          ) {
            localStorage.setItem('userName', response[0].fname);
            sessionStorage.setItem('islogedin', 'true');
            this.router.navigate(['home']);
          } else {
            sessionStorage.setItem('islogedin', 'false');
            alert('Email id or password is wrong !! Please check.');
          }
        },
        error: (err) => {
          console.error('Error details:', err);
          alert('Something went wrong. Please check email and password.');
        },
      });
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }
}
