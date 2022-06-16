import { Component, OnInit } from '@angular/core';
import { AddressBook } from '../../addressBookModel';
// import { AddressBookService } from '../../addressBook.service';
import {  ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  constructor() { }

  addressbook:AddressBook = new AddressBook('','','','','',0,0);

  ngOnInit(): void {
  }

  onAddContact(){
    console.log(this.addressbook);
    // this._service.insertAddressBook(this.addressbook).subscribe(data=>console.log("Data Saved"));
  }

}
