import { FormlyFieldConfig } from '@ngx-formly/core';
import { Observable, Subscription } from 'rxjs';

export interface Dictionary {
    code: string;
    dictionaryItems: DictionaryItem[];
}

export interface DictionaryItem {
    value: string;
    key: string;
    description?: string;
    dictCode?: string;
}

export interface StepType {
    label: any;
    fields: FormlyFieldConfig[];
    expressionProperties?: {
        [property: string]: string | ((model: any, formState: any) => any) | Observable<any>;
    };
}
