import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Product } from '../product/product.model';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, ProductComponent, RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  productdata: any | Product[];
  showadd: boolean = true;
  showremove: boolean = false;

  constructor(
    private service: ApiService,
    private activatedroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let productid = this.activatedroute.snapshot.paramMap.get('productid');
    // console.log("product id is",productid)
    productid &&
      this.service.getproductbyid(productid).subscribe((res) => {
        this.productdata = res;
        console.log(res);
      });
  }

  addtocart(productdata: Product) {
    this.showadd = false;
    this.showremove = true;
    this.service.addtocart(productdata);
  }

  removeitem(productdata: Product) {
    this.showadd = true;
    this.showremove = false;
    this.service.removecartitem(productdata);
  }
}
