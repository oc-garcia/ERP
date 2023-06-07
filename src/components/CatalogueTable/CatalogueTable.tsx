import { DocumentData, collection, getDocs } from "firebase/firestore";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { db } from "../../firebase-config";
import { IProductNode } from "../../types/IProduct";
import { TableContainer } from "./style";
import { CaretDoubleDown, CaretDoubleUp } from "@phosphor-icons/react";

type Props = {
  submitted: boolean;
  setSubmitted: Dispatch<SetStateAction<boolean>>;
};

export default function CatalogueTable({ submitted, setSubmitted }: Props) {
  const [products, setProducts] = useState<DocumentData>();
  const [displayForm, setDisplayForm] = useState<boolean>(false);
  useEffect(() => {
    const productRef = collection(db, "products");
    const getProducts = async () => {
      try {
        const data = await getDocs(productRef);
        setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.error(error);
      } finally {
        setSubmitted(false);
      }
    };
    getProducts();
  }, [submitted, setSubmitted]);
  const handleDisplayForm = () => {
    setDisplayForm(!displayForm);
  };
  return (
    <TableContainer>
      <div onClick={handleDisplayForm}>
        <h2>Product Table</h2>
        {displayForm ? <CaretDoubleUp size={28} /> : <CaretDoubleDown size={28} />}
      </div>
      {displayForm && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Brand</th>
              <th>Cost</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products != undefined &&
              products.map((product: IProductNode) => (
                <tr key={product.id}>
                  <td>{product.newProduct.name}</td>
                  <td>{product.newProduct.brand}</td>
                  <td>{Number(product.newProduct.costPrice).toLocaleString()}</td>
                  <td>{Number(product.newProduct.salePrice).toLocaleString()}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </TableContainer>
  );
}
