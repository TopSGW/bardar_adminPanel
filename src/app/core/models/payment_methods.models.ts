export interface PaymentMethods {
    id: number;
    name_en: string;
    name_ar: string;
    status: string;

}
export interface SearchResult {
    tables: PaymentMethods[];
    total: number;
}
