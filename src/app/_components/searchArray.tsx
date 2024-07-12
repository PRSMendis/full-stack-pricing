"use client";

import { useState } from "react";
import { Product } from "@prisma/client";
import { attributeMapper } from "../utils/searchHelper";
import { Search } from "./search";

interface SearchArrayProps {
  products: Product[];
  selectedProduct: Product[];
  setSelectedProduct: (product: Product) => void;
}

export function SearchArray({products, selectedProduct, setSelectedProduct}: SearchArrayProps)   {
  const attributes = attributeMapper(products)
  const emptyProduct = {
    sku: '',
    name: '',
    categoryId: '',
  }
    const [inputValue, setInputValue] = useState(emptyProduct);

  const handleSelect = (attribute: keyof typeof selectedProduct, value: string) => {
    // const product = products.find(p => p[attribute] === value);
    const product = products.filter(p => p[attribute] === value); //will return all that match
    if (product) {
      // setInputValue(product)
      setSelectedProduct(currentProduct => [...currentProduct, ...product] );
    }
    // TODO: Evaluate this setTimeout and replace it
    setTimeout(()=> setInputValue(emptyProduct), 50)
    // setInputValue({})
    // setInputValue(input => emptyProduct)
    // handleChange(attribute, value)
    // clearInput()
    // () => clearInput()
  };

  const handleChange = (attribute: keyof typeof inputValue, value: string) => {
    setInputValue(prevProduct => ({
      ...prevProduct,
      [attribute]: value,
    }));
  };
  const clearInput = () => {
    setInputValue(emptyProduct);
  };
  

  
  // const utils = api.useUtils();
return (
  <div className="container flex flex-row items-center justify-center gap-1 px-4 py-1">
    <button onClick={clearInput}>Clear</button>
    <Search
      attribute='name'
      data={attributes.name}
      value={inputValue}
      onChange={handleChange}
      onOptionSubmit={handleSelect}
      placeholder="name"
    />
    <Search
      attribute='sku'
      data={attributes.sku}
      value={inputValue}
      onChange={handleChange}
      onOptionSubmit={handleSelect}
      placeholder="sku"
    />
    <Search
      attribute='categoryId'
      data={attributes.categoryId}
      value={inputValue}
      onChange={handleChange}
      onOptionSubmit={handleSelect}
      placeholder="Category"
    />
  </div>
);
}