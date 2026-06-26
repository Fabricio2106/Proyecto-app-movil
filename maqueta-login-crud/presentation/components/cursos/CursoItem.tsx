import { Text, TouchableOpacity, View } from 'react-native';
import { Curso } from '../../../domain/entities/Curso';

interface CursoItemProps {
  curso: Curso;
  onEditar: () => void;
  onEliminar: () => void;
}

export function CursoItem({ curso, onEditar, onEliminar }: CursoItemProps) {
  return (
    <View className="mb-3 rounded-2xl bg-white p-4 border border-slate-100">
      <View className="flex-row items-start">
        <View className="flex-1 mr-3">
          <Text className="text-base font-extrabold text-slate-800">{curso.nombre}</Text>
          <Text className="mt-1 text-sm text-slate-500">{curso.descripcion}</Text>
        </View>
        <View className="flex-row gap-2">
          <TouchableOpacity className="rounded-lg bg-amber-100 px-3 py-2" onPress={onEditar}>
            <Text className="text-amber-700 font-bold text-sm">Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity className="rounded-lg bg-rose-100 px-3 py-2" onPress={onEliminar}>
            <Text className="text-rose-700 font-bold text-sm">Eliminar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
