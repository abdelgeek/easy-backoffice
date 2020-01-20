import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionCommandesComponent } from './gestion-commandes.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { GestionCommandesRouting } from './gestion-commandes.routing';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [GestionCommandesComponent,
    NavComponent, RendezVousComponent
  ],
  imports: [MatSlideToggleModule,
   
    
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    
    CommonModule,RouterModule,GestionCommandesRouting
  ]
})
export class GestionCommandesModule { }
