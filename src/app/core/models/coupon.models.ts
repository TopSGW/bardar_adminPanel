export interface Coupon {
    id: number;
    user: string;
    code: string;
    discount_type: string;
    discount: number;
    max_discount: number;
    profit: number;
    profit_type: string;
    total_purchase_condition: number;
    included_category: number;
    except_discounted_product: boolean;
    start_date: Date;
    end_date: Date;

}
export interface SearchResult {
    tables: Coupon[];
    total: number;
}
