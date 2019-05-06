import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-exercise-one',
  templateUrl: './exercise-one.component.html',
  styleUrls: ['./exercise-one.component.scss']
})
export class ExerciseOneComponent {
  form = new FormGroup({});
  model: any = {};

  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'RequestToConcierge',
      wrappers: ['card'],
      templateOptions: { cardTitle: 'Order Identification' },
      fieldGroup: [],
    },
  ];
}
