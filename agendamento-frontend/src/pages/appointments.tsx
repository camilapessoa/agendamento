import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardBody } from '@nextui-org/react';
import { format } from 'date-fns';


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
    <div className="p-6 ">
        <div className="text-4xl font-semibold mb-4 text-center"><h1>Agendamentos</h1></div>
      
      <div className="gap-2 grid grid-cols-4 sm:grid-cols-2">
        {appointments.length === 0 ? (
          <p>Não há agendamentos registrados.</p>
        ) : (
          appointments.map((appointment) => {
            const formattedDate = format(new Date(appointment.date), 'dd/MM/yyyy');
            const formattedTime = format(new Date(appointment.date), 'HH:mm');

            return (
              <Card
                key={appointment.id}
                shadow="sm"
                isPressable
                onPress={() => console.log('item pressed')}
                className="max-w-sm appointment-button" 
              >
                <CardBody>
                  <div className="overflow-visible p-4 justify-center  ">
                    <h3 className="text-lg font-semibold ">Nome: {appointment.name}</h3>
                    <p className="text-sm">Data: {formattedDate}</p>
                    <p className="text-sm">Hora: {formattedTime}</p>
                    <p className="text-sm">Local: {appointment.location}</p>
                  </div>
                </CardBody>
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Appointment;
