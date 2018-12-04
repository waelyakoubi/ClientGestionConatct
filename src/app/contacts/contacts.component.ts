import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ContactService } from 'src/service/contact.service';
@Component({
  selector: 'app-c',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  pageContacts:any;
  constructor(private http:Http,public contactService:ContactService) {
   }
  ngOnInit() {
    this.contactService.getContacts()
     .subscribe(data=>{
      this.pageContacts=data;
    })
  }

}
