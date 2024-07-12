"use client";

import { SearchArray } from "./searchArray";
import { api } from "~/trpc/react";

import { useEffect, useState } from "react";
import { ProductGrid } from "./productGrid";

export function ProductPricingProfile() {   
    const [products, productsQuery] = api.product.getAll.useSuspenseQuery({limit: 2});
    const [amendedProduct, amendedProductQuery] = api.amendedProduct.getOne.useSuspenseQuery();
    // amendedProduct endpoint is created, just need to combine it with Product and display in the grid.
    console.log('amendedProduct: ', amendedProduct);
    const [rowData, setRowData] = useState([])
    const { isFetching} =productsQuery;
    const [selectedProduct, setSelectedProduct] = useState([]);
    // TODO: Update the input so that items that have already been added can't be added again

    useEffect(() => {
        if (selectedProduct) {
            setRowData(selectedProduct);
        }
    }, [selectedProduct]);
    
    if (productsQuery.error) {
        return <div>Error fetching products.</div>;
    }
    
    if (isFetching) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <div className="container flex flex-col items-center justify-center gap-1 px-4 py-1">
            <SearchArray products={products} 
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}/>
            </div>
            <ProductGrid
            products={selectedProduct}
            rowData={rowData}
            />
        </div>
    );
  }

