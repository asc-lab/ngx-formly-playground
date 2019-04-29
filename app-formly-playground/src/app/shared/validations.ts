import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormControl, ValidationErrors } from '@angular/forms';

// common validations
export function minlengthValidationMessage(err, field: FormlyFieldConfig) {
    return `Should have atleast ${field.templateOptions.minLength} characters`;
}

export function maxlengthValidationMessage(err, field: FormlyFieldConfig) {
    return `This value should be less than ${field.templateOptions.maxLength} characters`;
}

export function minValidationMessage(err, field: FormlyFieldConfig) {
    return `This value should be more than ${field.templateOptions.min}`;
}

export function maxValidationMessage(err, field: FormlyFieldConfig) {
    return `This value should be less than ${field.templateOptions.max}`;
}


