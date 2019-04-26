export class PriceRange {
    constructor(
        public currency: string = '',
        public from: number = 0,
        public to: number = 9999
    ) { }
}
