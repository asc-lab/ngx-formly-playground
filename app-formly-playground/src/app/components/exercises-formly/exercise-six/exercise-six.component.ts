import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

import { RequestToCharllote } from '@app/shared/model/RequestToCharllote';
import { DictionaryItem, StepType } from '@app/shared/model/common';

import { RequestService, DictService } from '@app/shared/services';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-exercise-six',
  templateUrl: './exercise-six.component.html',
  styleUrls: ['./exercise-six.component.scss']
})
export class ExerciseSixComponent {
  activedStep = 0;

  orderTypes: DictionaryItem[] = this.dictionaryService.getDictionaryItems('ORDER_TYPE');
   // tslint:disable-next-line:max-line-length
   acceptTerms = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt neque eu massa imperdiet, vel efficitur arcu pharetra. Sed pulvinar turpis erat, sit amet euismod dui lacinia eget. Vivamus efficitur volutpat scelerisque. Sed condimentum ipsum nec leo aliquam placerat. Ut nec eros sodales, efficitur nisi non, euismod est. ';


  model: any = {
    requestToCharllote: new RequestToCharllote()
  };
  steps: StepType[] = [
    {
      label: this.translate.stream('RequestToCharllote.orderIdentification'),
      fields: [
        {
          key: 'requestToCharllote',
          expressionProperties: {
            'templateOptions.cardTitle': this.translate.stream('RequestToCharllote.cardIdentification'),
          },
          wrappers: ['card'],
          fieldGroup: [
            {
              key: 'cardId',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: this.translate.instant('RequestToCharllote.cardId'),
                description: 'Use one of this card IDs: 12345, 54321, 11111',
                required: true,
              },
              expressionProperties: {
                'templateOptions.label': this.translate.stream('RequestToCharllote.cardId'),
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
                label: this.translate.instant('RequestToCharllote.cardToken'),
                required: true,
              },
              expressionProperties: {
                'templateOptions.label': this.translate.stream('RequestToCharllote.cardToken'),
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
                label: this.translate.instant('RequestToCharllote.orderType'),
                name: 'orderType',
                options: this.orderTypes,
                required: true,
              },
              expressionProperties: {
                'templateOptions.label': this.translate.stream('RequestToCharllote.orderType'),
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
          key: 'requestToCharllote',
          hideExpression: (model) => this.model.requestToCharllote.orderType !== 'SHOPPINGS',
          wrappers: ['card'],
          expressionProperties: {
            'templateOptions.cardTitle': this.translate.stream('RequestToCharllote.shoppings'),
          },
          fieldGroup: [
            {
              key: 'shoppings',
              type: 'repeat-section',
              templateOptions: {
                sectionTitle: this.translate.instant('RequestToCharllote.shoppingItem'),
                description: this.model.requestToCharllote.shoppings,
                addItem: this.translate.instant('RequestToCharllote.addShoppingItem'),
              },
              expressionProperties: {
                'templateOptions.sectionTitle': this.translate.stream('RequestToCharllote.shoppingItem'),
                'templateOptions.addItem': this.translate.stream('RequestToCharllote.addShoppingItem'),
              },
              fieldArray: {
                fieldGroup: [
                  {
                    key: 'order',
                    type: 'input',
                    templateOptions: {
                      type: 'text',
                      label: this.translate.instant('RequestToCharllote.order'),
                      required: true,
                    },
                    expressionProperties: {
                      'templateOptions.label': this.translate.stream('RequestToCharllote.order'),
                    },
                  },
                  {
                    key: 'description',
                    type: 'textarea',
                    templateOptions: {
                      type: 'text',
                      label: this.translate.instant('RequestToCharllote.description'),
                      maxLength: 6000,
                      rows: 5,
                    },
                    expressionProperties: {
                      'templateOptions.label': this.translate.stream('RequestToCharllote.description'),
                    },
                  },
                  {
                    key: 'deliveryDate',
                    type: 'datepicker',
                    templateOptions: {
                      type: 'date',
                      label: this.translate.instant('RequestToCharllote.deliveryDate'),
                      required: true,
                    },
                    expressionProperties: {
                      'templateOptions.label': this.translate.stream('RequestToCharllote.deliveryDate'),
                    },
                  },
                  {
                    key: 'selectedShop',
                    type: 'input',
                    templateOptions: {
                      type: 'text',
                      label: this.translate.instant('RequestToCharllote.selectedShop'),
                    },
                    expressionProperties: {
                      'templateOptions.label': this.translate.stream('RequestToCharllote.selectedShop'),
                    },
                  },
                  {
                    template: '<div class="app-template-label"><strong>{{ "RequestToCharllote.priceRange" | translate }} </strong>',
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
                          label: this.translate.instant('RequestToCharllote.priceRangeForm'),
                          min: 1,
                          max: 999999,
                          required: true
                        },
                        expressionProperties: {
                          'templateOptions.label': this.translate.stream('RequestToCharllote.priceRangeForm'),
                        },
                      },
                      {
                        className: 'flex-2',
                        key: 'to',
                        type: 'input',
                        templateOptions: {
                          type: 'number',
                          label: this.translate.instant('RequestToCharllote.priceRangeTo'),
                          min: 1,
                          max: 999999,
                          required: true,
                        },
                        expressionProperties: {
                          'templateOptions.label': this.translate.stream('RequestToCharllote.priceRangeTo'),
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
          expressionProperties: {
            'templateOptions.cardTitle': this.translate.stream('RequestToCharllote.services'),
          },
          fieldGroup: [
            {
              key: 'services',
              type: 'repeat-section',
              templateOptions: {
                sectionTitle: this.translate.instant('RequestToCharllote.serviceItem'),
                description: this.model.requestToCharllote.services,
                addItem: this.translate.instant('RequestToCharllote.addServiceItem'),
              },
              expressionProperties: {
                'templateOptions.sectionTitle': this.translate.stream('RequestToCharllote.serviceItem'),
                'templateOptions.addItem': this.translate.stream('RequestToCharllote.addServiceItem'),
              },
              fieldArray: {
                fieldGroup: [
                  {
                    key: 'order',
                    type: 'input',
                    templateOptions: {
                      type: 'text',
                      label: this.translate.instant('RequestToCharllote.serviceType'),
                      required: true,
                    },
                    expressionProperties: {
                      'templateOptions.label': this.translate.stream('RequestToCharllote.serviceType'),
                    },
                  },
                  {
                    key: 'description',
                    type: 'textarea',
                    templateOptions: {
                      type: 'text',
                      label: this.translate.instant('RequestToCharllote.description'),
                      maxLength: 6000,
                      rows: 5,
                    },
                    expressionProperties: {
                      'templateOptions.label': this.translate.stream('RequestToCharllote.description'),
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
                          label: this.translate.instant('RequestToCharllote.expectedServiceDate'),
                          required: true,
                        },
                        expressionProperties: {
                          'templateOptions.label': this.translate.stream('RequestToCharllote.expectedServiceDate'),
                        },
                      },
                      {
                        className: 'flex-2',
                        key: 'timeRange',
                        type: 'input',
                        templateOptions: {
                          type: 'text',
                          label: this.translate.instant('RequestToCharllote.timeRange'),
                          required: true,
                        },
                        expressionProperties: {
                          'templateOptions.label': this.translate.stream('RequestToCharllote.timeRange'),
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
                          label: this.translate.instant('RequestToCharllote.secondChoiceDate'),
                        },
                        expressionProperties: {
                          'templateOptions.label': this.translate.stream('RequestToCharllote.secondChoiceDate'),
                        },
                      },
                      {
                        className: 'flex-2',
                        key: 'secondChoiceTimeRange',
                        type: 'input',
                        templateOptions: {
                          type: 'text',
                          label: this.translate.instant('RequestToCharllote.timeRange'),
                        },
                        expressionProperties: {
                          'templateOptions.label': this.translate.stream('RequestToCharllote.timeRange'),
                        },
                      },
                    ]
                  },
                  {
                    key: 'selectedServiceProvider',
                    type: 'input',
                    templateOptions: {
                      type: 'text',
                      label: this.translate.instant('RequestToCharllote.selectedServiceProvider'),
                    },
                    expressionProperties: {
                      'templateOptions.label': this.translate.stream('RequestToCharllote.selectedServiceProvider'),
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
                          label: this.translate.instant('RequestToCharllote.priceRangeForm'),
                          min: 1,
                          max: 999999,
                          required: true
                        },
                        expressionProperties: {
                          'templateOptions.label': this.translate.stream('RequestToCharllote.priceRangeForm'),
                        },
                      },
                      {
                        className: 'flex-2',
                        key: 'to',
                        type: 'input',
                        templateOptions: {
                          type: 'number',
                          label: this.translate.instant('RequestToCharllote.priceRangeTo'),
                          min: 1,
                          max: 999999,
                          required: true,
                        },
                        expressionProperties: {
                          'templateOptions.label': this.translate.stream('RequestToCharllote.priceRangeTo'),
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
          key: 'requestToCharllote',
          expressionProperties: {
            'templateOptions.cardTitle': this.translate.stream('RequestToCharllote.additionalComments'),
          },
          wrappers: ['card'],
          fieldGroup: [
            {
              key: 'comments',
              type: 'textarea',
              templateOptions: {
                type: 'text',
                label: this.translate.instant('RequestToCharllote.commentsToOrder'),
                maxLength: 6000,
                rows: 5,
              },
              expressionProperties: {
                'templateOptions.label': this.translate.stream('RequestToCharllote.commentsToOrder'),
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
          key: 'requestToCharllote',
          expressionProperties: {
            'templateOptions.cardTitle': this.translate.stream('RequestToCharllote.confirmContactData'),
          },
          wrappers: ['card'],
          fieldGroup: [
            {
              key: 'phoneNo',
              type: 'input',
              templateOptions: {
                type: 'number',
                label: this.translate.instant('RequestToCharllote.phoneNo'),
              },
              expressionProperties: {
                'templateOptions.label': this.translate.stream('RequestToCharllote.phoneNo'),
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
                label: this.translate.instant('RequestToCharllote.email'),
                // tslint:disable-next-line:max-line-length
                pattern: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                required: true,
              },
              expressionProperties: {
                'templateOptions.label': this.translate.stream('RequestToCharllote.email'),
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
          key: 'requestToCharllote',
          wrappers: ['card'],
          expressionProperties: {
            'templateOptions.cardTitle': this.translate.stream('RequestToCharllote.readStatements'),
          },
          fieldGroup: [
            {
              key: 'acceptTerms',
              type: 'checkbox',
              templateOptions: {
                label: this.acceptTerms,
                description: this.translate.instant('RequestToCharllote.acceptTermsDesc'),
                pattern: 'true',
                required: true,
              },
              expressionProperties: {
                'templateOptions.description': this.translate.stream('RequestToCharllote.acceptTermsDesc'),
              },
            },
          ],
        },
      ],
    },
  ];

  form = new FormArray(this.steps.map(() => new FormGroup({})));
  // tslint:disable-next-line:no-angle-bracket-type-assertion
  options = this.steps.map(() => <FormlyFormOptions> {});


  constructor(
    public requestService: RequestService,
    public dictionaryService: DictService,
    public translate: TranslateService) {
      this.model.lang = translate.currentLang;
    }

  submit() {
    if (this.form.valid) {
      this.requestService.saveRequest(this.model.requestToCharllote);
    }
  }

  prevStep(step) {
    this.activedStep = step - 1;
  }

  nextStep(step) {
    this.activedStep = step + 1;
  }
}
