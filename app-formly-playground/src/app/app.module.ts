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
import { CardWrapperComponent, RepeatSectionComponent, ImgRadioTypeComponent } from '@app/shared/custom-wrrappers';
import { HomeComponent } from '@app/components';
import {
  ExerciseOneComponent,
  ExerciseTwoComponent,
  ExerciseThreeComponent,
  ExerciseFourComponent,
  ExerciseFiveComponent,
  ExerciseSixComponent
} from '@app/components/exercises-formly';
import { ExerciseOneRfComponent, ExerciseTwoRfComponent, ExerciseThreeRfComponent } from '@app/components/exercises-reactive-forms';

import { RequestService, DictService, LanguageService } from '@app/shared/services';

import {
  minlengthValidationMessage,
  maxlengthValidationMessage,
  minValidationMessage,
  maxValidationMessage
} from '@app/shared/validations';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExerciseOneComponent,
    CardWrapperComponent,
    ExerciseOneRfComponent,
    ExerciseTwoComponent,
    RepeatSectionComponent,
    ExerciseThreeComponent,
    ExerciseTwoRfComponent,
    ExerciseThreeRfComponent,
    ExerciseFourComponent,
    ImgRadioTypeComponent,
    ExerciseFiveComponent,
    ExerciseSixComponent
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
        { name: 'app-radio', component: ImgRadioTypeComponent },
      ],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'minlength', message: minlengthValidationMessage },
        { name: 'maxlength', message: maxlengthValidationMessage },
        { name: 'min', message: minValidationMessage },
        { name: 'max', message: maxValidationMessage },
      ],
    }),
    FormlyMaterialModule,
    FormlyMatDatepickerModule,
    BrowserAnimationsModule,
    SHARED_ANGULAR_MATERIAL,
    FlexLayoutModule,
    HttpClientModule,
    TranslateModule.forRoot(),
  ],
  providers: [
    RequestService,
    DictService,
    LanguageService,
    TranslateService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
