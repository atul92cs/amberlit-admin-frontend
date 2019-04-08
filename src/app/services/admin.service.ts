import { Injectable } from '@angular/core';
import {Ads} from '../models/ads.model';
import {Category} from '../models/category.model';
import {Subcategory} from '../models/subcategory.model';
import {UserModel} from '../models/usermodel.model';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
   readonly apiUrl='http://localhost:8080/';
  constructor(private http:HttpClient) { }
  getAds()
  {
    return this.http.get<Ads[]>(this.apiUrl+'ad/');
  }
  getUser()
  {
    return this.http.get<UserModel[]>(this.apiUrl+'user/');
  }
  getCategory()
  {
    return this.http.get<Category[]>(this.apiUrl+'category/');
  }
  getSubcategory()
  {
    return this.http.get<Subcategory[]>(this.apiUrl+'subcategory/');
  }
  
}
