export interface ItemsCategory {
    id: number;
    name_en: string;
    name_ar: string;
    abbreviation: string;
    kenf_collection: string;
    images: any[];
    status: string;

}
export interface SearchResult {
    tables: ItemsCategory[];
    total: number;
}
