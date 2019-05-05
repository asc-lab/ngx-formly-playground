import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

import { RequestToCharllote } from '@app/shared/model/RequestToCharllote';
import { DictionaryItem } from '@app/shared/model/common';

import { RequestService, DictService } from '@app/shared/services';

@Component({
  selector: 'app-exercise-two',
  templateUrl: './exercise-two.component.html',
  styleUrls: ['./exercise-two.component.scss']
})
export class ExerciseTwoComponent {
  form = new FormGroup({});
  model: any = { requestToCharllote: new RequestToCharllote() };
  orderTypes: DictionaryItem[] = this.dictionaryService.getDictionaryItems('ORDER_TYPE');
  acceptTerms: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt neque eu massa imperdiet, vel efficitur arcu pharetra. Sed pulvinar turpis erat, sit amet euismod dui lacinia eget. Vivamus efficitur volutpat scelerisque. Sed condimentum ipsum nec leo aliquam placerat. Ut nec eros sodales, efficitur nisi non, euismod est. '

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
          type: 'select',
          templateOptions: {
            label: 'Order type',
            options: this.orderTypes,
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
            description: this.model.requestToCharllote.shoppings,
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
                key: 'deliveryDate',
                type: 'datepicker',
                templateOptions: {
                  type: 'date',
                  label: 'Delivery date',
                  required: true,
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
    {
      key: 'requestToCharllote',
      wrappers: ['card'],
      templateOptions: { cardTitle: 'Statements' },
      fieldGroup: [
        {
          key: 'acceptTerms',
          type: 'checkbox',
          templateOptions: {
            label: this.acceptTerms,
            description: 'In order to proceed, please accept terms',
            pattern: 'true',
            required: true,
          },
        },

      ],
    },
  ];

  constructor(public requestService: RequestService, public dictionaryService: DictService) { }

  submit() {
    if (this.form.valid) {
      this.requestService.saveRequest(this.model.requestToCharllote);
    }
  }
}
