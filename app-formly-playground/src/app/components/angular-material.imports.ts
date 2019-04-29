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


// additional imports for reactive forms
import {
  MatInputModule,
  MatDatepickerModule,
  MatSelectModule
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
    MatSelectModule

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
    MatSelectModule
  ],
  declarations: []
})

// tslint:disable-next-line:class-name
export class SHARED_ANGULAR_MATERIAL { }
