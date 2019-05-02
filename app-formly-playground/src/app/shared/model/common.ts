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
