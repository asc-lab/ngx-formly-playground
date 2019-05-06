import { Injectable } from '@angular/core';
import { Dictionary } from '../model/common';

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
    },
    {
        code: 'ORDER_TYPE_LANG',
        dictionaryItems: [
            {
                valueEN: 'SHOPPINGS',
                valuePL: 'ZAKUPY',
                key: 'SHOPPINGS',
                description: 'shoppings-img',
            },
            {
                valueEN: 'SERVICES',
                valuePL: 'USŁUGI',
                key: 'SERVICES',
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

}
