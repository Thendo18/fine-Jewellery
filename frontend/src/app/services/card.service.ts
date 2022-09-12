import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GetById } from '../interfaces/get-by-id';
const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
const options = { headers: headers, crossDomain: true, withCredentials: true };

@Injectable({
  providedIn: 'root'
})
export class CardService {
  //BACKEND URL HERE/API
  baseUrl = "http://localhost:8080/api";


  constructor ( private http : HttpClient) { }
  

//THIS FUCTION HELPS US GET THE URL USING HTTP CLIENT


  getCard(){
    return this.http.get(`${this.baseUrl}product_list`, options)
    //return this.http.get(this.baseUrl)+"product_list";
  }
  getCardbyId(prod_id:GetById){
    return this.http.get(`${this.baseUrl}productbyid/${prod_id}`, options)
    //return this.http.get(this.baseUrl)+"product_list";
  }
  
  getunit(id:GetById){
    return this.http.get(`${this.baseUrl}stock/${id}`)
  }
}
