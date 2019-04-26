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


@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatTableModule,
    MatNativeDateModule,
    MatDividerModule

  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatTableModule,
    MatNativeDateModule,
    MatDividerModule
  
  ],
  declarations: []
})

// tslint:disable-next-line:class-name
export class SHARED_ANGULAR_MATERIAL { }
