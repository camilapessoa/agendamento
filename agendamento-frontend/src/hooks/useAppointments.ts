/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { createAppointment } from '../utils/api';

interface Appointment {
  name: string;
  date: Date;
  location: string;
}

export function useAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const addAppointment = async (name: string, date: Date | null, location: string) => {
    if (!date) return;
    try {
      const newAppointment = await createAppointment(name, date, location);
      setAppointments((prev) => [...prev, newAppointment]);
      alert('Appointment created successfully!');
    } catch (error) {
      alert('Failed to create appointment');
    }
  };

  return { appointments, addAppointment };
}
