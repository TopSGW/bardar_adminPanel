export interface ItemsGroup {
    id: number;
    name_en: string;
    name_ar: string;
    abbreviation: string;
    images: any[];
    status: string;

}
export interface SearchResult {
    tables: ItemsGroup[];
    total: number;
}
