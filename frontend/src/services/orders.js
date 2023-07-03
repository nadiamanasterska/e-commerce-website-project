const API_ORDERS = "http://127.0.0.1:8000/orders";

export const fetchOrders = () => fetch(API_ORDERS).then((res) => res.json());

export const createOrders = ({ orderNumber, orderCustomer }) =>
  fetch(API_ORDERS, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      order_number: orderNumber,
      order_customer: orderCustomer,
    }),
  }).then((res) => res.json());

export const deleteOrder = (id) =>
  fetch(`${API_ORDERS}/${id}`, { method: "DELETE" });
