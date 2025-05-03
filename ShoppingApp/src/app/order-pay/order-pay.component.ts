import { Component, importProvidersFrom } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-order-pay',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, RouterModule],
  templateUrl: './order-pay.component.html',
  styleUrl: './order-pay.component.css',
})
export class OrderPayComponent {
  constructor(private api: ApiService) {}
  public finalamount: number = 0;
  carddetails: boolean = true;
  otpdetails: boolean = false;
  cardform: FormGroup | any;
  otpform: FormGroup | any;
  ngOnInit(): void {
    this.finalamount = this.api.receiveFinalAmount();
    //form
    this.cardform = new FormGroup({
      cardname: new FormControl('', Validators.required),
      expirymonth: new FormControl('', Validators.required),
      expiryyear: new FormControl('', Validators.required),
      cvv: new FormControl('', Validators.required),
    });
    this.otpform = new FormGroup({
      otp: new FormControl('', Validators.required),
    });
  }
  pay() {
    this.otpdetails = true;
    this.carddetails = false;
  }
  cancel() {
    this.carddetails = true;
    this.otpdetails = false;
  }
}
