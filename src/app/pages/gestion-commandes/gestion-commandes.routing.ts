import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { GestionCommandesComponent } from "./gestion-commandes.component";
import { RendezVousComponent } from "./rendez-vous/rendez-vous.component";

export const gestionCommandesRoutes: Routes = [
   {path:"",component:GestionCommandesComponent,pathMatch:"full",redirectTo:"rendez-vous" },
   {path:"rendez-vous",component:RendezVousComponent},
];

@NgModule({
    imports:[RouterModule.forChild(gestionCommandesRoutes)],
    exports:[RouterModule]
})
export class GestionCommandesRouting {
}
