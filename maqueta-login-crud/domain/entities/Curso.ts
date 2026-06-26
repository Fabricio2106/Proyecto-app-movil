export interface Curso {
  id: string;
  nombre: string;
  descripcion: string;
}

export type CursoFormData = Omit<Curso, 'id'>;
