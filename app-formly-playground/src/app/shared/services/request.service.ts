import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RequestToCharllote } from '@app/shared/model/RequestToCharllote';

@Injectable({
    providedIn: 'root'
})
export class RequestService {
    constructor() { }

    saveRequest(request: RequestToCharllote) {
        alert(JSON.stringify(request));
    }
}
