import { useState } from "react";
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { TableFields } from "../types/types";

export function ProductGrid({products, rowData}) {
    console.log('products: ', products);
    const [colDefs, setColDefs] = useState(TableFields.map(colDef => ({
        ...colDef,
        width: 150
    })));

      return (
        // wrapping container with theme & size
        <div
         className="ag-theme-quartz" // applying the Data Grid theme
         style={{ height: 400}} // the Data Grid will fill the size of the parent container
        >
          <AgGridReact
              rowData={rowData}
              columnDefs={colDefs}
          />
        </div>
       )

} 