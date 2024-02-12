"use client";
import { useState } from "react";
import Button from "../Button";

import { stringToArray, stringToSnakeCase } from "@/app/utils/func";

import { doc, setDoc, addDoc} from "firebase/firestore";
import { db, storage } from "@/firebase/config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// TODO : fix create - firestore not responding
const createProduct = async (product, file) => {
  console.log("product", product);

  const idRef = stringToSnakeCase(product.name);

  // 1. Upload image to Storage
  const storageRef = ref(storage, idRef);
  const fileSnapshot = await uploadBytes(storageRef, file);

  // 2. Get the  URL of the uploaded image
  const fileURL = await getDownloadURL(fileSnapshot.ref);

  // 3. Create the product in Firestore
  const docRef = doc(db, "productos", idRef);
  await setDoc(docRef, {
    ...product,
    imageURL: fileURL,
  });
  // .then(() =>
  //   console.log("Producto añadido a firestore")
  // );
};

// TODO: modifyDoc and deleteDoc

const CreateForm = () => {
  const [values, setValues] = useState({
    name: "",
    price: 0,
    ingredients: [],
    category: [],
  });
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      ...values,
      ingredients: stringToArray(values.ingredients),
      category: stringToArray(values.category),
    };
    createProduct(newProduct, file);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Product name:</label>
        <input
          type="text"
          value={values.name}
          name="name"
          required
          onChange={handleChange}
          className="p-2 rounded border border-blue-100 block my-4"
        />
      </div>
      <div>
        <label htmlFor="image">Imagen:</label>
        <input
          type="file"
          name="image"
          required
          onChange={handleFileChange}
          className="p-2 rounded border border-blue-100 block my-4"
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          value={values.price}
          name="price"
          required
          onChange={handleChange}
          className="p-2 rounded border border-blue-100 block my-4"
        />
      </div>
      <div>
        <label htmlFor="ingredients">Ingredients:</label>
        <input
          type="text"
          value={values.ingredients}
          name="ingredients"
          required
          onChange={handleChange}
          placeholder="Introduce los ingredientes separados por comas"
          className="p-2 rounded border border-blue-100 block my-4"
        />
      </div>
      <div>
        <label htmlFor="category">Categories:</label>
        <input
          type="text"
          value={values.category}
          name="category"
          required
          onChange={handleChange}
          placeholder="Introduce las categorías separadas por comas"
          className="p-2 rounded border border-blue-100 block my-4"
        />
      </div>

      <Button className="primary">Enviar</Button>
    </form>
  );
};

export default CreateForm;
