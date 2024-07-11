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

  const handleSelect = (identifier: keyof typeof selectedProduct, value: string) => {
    const product = products.find(p => p[identifier] === value);
    if (product) {
      setSelectedProduct(product);
    }
  };

  const handleChange = (identifier: keyof typeof selectedProduct, value: string) => {
    setSelectedProduct(prevProduct => ({
      ...prevProduct,
      [identifier]: value,
    }));
  };


  const [products, productsQuery] = api.product.getAll.useSuspenseQuery({limit: 2});
  const { isFetching} =productsQuery;
  if (productsQuery.error) {
    return <div>Error fetching products.</div>;
  }
  
  if (isFetching) {
    return <div>Loading...</div>;
  }
  const attributes = attributeMapper(products)
  const utils = api.useUtils();
return (
  <>
    <Autocomplete
      data={attributes.name}
      value={selectedProduct.name || ''}
      onChange={(value) => handleChange('name', value)}
      onOptionSubmit={(value) => handleSelect('name', value)}
      placeholder="Name"
    />
    <Autocomplete
      data={attributes.sku}
      value={selectedProduct.sku || ''}
      onChange={(value) => handleChange('sku', value)}
      onOptionSubmit={(value) => handleSelect('sku', value)}
      placeholder="SKU"
    />
  </>
);
}
