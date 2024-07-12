import { useState } from "react";
import { AgGridReact } from 'ag-grid-react'; 
import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-quartz.css"; 
import { TableFields } from "../types/types";

export function ProductGrid({products, rowData}) {
    const [colDefs, setColDefs] = useState(TableFields.map(colDef => ({
        ...colDef,
        width: 150
    })));

      return (
        <div
         className="ag-theme-quartz" 
         style={{ height: 400}}
        >
          <AgGridReact
              rowData={rowData}
              columnDefs={colDefs}
          />
        </div>
       )

} 