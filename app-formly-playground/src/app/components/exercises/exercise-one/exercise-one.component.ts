import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-exercise-one',
  templateUrl: './exercise-one.component.html',
  styleUrls: ['./exercise-one.component.scss']
})
export class ExerciseOneComponent {
  form = new FormGroup({});
  requestToCharllote: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'charlloteRequestForm',
      wrappers: ['card'],
      templateOptions: { cardTitle: 'Exercise One' },
      fieldGroup: [],
    },
  ];
}
