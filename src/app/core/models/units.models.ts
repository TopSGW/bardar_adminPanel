export interface Units {
    id: number;
    name_en: string;
    name_ar: string;
    status: string;

}
export interface SearchResult {
    tables: Units[];
    total: number;
}
