import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../hooks/UserContext";
import { IProduct } from "../../types/IProduct";
import { CatalogueContainer } from "./style";
import AddProductForm from "../../components/AddProductForm/AddProductForm";

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
    <CatalogueContainer>
      {user == null && (
        <>
          <AddProductForm newProduct={newProduct} setNewProduct={setNewProduct} />
        </>
      )}
    </CatalogueContainer>
  );
}
