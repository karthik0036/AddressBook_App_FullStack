import { Component, OnInit } from '@angular/core';
import { AddressBook } from '../../addressBookModel';
import { AddressBookService } from '../../addressBook.service';
import {  ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  constructor(private service: AddressBookService ,private router: Router, private route: ActivatedRoute) { }

  addressbook:AddressBook = new AddressBook(0,'','','','','',0,0);

  Id:any=this.route.snapshot.paramMap.get('id');

  ngOnInit(): void {
    this.service.getAddressBookById(this.Id).subscribe((response:any)=>{
      console.log(response.data);
      this.addressbook=response.data;
    })
  }

  onAddContact(){
    console.log(this.addressbook);
    this.service.addAddressData(this.addressbook).subscribe((data:any)=>this.router.navigate(['']))
  }

  updateContact(){
    console.log(this.addressbook);
    this.service.updateAddData(this.Id,this.addressbook).subscribe((data:any)=>this.router.navigate(['']));
    
  }

}
