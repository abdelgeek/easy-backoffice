import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { map, startWith } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { RendezVousService } from 'src/app/services/rendez-vous.service';


@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.scss']
})
export class RendezVousComponent implements OnInit {


  closeResult
   displayedColumns: string[] = ['reference', 'client', 'categorie', 'type', 'date', 'statut', 'tache', 'agent', 'actions'];
   dataSource = new MatTableDataSource();
  

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  constructor(private modalService: NgbModal,
    private rendezVousService: RendezVousService) { }

  ngOnInit() {
    // this.filteredOptions = this.myControl.valueChanges
    // .pipe(
    //   startWith(''),
    //   map(value => this._filter(value))
    // );
  

      this.findAll();

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
console.log(filterValue)
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  //open modal
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }
  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //  return this.options.filter(option => option.toLowerCase().includes(filterValue));
  // }

  findAll() {
    this.rendezVousService.FindAllService().subscribe(
      (resp: any) => {
        this.dataSource = new MatTableDataSource(resp);
       this.dataSource.paginator = this.paginator;
      }
    )
  }
}