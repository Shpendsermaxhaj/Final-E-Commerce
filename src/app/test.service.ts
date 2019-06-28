import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  readonly rootUrl = 'http://localhost:8080/api/'

  constructor(private http: HttpClient) { }

  getEmployers() { 
    return this.http.get(this.rootUrl + '/employees');

  }

}
