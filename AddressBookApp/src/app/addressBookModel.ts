export class AddressBook{
    contactId:number;
    fullName:string;
    email:string;
    address:string;
    city:string;
    state:string;
    zip:number;
    phone:number;

    constructor(contactId:number,fullName:string,email:string,address:string,city:string,state:string,zip:number,phone:number){
        this.contactId=contactId;
        this.fullName=fullName;
        this.email=email;
        this.address=address;
        this.city=city;
        this.state=state;
        this.zip=zip;
        this.phone=phone;

    }
}