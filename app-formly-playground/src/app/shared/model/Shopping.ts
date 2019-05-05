import { PriceRange } from './PriceRange';

export class Shopping {
    constructor(
        public order: string = '',
        public description: string = '',
        public deliveryDate: Date = new Date(),
        public priceRange: PriceRange = new PriceRange(),
        public selectedShop?: string
    ) {}
}
