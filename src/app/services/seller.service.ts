import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
isSellerLoggedIn = new BehaviorSubject<boolean>(false)
  constructor(private http: HttpClient, private router: Router) { }
  userSignUp(data:SignUp){
    console.log("data : ", data)
    this.http.post('https://ecom-angular-brijesh-default-rtdb.firebaseio.com/seller.json',data,
    {observe:"response"}).subscribe((result)=>{
      localStorage.setItem (`seller`,`${JSON.stringify(result.body)}${JSON.stringify(data)}`)
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']); 
    })
  }
  reloadSeller(){
    if(localStorage.getItem(`seller`)){
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']); 
    }

  }
}
