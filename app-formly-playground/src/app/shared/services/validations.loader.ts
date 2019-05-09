import { FormlyFieldConfig, FormlyConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';

@Injectable()
export class ValidationLoader {
    constructor(
        private translate: TranslateService,
        private formlyConfig: FormlyConfig) { }

    init(): void {
        //message without params
        this.formlyConfig.addValidatorMessage('required', this.translate.instant('Validations.required'));
        
        //message with params
        this.formlyConfig.addValidatorMessage('minlength', (err, field) => this.minlengthValidationMessage(err, field, this.translate));
        this.formlyConfig.addValidatorMessage('maxlength', (err, field) => this.maxlengthValidationMessage(err, field, this.translate));
        this.formlyConfig.addValidatorMessage('min', (err, field) => this.minValidationMessage(err, field, this.translate));
        this.formlyConfig.addValidatorMessage('max', (err, field) => this.maxValidationMessage(err,field, this.translate));
    }

    private minlengthValidationMessage(err, field: FormlyFieldConfig, translate: TranslateService) {
        return translate.instant('Validations.minLength', { 'number': field.templateOptions.minLength});
    }
    
    private maxlengthValidationMessage(err, field: FormlyFieldConfig, translate: TranslateService) {
        return translate.instant('Validations.maxLength', { 'number': field.templateOptions.maxLength});
    }
    
    private minValidationMessage(err, field: FormlyFieldConfig, translate: TranslateService) {
        return translate.instant('Validations.min', { 'number': field.templateOptions.min});
    }
    
    private maxValidationMessage(err, field: FormlyFieldConfig, translate: TranslateService) {
        return translate.instant('Validations.max', { 'number': field.templateOptions.max});
    }
}


