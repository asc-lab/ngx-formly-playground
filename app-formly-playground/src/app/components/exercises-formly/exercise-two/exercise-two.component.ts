import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { RequestToCharllote } from '@app/shared/model/RequestToCharllote';
import { RequestService } from '@app/shared/services';

@Component({
  selector: 'app-exercise-two',
  templateUrl: './exercise-two.component.html',
  styleUrls: ['./exercise-two.component.scss']
})
export class ExerciseTwoComponent {

  constructor(public requestService: RequestService) { }

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
          key: 'deliveryDate',
          type: 'datepicker',
          templateOptions: {
            type: 'date',
            label: 'Delivery date',
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
              {
                key: 'order',
                type: 'input',
                templateOptions: {
                  type: 'text',
                  label: 'Order',
                  required: true,
                },
              },
              {
                key: 'description',
                type: 'textarea',
                templateOptions: {
                  type: 'text',
                  label: 'Description',
                  maxLength: 6000,
                  rows: 5,
                },
              },
              {
                key: 'selectedShop',
                type: 'input',
                templateOptions: {
                  type: 'text',
                  label: 'Selected shop',
                },
              },
              {
                key: 'priceRange',
                fieldGroup: [
                  {
                    key: 'from',
                    type: 'input',
                    templateOptions: {
                      type: 'number',
                      label: 'Price range form',
                      min: 0.1,
                      max: 999999.99,
                      required: true
                    },
                  },
                  {
                    key: 'to',
                    type: 'input',
                    templateOptions: {
                      type: 'number',
                      label: 'Price range to',
                      min: 0.1,
                      max: 999999.99,
                      required: true,
                    },
                  }
                ]
              },
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
      this.requestService.saveRequest(this.model.requestToCharllote);
    }
  }
}
