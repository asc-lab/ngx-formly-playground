import { Injectable } from '@angular/core';
import { Dictionary } from '../model/common';

const dictionariesDB: Dictionary [] = [
    {
        code: 'ORDER_TYPE',
        dictionaryItems: [
            {value: 'SHOPPINGS', label: 'SHOPPINGS' },
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
