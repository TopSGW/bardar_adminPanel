export interface Offer {
    id: number;
    name_en: string;
    name_ar: string;
    description_en: string;
    description_ar: string;
    start_date: string;
    end_date:string;
    discount: string;
    status: string;

}
export interface SearchResult {
    tables: Offer[];
    total: number;
}
