import { Component } from '@angular/core';
import { PersonsService } from './persons.service';


@Component({
  selector: 'app-person-input',
  templateUrl: './person-input-component.html'
})


export class PersonInputComponent {
  // @Output() personFirstName = new EventEmitter<string>();
  // @Output() personLastName = new EventEmitter<string>();
  // @Output() personAge = new EventEmitter<number>();

  constructor(private prsService: PersonsService) {

  }
  enteredFirstName = '';
  onCreatePersonF() {
    console.log('Person FirstName: ' + this.enteredFirstName)
    this.prsService.addPerson(this.enteredFirstName);
    this.enteredFirstName = '';


    // this.personFirstName.emit(this.enteredFirstName);
  }

  // personLName = '';
  // onCreatePersonL(personName:string){
  //     this.personLName = personName;
  //     console.log('person FirstName: ' + this.enteredFirstName + 'person LastName : '+ this.personLName );
  //     this.personLastName.emit(this.personLName);
  //     this.personLName ='';
  // }

  // onCreateAge(AGE:string){
  //  console.log('Person age is: '+ AGE);
  // }
}

