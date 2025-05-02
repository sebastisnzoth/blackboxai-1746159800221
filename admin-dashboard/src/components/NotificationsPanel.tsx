import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export default function NotificationsPanel() {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSendNotification = async () => {
    if (!message.trim()) {
      setStatus('El mensaje no puede estar vacío.');
      return;
    }
    try {
      await addDoc(collection(db, 'notifications'), {
        message,
        timestamp: new Date(),
      });
      setStatus('Notificación enviada.');
      setMessage('');
    } catch (error) {
      setStatus('Error al enviar la notificación.');
    }
  };

  return (
    <div>
      <h2>Enviar Notificación</h2>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
        cols={50}
        placeholder="Escribe el mensaje de la notificación"
      />
      <br />
      <button onClick={handleSendNotification}>Enviar</button>
      <p>{status}</p>
    </div>
  );
}
