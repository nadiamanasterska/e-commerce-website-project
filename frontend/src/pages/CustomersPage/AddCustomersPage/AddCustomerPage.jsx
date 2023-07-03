import { MainNav } from "@/components/MainNav";
import { navigationLinks } from "../../../config/navigationLinks";
import { useState, onClick } from "react";
import { UserNav } from "@/components/UserNav";
import AddCustomerForm from "./AddCustomerForm";
import { createCustomers } from "@/services/customers";


export const AddCustomerPage = () => {
  
  const onAddCustomerHandler = async (name, surname, email, phoneNumber) => {
    // console.log(name, surname, email, phoneNumber)
    await createCustomers({ name, surname, email, phoneNumber });
  };

  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" links={navigationLinks} />
          <div className="ml-auto flex items-center space-x-4">
            < UserNav/>
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Add customer</h2>
        </div>
        <div className="hidden h-full flex-1 flex-col space-y-8 md:flex">
          <AddCustomerForm onClick={onAddCustomerHandler}/>
        </div>
      </div>
    </div>
  );
};
