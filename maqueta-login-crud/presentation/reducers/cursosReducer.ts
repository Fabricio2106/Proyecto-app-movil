import { Curso } from '../../domain/entities/Curso';

export type CursoAction =
  | { type: 'CREAR'; payload: Curso }
  | { type: 'ACTUALIZAR'; payload: Curso }
  | { type: 'ELIMINAR'; payload: string };

export function cursosReducer(state: Curso[], action: CursoAction): Curso[] {
  switch (action.type) {
    case 'CREAR':
      return [...state, action.payload];
    case 'ACTUALIZAR':
      return state.map((c) => (c.id === action.payload.id ? action.payload : c));
    case 'ELIMINAR':
      return state.filter((c) => c.id !== action.payload);
    default:
      return state;
  }
}
