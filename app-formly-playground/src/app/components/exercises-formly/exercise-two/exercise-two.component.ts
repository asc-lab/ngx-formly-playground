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
  model: any = { requestToCharllote: new RequestToCharllote()};

  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'requestToCharllote',
      wrappers: ['card'],
      templateOptions: { cardTitle: 'Exercise Two' },
      fieldGroup: [
        {
          key: 'cardId',
          type: 'input',
          templateOptions: {
            type: 'text',
            label: 'Card ID',
            required: true,
          },
        },
        {
          key: 'cardToken',
          type: 'input',
          templateOptions: {
            type: 'text',
            label: 'Card token',
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
        },
        {
          key: 'shopings',
          type: 'input',
          templateOptions: {
            type: 'text',
            label: 'Shopings',
            required: true,
          },
        },
        {
          key: 'priceRange',
          fieldGroup: [
            {
              key: 'currency',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: 'Price currency',
                required: true,
              },
            },
            {
              key: 'from',
              type: 'input',
              templateOptions: {
                type: 'number',
                label: 'Price range form',
                required: true,
              },
            },
            {
              key: 'to',
              type: 'input',
              templateOptions: {
                type: 'number',
                label: 'Price range to',
                required: true,
              },
            },
          ]

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
