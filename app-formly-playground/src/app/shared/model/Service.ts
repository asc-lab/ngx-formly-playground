import { PriceRange } from './PriceRange';
import { TranslateService } from '@ngx-translate/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

export class Service {
    priceRangeModel: PriceRange;

    constructor(
        public order: string = '',
        public description: string = '',
        public priceRange: PriceRange = new PriceRange(),
        public date: Date = new Date(),
        public timeRange: string = '',
        public secondChoiceDate?: Date,
        public secondChoiceTimeRange?: string,
        public selectedServiceProvider?: string,
    ) { }

    formField(translations: TranslateService): FormlyFieldConfig[] {
        this.priceRangeModel = new PriceRange();

        return [
            {
                key: 'order',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: translations.instant('RequestToConcierge.serviceType'),
                    required: true,
                },
            },
            {
                key: 'description',
                type: 'textarea',
                templateOptions: {
                    type: 'text',
                    label: translations.instant('RequestToConcierge.description'),
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
                            label: translations.instant('RequestToConcierge.expectedServiceDate'),
                            required: true,
                        },
                    },
                    {
                        className: 'flex-2',
                        key: 'timeRange',
                        type: 'input',
                        templateOptions: {
                            type: 'text',
                            label: translations.instant('RequestToConcierge.timeRange'),
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
                            label: translations.instant('RequestToConcierge.secondChoiceDate'),
                        },
                    },
                    {
                        className: 'flex-2',
                        key: 'secondChoiceTimeRange',
                        type: 'input',
                        templateOptions: {
                            type: 'text',
                            label: translations.instant('RequestToConcierge.timeRange'),
                        },
                    },
                ]
            },
            {
                key: 'selectedServiceProvider',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: translations.instant('RequestToConcierge.selectedServiceProvider'),
                },
            },
            {
                // tslint:disable-next-line:max-line-length
                template: `<div class="app-template-label"><strong>${translations.instant('RequestToConcierge.priceRange')}</strong>`,
            },
            {
                key: 'priceRange',
                fieldGroupClassName: 'display-flex',
                fieldGroup: this.priceRangeModel.formField(translations),
            },
        ];
    }
}
