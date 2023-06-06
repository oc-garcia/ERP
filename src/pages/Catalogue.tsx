import { useContext, useEffect, useState } from "react";
import { UserContext } from "../hooks/UserContext";

interface IProduct {
  name: string;
  brand: string;
  costPrice: number | string;
}

export default function Catalogue() {
  const { user } = useContext(UserContext);
  const [newProduct, setNewProduct] = useState<IProduct>({
    name: "",
    brand: "",
    costPrice: "",
  });

  useEffect(() => {
    console.log(newProduct);
  }, [newProduct]);
  return (
    <section>
      {user == null && (
        <form>
          <h2>Add product to Catalogue:</h2>
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
        </form>
      )}
    </section>
  );
}
