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
  const { isFetching} =productsQuery;
  if (productsQuery.error) {
    return <div>Error fetching products.</div>;
  }
  
  if (isFetching) {
    return <div>Loading...</div>;
  }
const productSkus = products.map(product => product.sku);
const attributes = attributeMapper(products)
  
  const utils = api.useUtils();

return (
  <>
    <Autocomplete
      data={products.map(product => product.name)}
      value={selectedProduct.name || ''}
      onOptionSubmit={(value) => handleSelect('name', value)}
      placeholder="Name"
    />
    <Autocomplete
      data={products.map(product => product.sku)}
      value={selectedProduct.sku || ''}
      onOptionSubmit={(value) => handleSelect('sku', value)}
      placeholder="SKU"
    />
  </>
);
}
