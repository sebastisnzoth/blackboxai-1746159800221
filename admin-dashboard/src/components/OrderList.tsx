import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

interface Order {
  id: string;
  clientId: string;
  providerId: string;
  serviceName: string;
  status: string;
}

export default function OrderList() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    async function fetchOrders() {
      const ordersCol = collection(db, 'requests');
      const ordersSnapshot = await getDocs(ordersCol);
      const ordersList = ordersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Order));
      setOrders(ordersList);
    }
    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Pedidos de Servicios</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Proveedor</th>
            <th>Servicio</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.clientId}</td>
              <td>{order.providerId}</td>
              <td>{order.serviceName}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
