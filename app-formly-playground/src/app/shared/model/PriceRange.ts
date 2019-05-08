import { FormlyFieldConfig } from '@ngx-formly/core';

export class PriceRange {
    constructor(
        public from: number = 1,
        public to: number = 9999,
    ) { }

    formField(translations: any) {
        return [
            {
                className: 'flex-2',
                key: 'from',
                type: 'input',
                templateOptions: {
                    type: 'number',
                    label: translations.instant('RequestToConcierge.priceRangeForm'),
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
                    label: translations.instant('RequestToConcierge.priceRangeTo'),
                    min: 1,
                    max: 999999,
                    required: true,
                },
            }
        ];
    }
}
