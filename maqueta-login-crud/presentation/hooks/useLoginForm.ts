import { useState } from 'react';
import { router } from 'expo-router';
import { Alert } from 'react-native';

const USUARIOS = [
  { email: 'admin@idat.com', password: 'admin123', rol: 'admin' },
  { email: 'alumno@idat.com', password: 'alumno123', rol: 'alumno' },
];

export const useLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validar = (): boolean => {
    const e: { email?: string; password?: string } = {};

    if (!email.includes('@')) {
      e.email = 'El correo debe contener un @';
    }
    if (password.length < 6) {
      e.password = 'La contraseña debe tener mínimo 6 caracteres';
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleLogin = () => {
    if (!validar()) return;

    const encontrado = USUARIOS.find(
      (u) => u.email === email && u.password === password
    );

    if (encontrado) {
      router.replace(encontrado.rol === 'admin' ? '/home' : '/alumno');
    } else {
      Alert.alert('Error de Acceso', 'El usuario o contraseña son incorrectos.');
    }
  };

  return { email, setEmail, password, setPassword, errors, handleLogin };
};
