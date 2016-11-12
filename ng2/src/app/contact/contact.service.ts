import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ContactService {

  constructor(private http: Http) {}

  contacts: any = [];

  getContacts(){
    this.http.get('https://api.mlab.com/api/1/databases/jasonpolitis/collections/contact?apiKey=k56WFUmi3xihkLn0saKx1xwZm_dDB5JJ')
    .subscribe(result => this.contacts = result.json());
  }

}
