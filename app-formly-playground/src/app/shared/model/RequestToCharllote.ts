import { Shopping } from './Shopping';

export class RequestToCharllote {
    constructor(
        public cardId: string = '',
        public cardToken: string = '',
        public orderType: string = '',
        public shoppings: Shopping [] = [ new Shopping() ],
        public comments?: string
    ) { }
}