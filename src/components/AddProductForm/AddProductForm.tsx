import { Dispatch, SetStateAction, useState } from "react";
import { IProduct } from "../../types/IProduct";
import { CaretDoubleDown, CaretDoubleUp, Check } from "@phosphor-icons/react";
import { AddProductFormContainer } from "./style";

interface IProductForm {
  newProduct: IProduct;
  setNewProduct: Dispatch<SetStateAction<IProduct>>;
}

export default function AddProductForm({ newProduct, setNewProduct }: IProductForm) {
  const [displayForm, setDisplayForm] = useState(false);

  const handleDisplayForm = () => {
    setDisplayForm(!displayForm);
  };
  return (
    <AddProductFormContainer>
      <div onClick={handleDisplayForm}>
        <h2>Add product to Catalogue</h2>
        {displayForm ? <CaretDoubleUp size={28} /> : <CaretDoubleDown size={28} />}
      </div>
      {displayForm && (
        <>
          <label htmlFor="">Name:</label>
          <input
            type="text"
            value={newProduct.name}
            onChange={(e) => {
              setNewProduct({ ...newProduct, name: e.target.value });
            }}
          />
          <label htmlFor="">Brand:</label>
          <input
            type="text"
            value={newProduct.brand}
            onChange={(e) => {
              setNewProduct({ ...newProduct, brand: e.target.value });
            }}
          />
          <label htmlFor="">Cost price:</label>
          <input
            type="number"
            value={newProduct.costPrice}
            onChange={(e) => {
              setNewProduct({ ...newProduct, costPrice: e.target.value });
            }}
          />
          <button type="submit">
            <Check size={32} color="#0a1128" />
          </button>
        </>
      )}
    </AddProductFormContainer>
  );
}
