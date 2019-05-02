import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '@app/components';
import {
  ExerciseOneComponent,
  ExerciseTwoComponent,
  ExerciseThreeComponent,
  ExerciseFourComponent,
  ExerciseFiveComponent
} from '@app/components/exercises-formly';
import { ExerciseOneRfComponent, ExerciseTwoRfComponent, ExerciseThreeRfComponent } from '@app/components/exercises-reactive-forms';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'formly',
    children: [
      {
        path: 'exerciseOne',
        component: ExerciseOneComponent
      },
      {
        path: 'exerciseTwo',
        component: ExerciseTwoComponent
      },
      {
        path: 'exerciseThree',
        component: ExerciseThreeComponent
      },
      {
        path: 'exerciseFour',
        component: ExerciseFourComponent
      },
      {
        path: 'exerciseFive',
        component: ExerciseFiveComponent
      }
    ]
  },
  {
    path: 'reactivForms',
    children: [
      {
        path: 'exerciseOne',
        component: ExerciseOneRfComponent
      },
      {
        path: 'exerciseTwo',
        component: ExerciseTwoRfComponent
      },
      {
        path: 'exerciseThree',
        component: ExerciseThreeRfComponent
      },
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
