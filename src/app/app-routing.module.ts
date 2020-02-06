import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaformulariobdsComponent } from './Modules/flujoconsulta/consultaformulariobds/consultaformulariobds.component' ;

const routes: Routes = [
  {path: '', component: ConsultaformulariobdsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
