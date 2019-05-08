import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatNativeDateModule,
  MatTableModule,
  MatDividerModule
} from '@angular/material';
import { MatStepperModule } from '@angular/material/stepper';


// additional imports for reactive forms
import {
  MatInputModule,
  MatDatepickerModule,
  MatSelectModule,
  MatCheckboxModule,
  MatRadioModule
} from '@angular/material';


@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatTableModule,
    MatNativeDateModule,
    MatDividerModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatStepperModule,
    MatRadioModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatTableModule,
    MatNativeDateModule,
    MatDividerModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatStepperModule,
    MatRadioModule
  ],
  declarations: []
})

// tslint:disable-next-line:class-name
export class SHARED_ANGULAR_MATERIAL { }
