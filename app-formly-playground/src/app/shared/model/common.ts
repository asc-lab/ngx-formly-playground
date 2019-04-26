export interface Dictionary {
    code: string;
    dictionaryItems: DictionaryItem[];
}

export interface DictionaryItem {
    code: string;
    name: string;
    description?: string;
    dictCode?: string;
}
