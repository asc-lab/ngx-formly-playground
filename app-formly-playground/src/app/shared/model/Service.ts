import { PriceRange } from './PriceRange';

export class Service {
    constructor(
        public serviceType: string = '',
        public description: string = '',
        public priceRange: PriceRange = new PriceRange(),
        public date: Date = new Date(),
        public timeRange: string = '',
        public secondChoiceDate?: Date,
        public secondChoiceTimeRange?: string,
        public selectedServiceProvider?: string
    ) {}
}
