import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { PersonsService } from "./persons.service";
// import { Component, OnInit } from "@angular/core";
// import { PersonService } from './persons.service'

@Component({
    selector: 'app-person',
    templateUrl: './person.component.html'
})
export class PersonsComponent implements OnInit, OnDestroy {
    personList!: string[];
    isfetching = false;

    private personListSub: Subscription = new Subscription;

    constructor(private prsService: PersonsService) {
        // this.personList = prsService.persons;
    }
    ngOnInit() {
        this.prsService.fatchPersons();
        this.personList = this.prsService.persons;
        this.personListSub = this.prsService.personChanged.subscribe(persons =>
           { this.personList = persons;
            this.isfetching = false;
        });
            this.isfetching= true;
    }

    onRemovePerson(personName: string) {
        this.prsService.removePeron(personName);
    }

    ngOnDestroy() {
        this.personListSub.unsubscribe();
    }


    //  @Input() personlList! : string[];
    //  @Input() numberList! : number[];

    // personList!: string[];
    // private personService: PersonService;

    // constructor(public prsService: PersonService) {
    //     this.personList = prsService.nameList;
    //     this.personService = prsService;
    // }

    // ngOnInit(): void {
    //     // this.personList = this.personService.nameList;
    //     this.personList = this.prsService.nameList;
    // }
}