import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, subscribeOn, Subscriber } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class PersonsService {
  // personChanged
  personChanged = new Subject<string[]>();
  persons: string[] = [];

constructor(private http : HttpClient){

}
 fatchPersons(){
  this.http.get<any>('http://swapi.dev/api/people').pipe(map(resData =>{
return resData.results.map((character: { name: any; }) => character.name);
  })).subscribe(treansforemedData => { 
  this.personChanged.next(treansforemedData)
})
 }

  addPerson(name: string) {
    this.persons.push(name);
    this.personChanged.next(this.persons);
    console.log(this.persons);
  }
  removePeron(name: string) {
    this.persons = this.persons.filter(person => {
      return person !== name;
    });
    this.personChanged.next(this.persons);
    console.log(this.persons);
 
  }
}