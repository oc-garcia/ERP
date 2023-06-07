export interface IProduct {
  name: string;
  brand: string;
  costPrice: number | string;
  salePrice: number | string;
}

export interface IProductNode {
  id: string;
  newProduct: IProduct;
  timestamp: string;
  user: string;
}
