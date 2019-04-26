export interface Dictionary {
    code: string;
    dictionaryItems: DictionaryItem[];
}

export interface DictionaryItem {
    value: string;
    label: string;
    description?: string;
    dictCode?: string;
}
