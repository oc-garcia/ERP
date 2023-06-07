import { FormEvent, useContext, useEffect, useState } from "react";
import { UserContext } from "../../hooks/UserContext";
import { IProduct } from "../../types/IProduct";
import { CatalogueContainer } from "./style";
import AddProductForm from "../../components/AddProductForm/AddProductForm";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
import { getTimeStamp } from "../../services/timeStamp";

export default function Catalogue() {
  const { user } = useContext(UserContext);
  const [newProduct, setNewProduct] = useState<IProduct>({
    name: "",
    brand: "",
    costPrice: "",
    salePrice: "",
  });

  const newProductRef = collection(db, "products");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(newProductRef, {
        user: user?.email,
        timeStamp: getTimeStamp(),
        newProduct,
      });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    console.log(newProduct);
  }, [newProduct]);
  return (
    <CatalogueContainer>
      {user != null && (
        <>
          <AddProductForm newProduct={newProduct} setNewProduct={setNewProduct} handleSubmit={handleSubmit} />
        </>
      )}
    </CatalogueContainer>
  );
}
