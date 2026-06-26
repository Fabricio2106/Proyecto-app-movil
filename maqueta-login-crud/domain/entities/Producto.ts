export interface Producto {
  id: string;
  nombre: string;
  precio: number;
}

export type ProductoFormData = Omit<Producto, 'id'>;
