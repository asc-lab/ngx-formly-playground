import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SHARED_ANGULAR_MATERIAL } from './components/angular-material.imports';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';

import { AppRoutingModule } from '@app/app-routing.module';

import { AppComponent } from '@app/app.component';
import { CardWrapperComponent, RepeatSectionComponent } from '@app/shared/custom-wrrappers';
import { HomeComponent } from '@app/components';
import { ExerciseOneComponent, ExerciseTwoComponent } from '@app/components/exercises-formly';
import { ExerciseOneRfComponent } from '@app/components/exercises-reactive-forms';

import { RequestService, DictService } from '@app/shared/services';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExerciseOneComponent,
    CardWrapperComponent,
    ExerciseOneRfComponent,
    ExerciseTwoComponent,
    RepeatSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      wrappers: [
        { name: 'card', component: CardWrapperComponent},
      ],
      types: [
        { name: 'repeat-section', component: RepeatSectionComponent },
      ],
    }),
    FormlyMaterialModule,
    FormlyMatDatepickerModule,
    BrowserAnimationsModule,
    SHARED_ANGULAR_MATERIAL,
    FlexLayoutModule
  ],
  providers: [
    RequestService,
    DictService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
