import AppointmentForm from '../components/AppointmentForm';
import { useAppointments } from '../hooks/useAppointments';

export default function Home() {
  const { addAppointment } = useAppointments();

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <div style={{ width: '50%' }}>
        <AppointmentForm onSubmit={addAppointment} />
      </div>
    </div>
  );
}
