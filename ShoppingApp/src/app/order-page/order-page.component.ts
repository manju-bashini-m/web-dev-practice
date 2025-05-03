import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-order-page',
  standalone: true,
  imports: [ProductComponent, RouterModule, CommonModule, FormsModule],
  templateUrl: './order-page.component.html',
  styleUrl: './order-page.component.css',
})
export class OrderPageComponent {
  public finalamount: number = 0;
  public totalamount: number = 0;
  public userdata: any;
  public username: any;
  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/product']);
      this.api.removeAllItems();
    }, 4000);

    // totalamount coming from api
    this.totalamount = this.api.calculatePrice();

    // recieving data between components getting data
    this.finalamount = this.api.receiveFinalAmount();
    //alert(this.data)
  }
  User: any = localStorage.getItem('userName');
}
