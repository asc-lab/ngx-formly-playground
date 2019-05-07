import { FormlyFieldConfig } from '@ngx-formly/core';
import { Observable } from 'rxjs';

export interface Dictionary {
    code: string;
    dictionaryItems: DictionaryItem[];
}

export interface DictionaryItem {
    key: string;
    value: string;
    dictCode?: string;
    description?: string;
}

export interface DictionaryWithTranslations {
    code: string;
    dictionaryItems: DictionaryItemWithTranslations[];
}

export interface DictionaryItemWithTranslations {
    key: string;
    translations: Map<string, string>;
    dictCode?: string;
    description?: string;
}

export interface StepType {
    label: any;
    fields: FormlyFieldConfig[];
}
