import React, { useEffect, useState } from 'react';
import { collection, getDocs, doc, updateDoc, DocumentData } from 'firebase/firestore';
import { db } from '../firebaseConfig';

type Rating = {
  id: string;
  userId: string;
  comment: string;
  score: number;
  approved?: boolean;
};

export default function ModerationPanel() {
  const [ratings, setRatings] = useState<Rating[]>([]);

  useEffect(() => {
    async function fetchRatings() {
      const ratingsCol = collection(db, 'ratings');
      const ratingsSnapshot = await getDocs(ratingsCol);
      const ratingsList = ratingsSnapshot.docs.map(doc => ({ id: doc.id, ...(doc.data() as DocumentData) })) as Rating[];
      setRatings(ratingsList);
    }
    fetchRatings();
  }, []);

  const handleApprove = async (id: string) => {
    const ratingRef = doc(db, 'ratings', id);
    await updateDoc(ratingRef, { approved: true });
    setRatings(ratings.map(r => r.id === id ? { ...r, approved: true } : r));
  };

  const handleReject = async (id: string) => {
    const ratingRef = doc(db, 'ratings', id);
    await updateDoc(ratingRef, { approved: false });
    setRatings(ratings.map(r => r.id === id ? { ...r, approved: false } : r));
  };

  return (
    <div>
      <h2>Moderación de Calificaciones</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Usuario</th>
            <th>Comentario</th>
            <th>Calificación</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {ratings.map(rating => (
            <tr key={rating.id}>
              <td>{rating.id}</td>
              <td>{rating.userId}</td>
              <td>{rating.comment}</td>
              <td>{rating.score}</td>
              <td>{rating.approved === true ? 'Aprobado' : rating.approved === false ? 'Rechazado' : 'Pendiente'}</td>
              <td>
                <button onClick={() => handleApprove(rating.id)}>Aprobar</button>
                <button onClick={() => handleReject(rating.id)}>Rechazar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
