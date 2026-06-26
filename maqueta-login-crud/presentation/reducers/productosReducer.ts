import { Producto } from '../../domain/entities/Producto';

export type ProductoAction =
  | { type: 'CREAR'; payload: Producto }
  | { type: 'ACTUALIZAR'; payload: Producto }
  | { type: 'ELIMINAR'; payload: string };

export function productosReducer(state: Producto[], action: ProductoAction): Producto[] {
  switch (action.type) {
    case 'CREAR':
      return [...state, action.payload];

    case 'ACTUALIZAR':
      return state.map((p) => (p.id === action.payload.id ? action.payload : p));

    case 'ELIMINAR':
      return state.filter((p) => p.id !== action.payload);

    default:
      return state;
  }
}
