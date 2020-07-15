import { FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';

export function registerI18nExtension(translate: TranslateService) {
  return {
    validationMessages: [
      {
        name: 'required',
        message() {
          return translate.stream('Validations.required');
        },
      },
      {
        name: 'minlength',
        message(err: any, field: FormlyFieldConfig) {
          return translate.stream('Validations.minLength', { number: field.templateOptions.minLength });
        },
      },
      {
        name: 'maxlength',
        message(err: any, field: FormlyFieldConfig) {
          return translate.stream('Validations.maxLength', { number: field.templateOptions.maxLength });
        },
      },
      {
        name: 'min',
        message(err: any, field: FormlyFieldConfig) {
          return translate.stream('Validations.min', { number: field.templateOptions.min });
        },
      },
      {
        name: 'max',
        message(err: any, field: FormlyFieldConfig) {
          return translate.stream('Validations.max', { number: field.templateOptions.max });
        },
      },
    ],
  };
}
