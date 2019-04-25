import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-exercise-one-rf',
  templateUrl: './exercise-one-rf.component.html',
  styleUrls: ['./exercise-one-rf.component.scss']
})
export class ExerciseOneRfComponent {

  form = new FormGroup({});
  requestToCharllote: any = {};

}
