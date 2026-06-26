import { createContext, PropsWithChildren, useContext, useReducer } from 'react';
import { Curso, CursoFormData } from '../../domain/entities/Curso';
import { cursosReducer } from '../reducers/cursosReducer';

interface CursosContextValue {
  cursos: Curso[];
  crear: (datos: CursoFormData) => void;
  actualizar: (id: string, datos: CursoFormData) => void;
  eliminar: (id: string) => void;
}

const CursosContext = createContext<CursosContextValue | undefined>(undefined);

const cursosIniciales: Curso[] = [
  { id: '1', nombre: 'Desarrollo de App Movil', descripcion: 'Creacion de aplicaciones moviles con React Native y Expo.' },
  { id: '2', nombre: 'Desarrollo de Interfaces', descripcion: 'Diseno y maquetacion de interfaces de usuario modernas.' },
  { id: '3', nombre: 'Excel Avanzado', descripcion: 'Funciones avanzadas, tablas dinamicas y macros en Excel.' },
];

export function CursosProvider({ children }: PropsWithChildren) {
  const [cursos, dispatch] = useReducer(cursosReducer, cursosIniciales);

  const crear = (datos: CursoFormData) => {
    dispatch({ type: 'CREAR', payload: { ...datos, id: Date.now().toString() } });
  };

  const actualizar = (id: string, datos: CursoFormData) => {
    dispatch({ type: 'ACTUALIZAR', payload: { ...datos, id } });
  };

  const eliminar = (id: string) => {
    dispatch({ type: 'ELIMINAR', payload: id });
  };

  return (
    <CursosContext.Provider value={{ cursos, crear, actualizar, eliminar }}>
      {children}
    </CursosContext.Provider>
  );
}

export function useCursos() {
  const context = useContext(CursosContext);
  if (!context) {
    throw new Error('useCursos debe utilizarse dentro de CursosProvider');
  }
  return context;
}
