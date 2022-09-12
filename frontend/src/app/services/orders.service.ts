import { Injectable } from '@angular/core';
import { Userid } from '../interfaces/userid'
import { GetOrders} from '../interfaces/get-orders';
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
  baseUrl = "http://localhost:8080/api"
  // private baseUrl = "http://localhost:8080/api";
  constructor(private http:HttpClient) { }

  getAllorders(orders:Userid){
    return this.http.get(`${this.baseUrl}order_list/${orders}`)
  }

  addOrders(orderlist:GetOrders, id:Userid){
    return this.http.post(`${this.baseUrl}add_list/${id}`,orderlist)
  }
  
  addIterms(product_id: any,actualprice:any,quantity:any , id:Userid){
    return this.http.post(`${this.baseUrl}add_items/${id}`, {product_id,actualprice,quantity})
  }

 
  // actualprice: number [] ;
  //   quantity: number;
}
