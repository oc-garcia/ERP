import { Dispatch, FormEvent, SetStateAction } from "react";
import { IProduct } from "../../types/IProduct";
import { CaretDoubleDown, CaretDoubleUp, Check } from "@phosphor-icons/react";
import { AddProductFormContainer } from "./style";

interface IProductForm {
  newProduct: IProduct;
  setNewProduct: Dispatch<SetStateAction<IProduct>>;
  handleSubmit: (e: FormEvent) => void;
  displayForm: boolean;
  setDisplayForm: Dispatch<SetStateAction<boolean>>;
}

export default function AddProductForm({
  newProduct,
  setNewProduct,
  handleSubmit,
  displayForm,
  setDisplayForm,
}: IProductForm) {
  const handleDisplayForm = () => {
    setDisplayForm(!displayForm);
  };

  return (
    <AddProductFormContainer onSubmit={handleSubmit}>
      <div onClick={handleDisplayForm}>
        <h2>Add product to Catalogue</h2>
        {displayForm ? <CaretDoubleUp size={28} /> : <CaretDoubleDown size={28} />}
      </div>
      {displayForm && (
        <>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={newProduct.name}
            onChange={(e) => {
              setNewProduct({ ...newProduct, name: e.target.value });
            }}
          />
          <label htmlFor="brand">Brand:</label>
          <input
            id="brand"
            type="text"
            value={newProduct.brand}
            onChange={(e) => {
              setNewProduct({ ...newProduct, brand: e.target.value });
            }}
          />
          <label htmlFor="costPrice">Cost price:</label>
          <input
            id="costPrice"
            type="number"
            value={newProduct.costPrice}
            onChange={(e) => {
              setNewProduct({ ...newProduct, costPrice: e.target.value });
            }}
          />
          <label htmlFor="salePrice">Sale price:</label>
          <input
            id="salePrice"
            type="number"
            value={newProduct.salePrice}
            onChange={(e) => {
              setNewProduct({ ...newProduct, salePrice: e.target.value });
            }}
          />
          <button type="submit">
            <Check size={32} color="#fff" />
          </button>
        </>
      )}
    </AddProductFormContainer>
  );
}
