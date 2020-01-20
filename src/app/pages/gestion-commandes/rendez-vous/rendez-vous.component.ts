import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.scss']
})
export class RendezVousComponent implements OnInit {
 

  closeResult
  
  myControl = new FormControl();
  options: string[]= ['Agent A', 'Agent B', 'Agent C',
  'Agent D', 'Agent E', 'Agent F','Agent G', 'Agent H', 'Agent I',
  'Agent J', 'Agent K', 'Agent L','Agent M', 'Agent N', 'Agent O'];;
  filteredOptions: Observable<string[]>;
  
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  //open modal
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
