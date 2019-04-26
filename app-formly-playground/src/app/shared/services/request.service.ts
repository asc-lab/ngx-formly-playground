import { Injectable } from '@angular/core';
import { RequestToCharllote } from '@app/shared/model/RequestToCharllote';

@Injectable({
    providedIn: 'root'
})
export class RequestService {
    constructor() { }

    saveRequest(request: RequestToCharllote) {
        return alert(JSON.stringify(request));
    }
}
