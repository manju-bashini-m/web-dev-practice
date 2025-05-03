import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-order-success',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-success.component.html',
  styleUrl: './order-success.component.css',
})
export class OrderSuccessComponent {
  userdata: any;
  username: any;
  constructor(private router: Router, private api: ApiService) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/']);
      this.api.removeAllItems();
    }, 4000);
    //getting item from localstorage
    let localdata = localStorage.getItem('userData');
    this.userdata = localdata;
    this.username = JSON.parse(this.userdata);
  }
}
