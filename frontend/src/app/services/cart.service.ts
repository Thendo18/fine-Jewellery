import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  cardDataList:any = []
  singlePrice: number [] = []
  singleID: number [] = []
  ourCard: any [] = []
  productList = new BehaviorSubject<any>([])
  tax:number= 0;
  sumTotal:number = 0;
  total:any;

  constructor() { }
  //Get Product Data
  getProdList(){
    return this.productList.asObservable()
  }

  //Set product details
  setProduct(product:any){
    this.cardDataList.push(...product)
    this.productList.next(product);
  }

  //Add to cart details
  addToCart(prodcut:any){
    this.cardDataList.push(prodcut);
    
    let index:number = -1;
    let id = this.cardDataList.prod_id
    for(let i=0; i<this.cardDataList.legth; i++){
      if(parseInt(id) === parseInt(this.cardDataList[i].prod_id)){
        this.cardDataList[i]
        
        index = i;
        break;
      }
    }
    for(let i=0; i< this.cardDataList.length; i++){
      this.singleID[i] = this.cardDataList[i].prod_id
      this.singlePrice[i] = this.cardDataList[i].prod_price
      this.ourCard[i] = this.cardDataList[i]
    }

    this.productList.next(this.cardDataList)
    this.getAmount(this.cardDataList.prod_price);
  }
  
  //Calculate Total Amount
  getAmount(sm:number){
    let grandToat =0;
    this.cardDataList.forEach((sm:any) => {
      grandToat += parseFloat(sm.prod_price);
      this.sumTotal = grandToat;
      
    });

    this.totalTax(grandToat)
    this.tax = this.totalTax(grandToat)
    this.total = this.totalAmountDue()
  }

  //Calculate Tax 
  totalTax(num:number){
    let totalText = 0
    return totalText = num * 0.15;
  }

  //Calculate total Amount with tax included  
  totalAmountDue(){
    let totAmt = 0;
    return totAmt = this.tax + this.sumTotal;
  }
  
  //Remove data cart 1 by 1 
  removePerCart(product:any){
    this.cardDataList.splice(product,1)
    this.productList.next(this.cardDataList)
    this.getAmount(this.cardDataList.prod_price)
  }
 
  //Remove all data cart
  removeAllCart(){
    this.cardDataList=[];
    this.productList.next(this.cardDataList)
  }

}
