import React from 'react'
import './table.scss'
import { DataGrid } from '@mui/x-data-grid';





const rows = [
  { id: 1, trackingId: "TR12345", product: "Widget", customer: "John Doe", date: "2023-08-10", amount: 150.00, paymentMethod: "Credit Card", status: "Shipped" },
  { id: 2, trackingId: "TR67890", product: "Gizmo", customer: "Jane Smith", date: "2023-08-11", amount: 100.00, paymentMethod: "PayPal", status: "Delivered" },
  { id: 3, trackingId: "TR98765", product: "Thingamajig", customer: "Alice Johnson", date: "2023-08-12", amount: 200.00, paymentMethod: "Bank Transfer", status: "Pending" },
  { id: 4, trackingId: "TR43210", product: "Doodad", customer: "Bob Brown", date: "2023-08-13", amount: 75.00, paymentMethod: "Credit Card", status: "Shipped" },
];

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "trackingId", headerName: "Tracking ID", width: 130 },
  { field: "product", headerName: "Product", width: 150 },
  { field: "customer", headerName: "Customer", width: 150 },
  { field: "date", headerName: "Date", width: 130 },
  { field: "amount", headerName: "Amount", width: 120 },
  { field: "paymentMethod", headerName: "Payment Method", width: 150 },
  { field: "status", headerName: "Status", width: 130, type: 'singleSelect', valueOptions: ['Shipped', 'Delivered', 'Pending'], editable: true },
  {
    field: 'action',
    headerName: 'Action',
    width: 200,
    renderCell: () => {
      return (
        <div className="cellAction">
          <div className="viewButton">View</div>
          <div className="deleteButton">Delete</div>
        </div>
      )
    }
  }
];
const Table = () => {
  return (
    <div className='table'>
       <div className="listTitle"> Lastest Transctions </div>
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  )
}
export default Table
