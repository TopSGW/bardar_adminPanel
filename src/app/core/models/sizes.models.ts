export interface Sizes {
    id: number;
    name_en: string;
    name_ar: string;
    unit: string;
    status: string;
}
export interface SearchResult {
    tables: Sizes[];
    total: number;
}
