import { Shopping } from './Shopping';

export class RequestToCharllote {
    constructor(
        public cardId: string = '',
        public cardToken: string = '',
        public deliveryDate: Date = new Date(),
        public orderType: string = '',
        public acceptTerms: boolean = false,
        public shoppings: Shopping [] = [ new Shopping() ],
        public phoneNo: number = null,
        public email: string = null,
        public comments?: string
    ) { }
}
