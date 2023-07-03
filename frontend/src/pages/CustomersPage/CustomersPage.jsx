import { MainNav } from "@/components/MainNav";
import { UserNav } from "./components/UserNav";
import { navigationLinks } from "../../config/navigationLinks";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { deleteCustomer, fetchCustomers } from "@/services/customers";
import { AddCustomerPage } from "./AddCustomersPage/AddCustomerPage";
import CustomersList from "./CustomersList";

export const CustomersPage = () => {

  const [customers, setCustomers] = useState([])

  const onCustomerDeleteHandler = async (id) => {
    await deleteCustomer(id);
    fetchCustomers().then(setCustomers);

    toast({
      title: "Customer deleted.",
      description: "We've deleted a customer for you.",
      status: "success",
      duration: 3000,
      position: "top-right",
    });
  };

  useEffect(() => {
    fetchCustomers().then(setCustomers);
  }, []);

  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" links={navigationLinks} />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
        </div>
        <div className="hidden h-full flex-1 flex-col space-y-8 md:flex">
          <CustomersList 
            customers={customers}
            onCustomerDeleteHandler={onCustomerDeleteHandler}
          />
        </div>
      </div>
    </div>
  );
};
