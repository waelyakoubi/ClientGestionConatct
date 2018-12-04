import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class ContactService{
 constructor(public http:Http){

 }
getContacts(){
return this.http.get("http://localhost:8080/contacts")
.map(resp=>resp.json())
}

}