import { Shopping } from './Shopping';
import { Service } from './Service';

export class RequestToCharllote {
    constructor(
        public cardId: string = '',
        public cardToken: string = '',
        public deliveryDate: Date = new Date(),
        public orderType: string = '',
        public acceptTerms: boolean = false,
        public phoneNo: number = null,
        public email: string = null,
        public shoppings?: Shopping [],
        public services?: Service[],
        public comments?: string
    ) { }
}
