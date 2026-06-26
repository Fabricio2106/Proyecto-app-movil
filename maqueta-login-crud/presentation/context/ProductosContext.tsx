import { createContext, PropsWithChildren, useContext, useReducer } from 'react';
import { Producto, ProductoFormData } from '../../domain/entities/Producto';
import { productosReducer } from '../reducers/productosReducer';

interface ProductosContextValue {
  productos: Producto[];
  crear: (datos: ProductoFormData) => void;
  actualizar: (id: string, datos: ProductoFormData) => void;
  eliminar: (id: string) => void;
}

const ProductosContext = createContext<ProductosContextValue | undefined>(undefined);

export function ProductosProvider({ children }: PropsWithChildren) {
  const [productos, dispatch] = useReducer(productosReducer, []);

  const crear = (datos: ProductoFormData) => {
    dispatch({ type: 'CREAR', payload: { ...datos, id: Date.now().toString() } });
  };

  const actualizar = (id: string, datos: ProductoFormData) => {
    dispatch({ type: 'ACTUALIZAR', payload: { ...datos, id } });
  };

  const eliminar = (id: string) => {
    dispatch({ type: 'ELIMINAR', payload: id });
  };

  return (
    <ProductosContext.Provider value={{ productos, crear, actualizar, eliminar }}>
      {children}
    </ProductosContext.Provider>
  );
}

export function useProductos() {
  const context = useContext(ProductosContext);
  if (!context) {
    throw new Error('useProductos debe utilizarse dentro de ProductosProvider');
  }
  return context;
}
