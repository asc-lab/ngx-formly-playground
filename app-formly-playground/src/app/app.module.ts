import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SHARED_ANGULAR_MATERIAL } from './components/angular-material.imports';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';

import { HomeComponent, ExerciseOneComponent } from '@app/components';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExerciseOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    BrowserAnimationsModule,
    SHARED_ANGULAR_MATERIAL,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
