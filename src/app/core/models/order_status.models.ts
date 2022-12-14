export interface OrderStatus {
    id: number;
    name_en: string;
    name_ar: string;
    status: string;

}
export interface SearchResult {
    tables: OrderStatus[];
    total: number;
}
