import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

import { RequestToConcierge } from '@app/shared/model/RequestToConcierge';
import { DictionaryItem, StepType } from '@app/shared/model/common';

import { RequestService, DictService } from '@app/shared/services';

@Component({
  selector: 'app-exercise-five',
  templateUrl: './exercise-five.component.html',
  styleUrls: ['./exercise-five.component.scss']
})
export class ExerciseFiveComponent {
  activedStep = 0;

  orderTypes: DictionaryItem[] = this.dictionaryService.getDictionaryItems('ORDER_TYPE');
   // tslint:disable-next-line:max-line-length
   acceptTerms = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt neque eu massa imperdiet, vel efficitur arcu pharetra. Sed pulvinar turpis erat, sit amet euismod dui lacinia eget. Vivamus efficitur volutpat scelerisque. Sed condimentum ipsum nec leo aliquam placerat. Ut nec eros sodales, efficitur nisi non, euismod est. ';


  model: any = {
    RequestToConcierge: new RequestToConcierge()
  };
  steps: StepType[] = [
    {
      label: 'Order Identification',
      fields: [
        {
          key: 'RequestToConcierge',
          templateOptions: { cardTitle: 'Card identification' },
          wrappers: ['card'],
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
      ],
    },
    {
      label: 'Order Type',
      fields: [
        {
          key: 'RequestToConcierge',
          hideExpression: (model) => this.model.RequestToConcierge.orderType !== 'SHOPPINGS',
          wrappers: ['card'],
          templateOptions: { cardTitle: 'Shoppings' },
          fieldGroup: [
            {
              key: 'shoppings',
              type: 'repeat-section',
              templateOptions: {
                sectionTitle: 'Shopping item',
                description: this.model.RequestToConcierge.shoppings,
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
                    template: '<div class="app-template-label"><strong>Price range:</strong>',
                  },
                  {
                    key: 'priceRange',
                    fieldGroupClassName: 'display-flex',
                    fieldGroup: [
                      {
                        className: 'flex-2',
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
                        className: 'flex-2',
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
          key: 'RequestToConcierge',
          hideExpression: (model) => this.model.RequestToConcierge.orderType !== 'SERVICES',
          wrappers: ['card'],
          templateOptions: {
            cardTitle: 'Services',
          },
          fieldGroup: [
            {
              key: 'services',
              type: 'repeat-section',
              templateOptions: {
                sectionTitle: 'Service item',
                description: this.model.RequestToConcierge.services,
                addItem: 'Add service item',
              },
              fieldArray: {
                fieldGroup: [
                  {
                    key: 'order',
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
                    fieldGroupClassName: 'display-flex',
                    fieldGroup: [
                      {
                        className: 'flex-4',
                        key: 'date',
                        type: 'datepicker',
                        templateOptions: {
                          type: 'date',
                          label: 'Expected service date',
                          required: true,
                        },
                      },
                      {
                        className: 'flex-2',
                        key: 'timeRange',
                        type: 'input',
                        templateOptions: {
                          type: 'text',
                          label: 'Time range',
                          required: true,
                        },
                      },
                    ]
                  },
                  {
                    fieldGroupClassName: 'display-flex',
                    fieldGroup: [
                      {
                        className: 'flex-4',
                        key: 'secondChoiceDate',
                        type: 'datepicker',
                        templateOptions: {
                          type: 'secondChoiceDate',
                          label: 'Second choice date',
                        },
                      },
                      {
                        className: 'flex-2',
                        key: 'secondChoiceTimeRange',
                        type: 'input',
                        templateOptions: {
                          type: 'text',
                          label: 'Time range'
                        },
                      },
                    ]
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
                    template: '<div class="app-template-label"><strong>Price range:</strong>',
                  },
                  {
                    key: 'priceRange',
                    fieldGroupClassName: 'display-flex',
                    fieldGroup: [
                      {
                        className: 'flex-2',
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
                        className: 'flex-2',
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
      ],
    },
    {
      label: 'Comments',
      fields: [
        {
          key: 'RequestToConcierge',
          templateOptions: { cardTitle: 'Additional comments' },
          wrappers: ['card'],
          fieldGroup: [
            {
              key: 'comments',
              type: 'textarea',
              templateOptions: {
                type: 'text',
                label: 'Comments to order',
                maxLength: 6000,
                rows: 5,
              },
            },
          ],
        },
      ],
    },
    {
      label: 'Confirmations',
      fields: [
        {
          key: 'RequestToConcierge',
          templateOptions: { cardTitle: 'Confirm your contact data' },
          wrappers: ['card'],
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
      ],
    },
    {
      label: 'Statements',
      fields: [
        {
          key: 'RequestToConcierge',
          wrappers: ['card'],
          templateOptions: { cardTitle: 'Please read statements carefully' },
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
      ],
    },
  ];

  form = new FormArray(this.steps.map(() => new FormGroup({})));
  // tslint:disable-next-line:no-angle-bracket-type-assertion
  options = this.steps.map(() => <FormlyFormOptions>{});


  constructor(
    public requestService: RequestService,
    public dictionaryService: DictService) { }

  submit() {
    if (this.form.valid) {
      this.requestService.saveRequest(this.model.RequestToConcierge);
    }
  }

  prevStep(step) {
    this.activedStep = step - 1;
  }

  nextStep(step) {
    this.activedStep = step + 1;
  }
}

