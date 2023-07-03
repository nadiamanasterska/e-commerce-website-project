import { DataTable } from "./components/DataTable";
import { Columns } from "./components/Columns";
import { useState, useEffect } from "react";


const CustomersList = ({ customers, onCustomerDeleteHandler }) => {

  const [data, setData] = useState(customers); 

  useEffect(() => {
    setData(customers);
  }, [customers]);

  console.log(data)

  return (  
    <DataTable
      data={data}
      columns={Columns}
      
    />
    
  );
  
}
 
export default CustomersList;