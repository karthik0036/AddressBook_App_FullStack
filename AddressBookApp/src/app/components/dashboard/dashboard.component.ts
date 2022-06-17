import { Component, OnInit } from '@angular/core';
import { AddressBook } from '../../addressBookModel';
import { AddressBookService } from '../../addressBook.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  addressbook: AddressBook[] = [];
  PersonCount: number = 10;

  constructor(private addressBookService: AddressBookService,private router: Router) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.addressBookService.getAddressBookDetails().subscribe((response:any) => {
      
      this.addressbook = response.data;
      this.PersonCount=this.addressbook.length;
      console.log(this.addressbook)
    })
  }

}
