import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from './product.model';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ProductDetailComponent,
    RouterModule,
    FilterPipe,
  ],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  searchText: string = '';
  selectedCategory: string = '';
  selectedTags: string[] = [];
  productdata: Product[] = []; // Specifying the type for productdata
  count = 0;
  showadd: boolean = true;
  showremove: boolean = false;

  constructor(private service: ApiService) {}

  ngOnInit() {
    this.service.getProductDetails().subscribe((data: Product[]) => {
      console.log(data);
      this.productdata = data;
    });
  }

  addtocart(product: Product) {
    this.service.addtocart(product);
    this.count++;
    this.showremove = true;
    this.showadd = false;
  }

  removeitem(product: Product) {
    this.service.removecartitem(product);
    this.count--;
    this.showadd = true;
    this.showremove = false;
  }
  updateTags(event: Event) {
    const target = event.target as HTMLInputElement;
    this.selectedTags = target.value.split(',').map((tag) => tag.trim());
  }
}
