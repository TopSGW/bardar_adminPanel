export interface Karats {
    id: number;
    name_en: string;
    name_ar: string;
    status: string;

}
export interface SearchResult {
    tables: Karats[];
    total: number;
}
