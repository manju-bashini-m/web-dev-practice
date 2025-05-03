import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from './product/product.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:3000';

  private cartitemlist: Product[] = []; // Specify the type for cart items
  private productlist = new BehaviorSubject<Product[]>([]); // Specify the type for BehaviorSubject
  public amount: number = 0;

  constructor(private _http: HttpClient) {}
  registerUser(userDetails: any): Observable<any> {
    console.log('User details:', userDetails);
    return this._http.post(`${this.baseUrl}/signupUsers`, userDetails);
  }
  getUserByEmail(email: string): Observable<any> {
    return this._http.get(`${this.baseUrl}/signupUsers?email=${email}`);
  }
  getProductDetails(): Observable<Product[]> {
    // Specify the type of observable
    return this._http.get<Product[]>(`${this.baseUrl}/products`);
  }
  getproductbyid(id: string): Observable<Product> {
    return this._http.get<Product>(`${this.baseUrl}/products/${id}`);
  }
  addtocart(data: Product): void {
    this.cartitemlist.push(data);
    this.productlist.next(this.cartitemlist);
    console.log(this.cartitemlist);
  }

  products() {
    return this.productlist.asObservable();
  }

  removecartitem(data: Product): void {
    const indexToRemove = this.cartitemlist.findIndex(
      (a: Product) => data.id === a.id
    );

    if (indexToRemove !== -1) {
      this.cartitemlist.splice(indexToRemove, 1);
      this.productlist.next([...this.cartitemlist]); // Using spread operator to create a new array
    }
  }
  // Calculate total price of items in the cart
  calculatePrice(): number {
    return this.cartitemlist.reduce((total, item) => total + item.price, 0);
  }

  // Remove all items from the cart
  removeAllItems(): void {
    this.cartitemlist = [];
    this.productlist.next(this.cartitemlist);
  }

  // Pass data (final amount) to another component
  sendFinalAmount(data: number): void {
    this.amount = data;
  }

  // Receive data (final amount) from another component
  receiveFinalAmount(): number {
    return this.amount;
  }
}
