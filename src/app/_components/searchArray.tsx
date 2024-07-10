"use client";

import { Autocomplete } from "@mantine/core";
import { useState } from "react";

import { api } from "~/trpc/react";
import { Search } from "./search";

export function SearchArray() {
//   const [product, productQuery] = api.product.getLatest.useSuspenseQuery();
  const [products, productsQuery] = api.product.getAll.useSuspenseQuery();
//   const [products, productsQuery] = api.product.getAll({limit: 10}).useSuspenseQuery;
const productSkus = products.map(product => product.sku);
console.log('productSkus: ', productSkus);
// const productIds = products.map(product => product.id);
// const productNames = products.map(product => product.name);
  
  console.log('products: ', products);
  const { isFetching, isFetchingNextPage, fetchNextPage, hasNextPage } =
  productsQuery;
//   const [latestPost] = api.product.getLatest.useSuspenseQuery();
//   console.log('latestPost: ', latestPost);

  const utils = api.useUtils();
//   const [name, setName] = useState("");
//   const createPost = api.post.create.useMutation({
//     onSuccess: async () => {
//       await utils.post.invalidate();
//       setName("");
//     },
//   });

  return (
    <Autocomplete data={productSkus}/>
    // <Search />
  );
}
