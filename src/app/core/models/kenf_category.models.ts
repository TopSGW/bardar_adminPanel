export interface KenfCategory {
    id: number;
    name_en: string;
    name_ar: string;
    kenf_collection: string;
    abbreviation: string;
    status: string;

}
export interface SearchResult {
    tables: KenfCategory[];
    total: number;
}
