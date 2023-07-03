const API_PRODUCTS = "http://127.0.0.1:8000/products";

export const fetchProducts = () =>
  fetch(API_PRODUCTS).then((res) => res.json());

export const createProducts = ({ productName, productPrice }) =>
  fetch(API_PRODUCTS, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      product_name: productName,
      product_price: productPrice,
    }),
  }).then((res) => res.json());

export const deleteProduct = (id) =>
  fetch(`${API_PRODUCTS}/${id}`, { method: "DELETE" });
