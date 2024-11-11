import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardBody } from '@nextui-org/react';
import { format } from 'date-fns';
import { FaEdit, FaTrash } from 'react-icons/fa';

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
  const [selectedAppointmentId, setSelectedAppointmentId] = useState<number | null>(null);

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

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/appointments/${id}`);
      setAppointments((prev) => prev.filter((appointment) => appointment.id !== id));
    } catch (err) {
      console.error("Erro ao deletar agendamento", err);
    }
  };

  const handleEdit = (id: number) => {
    // Função para iniciar o processo de edição
    console.log(`Editar agendamento com ID ${id}`);
  };

  if (loading) return <div>Carregando agendamentos...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div className="p-6">
      <div className="text-4xl font-semibold mb-4 text-center">
        <h1>Agendamentos</h1>
      </div>

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
                onPress={() => setSelectedAppointmentId(appointment.id)}
                className="max-w-sm appointment-button relative" 
              >
                <CardBody>
                  <div className="overflow-visible p-4 justify-center">
                    <h3 className="text-lg font-semibold">Nome: {appointment.name}</h3>
                    <p className="text-sm">Data: {formattedDate}</p>
                    <p className="text-sm">Hora: {formattedTime}</p>
                    <p className="text-sm">Local: {appointment.location}</p>
                  </div>

                  {selectedAppointmentId === appointment.id && (
                    <div className="absolute top-2 right-2 flex space-x-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEdit(appointment.id);
                        }}
                        className="text-blue-500"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(appointment.id);
                        }}
                        className="text-red-500"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  )}
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
