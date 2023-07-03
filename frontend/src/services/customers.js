const API_CUSTOMERS = "http://127.0.0.1:8000/customers";

export const fetchCustomers = () =>
  fetch(API_CUSTOMERS).then((res) => res.json());

export const createCustomers = ({ name, surname, email, phoneNumber }) =>
  fetch(API_CUSTOMERS, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      surname: surname,
      email: email,
      phone_number: phoneNumber,
    }),
  }).then((res) => res.json());

export const deleteCustomer = (id) =>
  fetch(`${API_CUSTOMERS}/${id}`, { method: "DELETE" });
