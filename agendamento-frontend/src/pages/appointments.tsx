import { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns'

interface Appointment {
  id: number;
  name: string;
  date: string;
  time: string;
  location: string;
}

const Appointment = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://localhost:3000/appointments');
        console.log(response.data);
        
        setAppointments(response.data);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError('Erro ao carregar agendamentos');
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  if (loading) return <div>Carregando agendamentos...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Agendamentos</h1>
      {appointments.length === 0 ? (
        <p>Não há agendamentos registrados.</p>
      ) : (
        <ul>
          {appointments.map((appointment) => {
            const formattedDate = format(new Date(appointment.date), 'dd/MM/yyyy'); 
            const formattedTime = format(new Date(appointment.date), 'HH:mm')
            return (
              <li key={appointment.id}>
                <strong>{appointment.name}</strong>
                <p>
                  Data: {formattedDate} <br />
                  Hora: {formattedTime} <br />
                  Local: {appointment.location}
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Appointment;
