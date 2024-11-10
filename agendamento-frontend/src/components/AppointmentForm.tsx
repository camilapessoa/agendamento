import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface AppointmentFormProps {
  onSubmit: (name: string, date: Date | null, location: string) => Promise<void>;
}

export default function AppointmentForm({ onSubmit }: AppointmentFormProps) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState<Date | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await onSubmit(name, date, location);
    setIsSubmitting(false);
    setName('');
    setLocation('');
    setDate(null);
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <h2>Agende o espaço</h2>
      <label>Nome:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        placeholder="Insira seu nome"
      />

      <label>Local:</label>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
        placeholder="Enter the location"
      />

      <label>Data e hora:</label>
      <DatePicker
        selected={date}
        onChange={(selectedDate) => setDate(selectedDate)}
        dateFormat="dd/MM/yyyy h:mm aa"
        showTimeSelect
        placeholderText="Clique para escolher"
        required
      />

      <button type="submit" disabled={isSubmitting} style={{ marginTop: '20px', padding: '10px' }}>
        {isSubmitting ? 'Submitting...' : 'Enviar'}
      </button>
    </form>
  );
}
