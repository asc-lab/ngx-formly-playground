import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RequestToCharllote } from '@app/shared/model/RequestToCharllote';

@Component({
  selector: 'app-exercise-one-rf',
  templateUrl: './exercise-one-rf.component.html',
  styleUrls: ['./exercise-one-rf.component.scss']
})
export class ExerciseOneRfComponent {

  form = new FormGroup({});
  requestToCharllote: RequestToCharllote = new RequestToCharllote();

}
