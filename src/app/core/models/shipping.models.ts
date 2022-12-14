export interface Shipping {
    id: number;
    company: string;
    price: number;
    time: Date;
}
export interface SearchResult {
    tables: Shipping[];
    total: number;
}
