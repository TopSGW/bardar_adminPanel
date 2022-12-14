export interface UserGroup {
    id: number;
    name_en: string;
    name_ar: string;
    permissions: string[];
    status: string;

}
export interface SearchResult {
    tables: UserGroup[];
    total: number;
}
