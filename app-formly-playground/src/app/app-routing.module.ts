import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '@app/components';
import { ExerciseOneComponent } from '@app/components/exercises-formly';
import { ExerciseOneRfComponent } from '@app/components/exercises-reactive-forms';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'formly',
    children: [{
      path: 'exerciseOne',
      component: ExerciseOneComponent
    }]
  },
  {
    path: 'reactivForms',
    children: [{
      path: 'exerciseOne',
      component: ExerciseOneRfComponent
    }]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
