import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import emailjs from 'emailjs-com';

const ReservationForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<Date | null>(null);
  const [guests, setGuests] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Dados a serem enviados por e-mail
    const formData = {
      name,
      email,
      date: date?.toLocaleDateString(),
      time: time?.toLocaleTimeString(),
      guests,
    };

    // Envio do e-mail com EmailJS
    emailjs
      .send(
        'YOUR_SERVICE_ID', // Substitua pelo seu Service ID
        'YOUR_TEMPLATE_ID', // Substitua pelo seu Template ID
        formData,
        'YOUR_USER_ID' // Substitua pelo seu User ID
      )
      .then(
        (result) => {
          console.log('E-mail enviado com sucesso:', result.text);
          alert('Reserva enviada com sucesso!');
        },
        (error: any) => {
          console.error('Erro ao enviar e-mail:', error.text);
          alert('Erro ao enviar a reserva. Tente novamente.');
        }
      );

    // Resetar os campos do formulário
    setName('');
    setEmail('');
    setDate(null);
    setTime(null);
    setGuests('');
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Faça sua reserva
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Nome"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Data"
            value={date}
            onChange={(newValue) => setDate(newValue)}
            slotProps={{
              textField: { fullWidth: true, margin: 'normal', required: true },
            }}
          />
          <TimePicker
            label="Hora"
            value={time}
            onChange={(newValue) => setTime(newValue)}
            slotProps={{
              textField: { fullWidth: true, margin: 'normal', required: true },
            }}
          />
        </LocalizationProvider>
        <TextField
          margin="normal"
          required
          fullWidth
          id="guests"
          label="Número de convidados"
          name="guests"
          type="number"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Reservar
        </Button>
      </Box>
    </Container>
  );
};

export default ReservationForm;
