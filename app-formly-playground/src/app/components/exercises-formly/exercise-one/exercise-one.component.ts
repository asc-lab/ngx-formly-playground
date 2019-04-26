import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-exercise-one',
  templateUrl: './exercise-one.component.html',
  styleUrls: ['./exercise-one.component.scss']
})
export class ExerciseOneComponent {
  form = new FormGroup({});
  model: any = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'requestToCharllote',
      wrappers: ['card'],
      templateOptions: { cardTitle: 'Order Identification' },
      fieldGroup: [],
    },
  ];
}
