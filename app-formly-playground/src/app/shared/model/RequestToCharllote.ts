export class RequestToCharllote {
    constructor(
        public cardId: string = '',
        public cardToken: string = '',
        public orderType: string = '',
        public service: string = '',
        public shopings: string = '',
        public priceRange: {
            currency: string,
            from: number,
            to: number
        } = { currency: '', from: 0,  to: 0},
        public comments: string = ''
    ) { }
}
