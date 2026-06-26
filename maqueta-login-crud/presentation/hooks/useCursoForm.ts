import { useState } from 'react';
import { Alert } from 'react-native';
import { Curso } from '../../domain/entities/Curso';
import { useCursos } from '../context/CursosContext';

export function useCursoForm() {
  const { crear, actualizar } = useCursos();
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [editandoId, setEditandoId] = useState<string | null>(null);

  const limpiar = () => {
    setNombre('');
    setDescripcion('');
    setEditandoId(null);
  };

  const guardar = () => {
    if (!nombre.trim() || !descripcion.trim()) {
      Alert.alert('Datos incompletos', 'Ingresa un nombre y una descripcion.');
      return;
    }

    const datos = { nombre: nombre.trim(), descripcion: descripcion.trim() };

    if (editandoId) {
      actualizar(editandoId, datos);
    } else {
      crear(datos);
    }

    limpiar();
  };

  const comenzarEdicion = (curso: Curso) => {
    setNombre(curso.nombre);
    setDescripcion(curso.descripcion);
    setEditandoId(curso.id);
  };

  return { nombre, setNombre, descripcion, setDescripcion, editandoId, guardar, limpiar, comenzarEdicion };
}
