import ProductModel from "./ProductModel";

export interface CartItemModel {
    product: ProductModel,
    price: number,
    quantity: number,
}

type CartModel = Record<string, CartItemModel>;

export default CartModel