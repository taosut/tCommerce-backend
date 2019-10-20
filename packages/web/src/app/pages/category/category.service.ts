import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  fetchCategory(slug: string) {
    return this.http.get(`http://localhost:3500/api/v1/categories/${slug}`);
  }
}