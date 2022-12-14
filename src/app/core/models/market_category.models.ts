export interface MarketCategory {
    id: number;
    name_en: string;
    name_ar: string;
    status: string;

}
export interface SearchResult {
    tables: MarketCategory[];
    total: number;
}
