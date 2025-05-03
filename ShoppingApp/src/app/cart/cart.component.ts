import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { ApiService } from '../api.service';
import { Product } from '../product/product.model';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from '../product/product.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    ProductComponent,
    RouterModule,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  showproduct: any = [];
  public totalamount: number = 0;
  public taxamount: number = 0;
  public finalamount: number = 0;
  public addressform = false;
  public sentamount: number = 0;
  public count: number = 1;
  myform: FormGroup | any;
  constructor(private api: ApiService) {}
  calculateTotalAmount() {
    this.totalamount = this.showproduct.reduce(
      (total: number, item: Product) => total + item.price * item.count,
      0
    );
    this.taxamount = (this.totalamount / 100) * 15;
    this.finalamount = this.taxamount + this.totalamount;
    this.sentamount = this.finalamount;
    this.api.sendFinalAmount(this.sentamount);
  }
  ngOnInit(): void {
    this.api.products().subscribe((res) => {
      this.showproduct = res.map((item: Product) => ({ ...item, count: 1 }));
      this.calculateTotalAmount();
    });

    //form
    this.myform = new FormGroup({
      email: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
    });
  }
  deleteitem(item: Product) {
    this.api.removecartitem(item);
  }
  Empty() {
    this.api.removeAllItems();
  }
  cancel() {
    this.addressform = false;
    this.myform.reset();
    localStorage.removeItem('ecomdata');
  }
  onsubmit() {
    this.myform.value;
    console.log(this.myform.value);
    localStorage.setItem('ecomdata', JSON.stringify(this.myform.value.name));
    //this.myform.reset();
  }
  onlinepay() {
    localStorage.setItem('ecomdata', JSON.stringify(this.myform.value.name));
  }

  countIncrement(item: Product) {
    item.count++;
    this.calculateTotalAmount();
  }

  countDecrement(item: Product) {
    if (item.count > 1) {
      item.count--;
      this.calculateTotalAmount();
    }
  }
}
