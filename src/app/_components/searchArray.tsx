"use client";

import { Autocomplete } from "@mantine/core";
import { useState } from "react";

import { api } from "~/trpc/react";
import { Search } from "./search";

import { attributeMapper } from "../utils/searchHelper";

export function SearchArray() {
  const [productInput, setProductInput] = useState({
    sku: '',
    name: '',
  });

  const handleChange = (e) => {
    console.log('e: ', e);
    const { name, value } = e.target;
    setProductInput(prevProduct => ({
      ...prevProduct,
      [name]: value,
    }));
  };
  const [products, productsQuery] = api.product.getAll.useSuspenseQuery({limit: 2});
  if (productsQuery.error) {
    return <div>Error fetching products.</div>;
  }
  
  if (!products) {
    return <div>Loading...</div>;
  }
const productSkus = products.map(product => product.sku);
const attributes = attributeMapper(products)
  
  const { isFetching} =productsQuery;
  const utils = api.useUtils();
//   const [name, setName] = useState("");
//   const createPost = api.post.create.useMutation({
//     onSuccess: async () => {
//       await utils.post.invalidate();
//       setName("");
//     },
//   });

  return (
    // display title, sku, category, segment, brand
    // <Autocomplete data={productSkus}/>
    <>
      <Autocomplete 
        data={attributes.name}
        type="text"
        name="name"
        value={productInput.name}
        onChange={handleChange}
        placeholder="Name"/>
      <Autocomplete 
        data={attributes.sku}
        type="text"
        name="sku"
        value={productInput.sku}
        onChange={handleChange}
        placeholder="SKU"/>
    </>
    // <Search />
  );
}
