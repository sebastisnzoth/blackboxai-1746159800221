import React, { useEffect, useState } from 'react';
import { collection, getCountFromServer } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export default function Statistics() {
  const [userCount, setUserCount] = useState(0);
  const [serviceCount, setServiceCount] = useState(0);
  const [requestCount, setRequestCount] = useState(0);

  useEffect(() => {
    async function fetchCounts() {
      const usersSnapshot = await getCountFromServer(collection(db, 'users'));
      setUserCount(usersSnapshot.data().count);

      const servicesSnapshot = await getCountFromServer(collection(db, 'services'));
      setServiceCount(servicesSnapshot.data().count);

      const requestsSnapshot = await getCountFromServer(collection(db, 'requests'));
      setRequestCount(requestsSnapshot.data().count);
    }
    fetchCounts();
  }, []);

  return (
    <div>
      <h2>Estadísticas de Uso</h2>
      <ul>
        <li>Usuarios registrados: {userCount}</li>
        <li>Servicios disponibles: {serviceCount}</li>
        <li>Pedidos realizados: {requestCount}</li>
      </ul>
    </div>
  );
}
