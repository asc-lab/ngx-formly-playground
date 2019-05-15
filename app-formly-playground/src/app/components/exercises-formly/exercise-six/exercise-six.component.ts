import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

import { RequestToConcierge } from '@app/shared/model/RequestToConcierge';
import { StepType, DictionaryItemWithTranslations } from '@app/shared/model/common';

import { RequestService, DictService } from '@app/shared/services';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-exercise-six',
  templateUrl: './exercise-six.component.html',
  styleUrls: ['./exercise-six.component.scss']
})
export class ExerciseSixComponent implements OnInit {
  activedStep = 0;

  orderTypes: DictionaryItemWithTranslations[] = this.dictionaryService.getDictionaryItemsWithTranslations('ORDER_TYPE');
  // tslint:disable-next-line:max-line-length
  acceptTerms = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt neque eu massa imperdiet, vel efficitur arcu pharetra. Sed pulvinar turpis erat, sit amet euismod dui lacinia eget. Vivamus efficitur volutpat scelerisque. Sed condimentum ipsum nec leo aliquam placerat. Ut nec eros sodales, efficitur nisi non, euismod est. ';


  model: any = {
    RequestToConcierge: new RequestToConcierge()
  };
  steps: StepType[] = [
    {
      label: this.translate.instant('RequestToConcierge.orderIdentification'),
      fields: [
        {
          key: 'RequestToConcierge',
          templateOptions: {
            cardTitle: this.translate.instant('RequestToConcierge.cardIdentification')
          },
          wrappers: ['card'],
          fieldGroup: [
            {
              key: 'cardId',
              type: 'input',
              templateOptions: {
                label: this.translate.instant('RequestToConcierge.cardId'),
                description: this.translate.instant('RequestToConcierge.cardIdDesc'),
                type: 'text',
                required: true,
              },
              validators: {
                cardId: {
                  expression: (fc) => !fc.value || fc.value.length === 5,
                  message: (err, field: FormlyFieldConfig) => this.translate.instant('Validations.cardIDLength')}
              },
              asyncValidators: {
                existingCardIdCheck: {
                  expression: (fc: FormControl) => {
                    return this.requestService.checkIfCardExist(fc);
                  },
                  message: this.translate.instant('Validations.cardNotExist'),
                }
              }
            },
            {
              key: 'cardToken',
              type: 'input',
              templateOptions: {
                label: this.translate.instant('RequestToConcierge.cardToken'),
                type: 'text',
                required: true,
              },
              validators: {
                cardToken: {
                  expression: (fc: FormControl) => !fc.value || fc.value.length === 5,
                  message: (err, field: FormlyFieldConfig) => this.translate.instant('Validations.cardTokenLength')
                }
              }
            },
            {
              key: 'orderType',
              type: 'app-radio',
              templateOptions: {
                name: 'orderType',
                label: this.translate.instant('RequestToConcierge.orderType'),
                options: this.orderTypes,
                currentLang: this.translate.currentLang,
                required: true,
              },
            }
          ],
        },
      ],
    },
    {
      label: this.translate.instant('RequestToConcierge.orderType'),
      fields: [
        {
          key: 'RequestToConcierge',
          hideExpression: (model) => this.model.RequestToConcierge.orderType !== 'SHOPPINGS',
          wrappers: ['card'],
          templateOptions: {
            cardTitle: this.translate.instant('RequestToConcierge.shoppings'),
          },
          fieldGroup: [
            {
              key: 'shoppings',
              type: 'repeat-section',
              templateOptions: {
                description: this.model.RequestToConcierge.shoppings,
                sectionTitle: this.translate.instant('RequestToConcierge.shoppingItem'),
                addItem: this.translate.instant('RequestToConcierge.addShoppingItem'),
              },
              fieldArray: {
                fieldGroup: [
                  {
                    key: 'order',
                    type: 'input',
                    templateOptions: {
                      type: 'text',
                      label: this.translate.instant('RequestToConcierge.order'),
                      required: true,
                    },
                  },
                  {
                    key: 'description',
                    type: 'textarea',
                    templateOptions: {
                      type: 'text',
                      label: this.translate.instant('RequestToConcierge.description'),
                      maxLength: 6000,
                      rows: 5,
                    },
                  },
                  {
                    key: 'deliveryDate',
                    type: 'datepicker',
                    templateOptions: {
                      type: 'date',
                      label: this.translate.instant('RequestToConcierge.deliveryDate'),
                      required: true,
                    },
                  },
                  {
                    key: 'selectedShop',
                    type: 'input',
                    templateOptions: {
                      type: 'text',
                      label: this.translate.instant('RequestToConcierge.selectedShop'),
                    },
                  },
                  {
                    template: `<div class="app-template-label"><strong>${this.translate.instant('RequestToConcierge.priceRange')}</strong>`,
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
                          label: this.translate.instant('RequestToConcierge.priceRangeForm'),
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
                          label: this.translate.instant('RequestToConcierge.priceRangeTo'),
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
            cardTitle: this.translate.instant('RequestToConcierge.services'),
          },
          fieldGroup: [
            {
              key: 'services',
              type: 'repeat-section',
              templateOptions: {
                description: this.model.RequestToConcierge.services,
                sectionTitle: this.translate.instant('RequestToConcierge.serviceItem'),
                addItem: this.translate.instant('RequestToConcierge.addServiceItem'),
              },
              fieldArray: {
                fieldGroup: [
                  {
                    key: 'order',
                    type: 'input',
                    templateOptions: {
                      type: 'text',
                      label: this.translate.instant('RequestToConcierge.serviceType'),
                      required: true,
                    },
                  },
                  {
                    key: 'description',
                    type: 'textarea',
                    templateOptions: {
                      type: 'text',
                      label: this.translate.instant('RequestToConcierge.description'),
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
                          label: this.translate.instant('RequestToConcierge.expectedServiceDate'),
                          required: true,
                        },
                      },
                      {
                        className: 'flex-2',
                        key: 'timeRange',
                        type: 'input',
                        templateOptions: {
                          type: 'text',
                          label: this.translate.instant('RequestToConcierge.timeRange'),
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
                          type: 'date',
                          label: this.translate.instant('RequestToConcierge.secondChoiceDate'),
                        },
                      },
                      {
                        className: 'flex-2',
                        key: 'secondChoiceTimeRange',
                        type: 'input',
                        templateOptions: {
                          type: 'text',
                          label: this.translate.instant('RequestToConcierge.timeRange'),
                        },
                      },
                    ]
                  },
                  {
                    key: 'selectedServiceProvider',
                    type: 'input',
                    templateOptions: {
                      type: 'text',
                      label: this.translate.instant('RequestToConcierge.selectedServiceProvider'),
                    },
                  },
                  {
                    template: `<div class="app-template-label"><strong>${this.translate.instant('RequestToConcierge.priceRange')}</strong>`,
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
                          label: this.translate.instant('RequestToConcierge.priceRangeForm'),
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
                          label: this.translate.instant('RequestToConcierge.priceRangeTo'),
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
      label: this.translate.instant('RequestToConcierge.comments'),
      fields: [
        {
          key: 'RequestToConcierge',
          templateOptions: {
            cardTitle: this.translate.instant('RequestToConcierge.additionalComments')
          },
          wrappers: ['card'],
          fieldGroup: [
            {
              key: 'comments',
              type: 'textarea',
              templateOptions: {
                type: 'text',
                label: this.translate.instant('RequestToConcierge.commentsToOrder'),
                maxLength: 6000,
                rows: 5,
              },
            },
          ],
        },
      ],
    },
    {
      label: this.translate.instant('RequestToConcierge.confirmations'),
      fields: [
        {
          key: 'RequestToConcierge',
          templateOptions: {
            cardTitle: this.translate.instant('RequestToConcierge.confirmContactData'),
          },
          wrappers: ['card'],
          fieldGroup: [
            {
              key: 'phoneNo',
              type: 'input',
              templateOptions: {
                type: 'number',
                label: this.translate.instant('RequestToConcierge.phoneNo'),
              },
            },
            {
              key: 'email',
              type: 'input',
              templateOptions: {
                type: 'text',
                label: this.translate.instant('RequestToConcierge.email'),
                // tslint:disable-next-line:max-line-length
                pattern: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                required: true,
              },
              validation: {
                messages: {
                  // tslint:disable-next-line:max-line-length
                  pattern: (error, field: FormlyFieldConfig) => `${field.formControl.value} ${this.translate.instant('Validations.emailCheck')}`,
                },
              },
            },
          ],
        },
      ],
    },
    {
      label: this.translate.instant('RequestToConcierge.statements'),
      fields: [
        {
          key: 'RequestToConcierge',
          wrappers: ['card'],
          templateOptions: {
            cardTitle: this.translate.instant('RequestToConcierge.readStatements'),
          },
          fieldGroup: [
            {
              key: 'acceptTerms',
              type: 'checkbox',
              templateOptions: {
                label: this.acceptTerms,
                description: this.translate.instant('RequestToConcierge.acceptTermsDesc'),
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
  options = this.steps.map(() => <FormlyFormOptions> {});

  constructor(
    public requestService: RequestService,
    public dictionaryService: DictService,
    public translate: TranslateService) {
  }

  ngOnInit() {
    this.model.lang = this.translate.currentLang;
  }

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
