"use client";

import { Autocomplete } from "@mantine/core";
import { useState } from "react";

import { api } from "~/trpc/react";
import { Search } from "./search";

import { attributeMapper } from "../utils/searchHelper";

export function SearchArray() {
  const [selectedProduct, setSelectedProduct] = useState({
    sku: '',
    name: '',
  });

  const handleSelect = (identifier, value) => {
    const product = products.find(p => p[identifier] === value);
    if (product) {
      setSelectedProduct(product);
    }
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
  <>
    <Autocomplete
      data={products.map(product => product.name)}
      value={selectedProduct.name || ''}
      onChange={(value) => handleSelect('name', value)}
      placeholder="Name"
    />
    <Autocomplete
      data={products.map(product => product.sku)}
      value={selectedProduct.sku || ''}
      onChange={(value) => handleSelect('sku', value)}
      placeholder="SKU"
    />
    {/* Add more Autocomplete components as needed for other attributes */}
  </>
);
}
