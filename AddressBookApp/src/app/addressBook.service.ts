import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";



@Injectable({
    providedIn: 'root'
  })

export class AddressBookService {

    private baseUrl: string = "http://localhost:8080/addressbookservice";

    constructor(private httpClient: HttpClient) {}

    addAddressData(addressbook: any): Observable<any> {
        return this.httpClient.post(this.baseUrl+"/create",addressbook);
      }




  }