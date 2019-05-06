import { Injectable } from '@angular/core';
import { RequestToConcierge } from '@app/shared/model/RequestToConcierge';
import { FormControl } from '@angular/forms';

const existingCardId: string[] = [
    '12345',
    '11111',
    '54321'
];

@Injectable({
    providedIn: 'root'
})
export class RequestService {
    constructor() { }

    checkIfCardExist(fc: FormControl) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(existingCardId.indexOf(fc.value) !== -1);
            }, 1000);
        });
    }

    saveRequest(request: RequestToConcierge) {
        return alert(JSON.stringify(request));
    }
}
