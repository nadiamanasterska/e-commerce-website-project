import { MainNav } from "@/components/MainNav";
import { UserNav } from "@/components/UserNav";
import { navigationLinks } from "@/config/navigationLinks";
import AddOrderForm from "./AddOrderForm";
import { useState, useEffect } from "react";
import { createOrders, deleteOrder, fetchOrders } from "@/services/orders";
import OrdersList from "./OrdersList";


const OrdersPage = () => {

  const [orders, setOrders] = useState([])
  
  const onAddOrderHandler = async (orderNumber, orderCustomer) => {
    await createOrders({ orderNumber, orderCustomer });
  };

  useEffect(() => {
    fetchOrders().then(setOrders);
  }, [orders]);

  const onOrderDeleteHandler = async (id) => {
    await deleteOrder(id);
    fetchOrders().then(setOrders);
  };

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
          <h2 className="text-3xl font-bold tracking-tight">Orders</h2>
        </div>
        <div className="hidden h-full flex-1 flex-col space-y-8 md:flex">
          <AddOrderForm onClick={onAddOrderHandler}/>
          <OrdersList orders={orders} onOrderDeleteHandler={onOrderDeleteHandler} />
        </div>
      </div>
    </div>
  );
};
export default OrdersPage;