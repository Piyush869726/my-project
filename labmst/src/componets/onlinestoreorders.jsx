import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [orders, setOrders] = useState([
    { id: "101", product: "Laptop", status: "Pending" },
    { id: "102", product: "Phone", status: "Shipped" },
  ]);

  const [newOrder, setNewOrder] = useState({
    id: "",
    product: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewOrder((prev) => ({ ...prev, [name]: value }));
  };

  const addOrder = (e) => {
    e.preventDefault();
    if (!newOrder.id || !newOrder.product || !newOrder.status) {
      alert("Please fill out all fields!");
      return;
    }
    setOrders((prev) => [...prev, newOrder]);
    setNewOrder({ id: "", product: "", status: "" });
  };

  return (
    <div className="container">
      <h1>Online Store Orders</h1>

      
      <form className="order-form" onSubmit={addOrder}>
        <h2>Add New Order</h2>
        <input
          type="text"
          name="id"
          placeholder="Order ID"
          value={newOrder.id}
          onChange={handleChange}
        />
        <input
          type="text"
          name="product"
          placeholder="Product Name"
          value={newOrder.product}
          onChange={handleChange}
        />
        <select name="status" value={newOrder.status} onChange={handleChange}>
          <option value="">Select Status</option>
          <option value="Pending">Pending</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
        </select>
        <button type="submit">Add Order</button>
      </form>

      
      <div className="orders-table">
        <h2>Current Orders</h2>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.id}</td>
                <td>{order.product}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
