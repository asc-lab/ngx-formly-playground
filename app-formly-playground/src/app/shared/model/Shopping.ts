import { PriceRange } from './PriceRange';
import { TranslateService } from '@ngx-translate/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

export class Shopping {
    priceRangeModel: PriceRange;

    constructor(
        public order: string = '',
        public description: string = '',
        public deliveryDate: Date = new Date(),
        public priceRange: PriceRange = new PriceRange(),
        public selectedShop?: string
    ) { }

    formField(translations: TranslateService): FormlyFieldConfig[] {
        this.priceRangeModel = new PriceRange();
        return [
            {
                key: 'order',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: translations.instant('RequestToConcierge.order'),
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
                key: 'deliveryDate',
                type: 'datepicker',
                templateOptions: {
                    type: 'date',
                    label: translations.instant('RequestToConcierge.deliveryDate'),
                    required: true,
                },
            },
            {
                key: 'selectedShop',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: translations.instant('RequestToConcierge.selectedShop'),
                },
            },
            {
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
