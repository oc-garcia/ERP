import { FormEvent, useContext, useEffect, useState } from "react";
import { UserContext } from "../../hooks/UserContext";
import { IProduct } from "../../types/IProduct";
import { CatalogueContainer } from "./style";
import AddProductForm from "../../components/AddProductForm/AddProductForm";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
import { getTimeStamp } from "../../services/timeStamp";
import CatalogueTable from "../../components/CatalogueTable/CatalogueTable";
import { useNavigate } from "react-router-dom";

const newProductDefault = {
  name: "",
  brand: "",
  costPrice: "",
  salePrice: "",
};

export default function Catalogue() {
  const { user } = useContext(UserContext);
  const [newProduct, setNewProduct] = useState<IProduct>(newProductDefault);
  const [displayForm, setDisplayForm] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const navigate = useNavigate();
  const productRef = collection(db, "products");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (newProduct != newProductDefault) {
      try {
        await addDoc(productRef, {
          user: user?.email,
          timeStamp: getTimeStamp(),
          newProduct,
        });
      } catch (error) {
        console.error(error);
      } finally {
        setNewProduct(newProductDefault);
        setDisplayForm(!displayForm);
        setSubmitted(true);
      }
    }
  };

  useEffect(() => {
    if (user == null) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <CatalogueContainer>
      {user != null && (
        <>
          <AddProductForm
            newProduct={newProduct}
            setNewProduct={setNewProduct}
            handleSubmit={handleSubmit}
            displayForm={displayForm}
            setDisplayForm={setDisplayForm}
          />
          <CatalogueTable submitted={submitted} setSubmitted={setSubmitted} />
        </>
      )}
    </CatalogueContainer>
  );
}
