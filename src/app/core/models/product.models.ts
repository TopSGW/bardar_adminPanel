// tslint:disable-next-line: class-name
import { ItemsCategory } from "./items_category.models";
import { Karats } from "./karats.models";
import { ItemsGroup } from "./items_group.models";
import { Shop } from "./shop.models";
import { Units } from "./units.models";
export class arrayModel {
  key: string;
  value: string;
}

// tslint:disable-next-line: class-name
export class Product {
  id: number;
  name_ar: string;
  name_en: string;
  category_id: ItemsCategory;
  kenf_id: ItemsCategory;
  purity_id: Karats[];
  shop_id: Shop;
  weight: number;
  quantity: number;
  extra_price: number;
  group_id: ItemsGroup;
  unit_id: Units[];
  commission: number;
  description_ar: string;
  description_en: string;
  barcode: string;
  color: string;
  ringSize: number;
  images: any[];
  isExclusive: boolean;
}

// tslint:disable-next-line: class-name
export class filterObject {
  discountRates: number[];
  maxVal: number;
  minVal: number;
}
