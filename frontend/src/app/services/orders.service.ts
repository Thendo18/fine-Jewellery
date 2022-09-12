import { Injectable } from '@angular/core';
import { UserId } from '../interfaces/userid'
import { OrdersGet} from '../interfaces/get-orders';
import { environment } from 'src/environments/environment'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Items } from '../interfaces/items';
import { Observable } from 'rxjs';
const token = localStorage.getItem('access_token');
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': `${token}` })
};

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  baseUrl = environment.baseUrl;
  constructor(private http:HttpClient) { }

  getAllorders(orders:UserId){
    return this.http.get(`${this.baseUrl}order_list/${orders}`)
  }

  addOrders(orderlist:OrdersGet, id:UserId){
    return this.http.post(`${this.baseUrl}add_list/${id}`,orderlist)
  }
  
  addIterms(product_id: any,actualprice:any,quantity:any , id:UserId){
    return this.http.post(`${this.baseUrl}add_items/${id}`, {product_id,actualprice,quantity})
  }

 
  // actualprice: number [] ;
  //   quantity: number;
}
