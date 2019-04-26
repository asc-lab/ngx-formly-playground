import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { RequestToCharllote } from '@app/shared/model/RequestToCharllote';

@Component({
  selector: 'app-exercise-two',
  templateUrl: './exercise-two.component.html',
  styleUrls: ['./exercise-two.component.scss']
})
export class ExerciseTwoComponent {
  form = new FormGroup({});
  model: any = { requestToCharllote: new RequestToCharllote() };

  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'requestToCharllote',
      wrappers: ['card'],
      templateOptions: { cardTitle: 'Order Identification' },
      fieldGroup: [
        {
          key: 'cardId',
          type: 'input',
          templateOptions: {
            type: 'text',
            label: 'Card ID',
            minLength: 5,
            maxLength: 5,
            required: true,
          },
        },
        {
          key: 'cardToken',
          type: 'input',
          templateOptions: {
            type: 'text',
            label: 'Card token',
            minLength: 5,
            maxLength: 5,
            required: true,
          },
        },
        {
          key: 'orderType',
          type: 'input',
          templateOptions: {
            type: 'text',
            label: 'Order type',
            required: true,
          },
        }
      ],
    },
    {
      key: 'requestToCharllote',
      wrappers: ['card'],
      templateOptions: { cardTitle: 'Shoppings' },
      fieldGroup: [
        {
          key: 'shoppings',
          type: 'repeat-section',
          templateOptions: {
            sectionTitle: 'Shopping item',
            addItem: 'Add another shopping item',
          },
          fieldArray: {
            fieldGroup: [
            ]
          },
        },

      ],
    },
    {
      key: 'requestToCharllote',
      wrappers: ['card'],
      templateOptions: { cardTitle: 'Additional Comments' },
      fieldGroup: [
        {
          key: 'comments',
          type: 'textarea',
          templateOptions: {
            type: 'text',
            label: 'Comments',
            maxLength: 6000,
            rows: 5,
          },
        },

      ],
    },
  ];

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model.requestToCharllote));
    }
  }

}
