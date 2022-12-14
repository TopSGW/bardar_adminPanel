export interface Seller {
  id: number;
  name_en:string;
  name_ar:string;
  email:string;
  phone:string;
  address_en:string;
  address_ar:string;
  description_ar: string;
  description_en: string;
  city: string;
  region: string;
  zip: string;
  documents: number[];

}
