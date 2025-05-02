import React from 'react';
import UserList from './components/UserList';
import OrderList from './components/OrderList';
import Statistics from './components/Statistics';
import NotificationsPanel from './components/NotificationsPanel';
import ModerationPanel from './components/ModerationPanel';

export default function App() {
  return (
    <div>
      <h1>U.G.O. Admin Dashboard</h1>
      <Statistics />
      <UserList />
      <OrderList />
      <NotificationsPanel />
      <ModerationPanel />
    </div>
  );
}
