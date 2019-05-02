import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

import { RequestToCharllote } from '@app/shared/model/RequestToCharllote';
import { DictionaryItem } from '@app/shared/model/common';

import { RequestService, DictService } from '@app/shared/services';

@Component({
  selector: 'app-exercise-four',
  templateUrl: './exercise-four.component.html',
  styleUrls: ['./exercise-four.component.scss']
})
export class ExerciseFourComponent {

  form = new FormGroup({});
  model: any = {
    requestToCharllote: new RequestToCharllote()
  };
  orderTypes: DictionaryItem[] = this.dictionaryService.getDictionaryItems('ORDER_TYPE');
  // tslint:disable-next-line:max-line-length
  acceptTerms = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt neque eu massa imperdiet, vel efficitur arcu pharetra. Sed pulvinar turpis erat, sit amet euismod dui lacinia eget. Vivamus efficitur volutpat scelerisque. Sed condimentum ipsum nec leo aliquam placerat. Ut nec eros sodales, efficitur nisi non, euismod est. ';

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
            description: 'Use one of this card IDs: 12345, 54321, 11111',
            required: true,
          },
          validators: {
            cardId: {
              expression: (fc) => !fc.value || fc.value.length === 5,
              message: (err, field: FormlyFieldConfig) => `Card ID length is 5 characters`
            }
          },
          asyncValidators: {
            existingCardIdCheck: {
              expression: (fc: FormControl) => {
                return this.requestService.checkIfCardExist(fc);
              },
              message: 'This Card ID does not exist please check your identification card',
            }
          }
        },

        {
          key: 'cardToken',
          type: 'input',
          templateOptions: {
            type: 'text',
            label: 'Card token',
            required: true,
          },
          validators: {
            cardToken: {
              expression: (fc: FormControl) => !fc.value || fc.value.length === 5,
              message: (err, field: FormlyFieldConfig) => `Card Token length is 5 characters`
            }
          }
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
          type: 'app-radio',
          templateOptions: {
            label: 'Order type',
            name: 'orderType',
            options: this.orderTypes,
            required: true,
          },
        }
      ],
    },
    {
      key: 'requestToCharllote',
      hideExpression: (model) => this.model.requestToCharllote.orderType !== 'SHOPPINGS',
      wrappers: ['card'],
      templateOptions: { cardTitle: 'Shoppings' },
      fieldGroup: [
        {
          key: 'shoppings',
          type: 'repeat-section',
          templateOptions: {
            sectionTitle: 'Shopping item',
            addItem: 'Add shopping item',
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
                      min: 1,
                      max: 999999,
                      required: true
                    },
                  },
                  {
                    key: 'to',
                    type: 'input',
                    templateOptions: {
                      type: 'number',
                      label: 'Price range to',
                      min: 1,
                      max: 999999,
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
      hideExpression: (model) => this.model.requestToCharllote.orderType !== 'SERVICES',
      wrappers: ['card'],
      templateOptions: { cardTitle: 'Services' },
      fieldGroup: [
        {
          key: 'services',
          type: 'repeat-section',
          templateOptions: {
            sectionTitle: 'Service item',
            addItem: 'Add service item',
          },
          fieldArray: {
            fieldGroup: [
              {
                key: 'serviceType',
                type: 'input',
                templateOptions: {
                  type: 'text',
                  label: 'Service type',
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
                key: 'date',
                type: 'datepicker',
                templateOptions: {
                  type: 'date',
                  label: 'Expected service date',
                  required: true,
                },
              },
              {
                key: 'secondChoiceDate',
                type: 'datepicker',
                templateOptions: {
                  type: 'secondChoiceDate',
                  label: 'Second choice date',
                },
              },
              {
                key: 'timeRange',
                type: 'input',
                templateOptions: {
                  type: 'text',
                  label: 'Time range',
                  required: true,
                },
              },
              {
                key: 'selectedServiceProvider',
                type: 'input',
                templateOptions: {
                  type: 'text',
                  label: 'Selected service provider',
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
                      min: 1,
                      max: 999999,
                      required: true
                    },
                  },
                  {
                    key: 'to',
                    type: 'input',
                    templateOptions: {
                      type: 'number',
                      label: 'Price range to',
                      min: 1,
                      max: 999999,
                      required: true,
                    },
                  }
                ]
              },
            ]
          }
        }
      ]
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
      templateOptions: { cardTitle: 'Confirmations' },
      fieldGroup: [
        {
          key: 'phoneNo',
          type: 'input',
          templateOptions: {
            type: 'number',
            label: 'Confirm phone number '
          },
          validators: {
            phoneNo: {
              expression: (fc) => !fc.value,
              message: (err, field: FormlyFieldConfig) => `Phone No length is 9 characters`
            }
          }
        },
        {
          key: 'email',
          type: 'input',
          templateOptions: {
            type: 'text',
            label: 'Confirm email address',
            // tslint:disable-next-line:max-line-length
            pattern: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            required: true,
          },
          validation: {
            messages: {
              pattern: (error, field: FormlyFieldConfig) => `"${field.formControl.value}" is not a valid email Address`,
            },
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

  constructor(
    public requestService: RequestService,
    public dictionaryService: DictService) { console.log(this.model)}
    
  submit() {
    if (this.form.valid) {
      this.requestService.saveRequest(this.model.requestToCharllote);
    }
  }

}