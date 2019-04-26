import { PriceRange } from './PriceRange';

export class Shopping {
    constructor(
        public order: string = '',
        public description: string = '',
        public deliveryDate: Date = new Date(),
        public selectedShop: string = '',
        public priceRange: PriceRange = new PriceRange()
    ) {}
}
