import { Injectable } from '@angular/core';
import { Dictionary, DictionaryWithTranslations } from '../model/common';

const dictionariesDB: Dictionary[] = [
    {
        code: 'ORDER_TYPE',
        dictionaryItems: [
            {
                value: 'SHOPPINGS',
                key: 'SHOPPINGS',
                description: 'shoppings-img',
            },
            {
                value: 'SERVICES',
                key: 'SERVICES',
                description: 'services-img'
            },
        ]
    }
];

const dictionariesDBWithTransl: DictionaryWithTranslations[] = [
    {
        code: 'ORDER_TYPE',
        dictionaryItems: [
            {
                key: 'SHOPPINGS',
                translations: new Map([
                    ['en', 'SHOPPING'],
                    ['pl', 'ZAKUPY']
                ]),
                description: 'shoppings-img',
            },
            {
                key: 'SERVICES',
                translations: new Map([
                    ['en', 'SERVICES'],
                    ['pl', 'USŁUGI']
                ]),
                description: 'services-img'
            },
        ]
    }
];

@Injectable({
    providedIn: 'root'
})
export class DictService {
    constructor() { }

    getDictionaryItems(dictCode: string) {
        const dictionaryToFind = dictionariesDB.find(dict => dict.code === dictCode);
        return dictionaryToFind.dictionaryItems;
    }

    getDictionaryItemsWithTranslations(dictCode: string) {
        const dictionaryToFind = dictionariesDBWithTransl.find(dict => dict.code === dictCode);
        return dictionaryToFind.dictionaryItems;
    }

}
