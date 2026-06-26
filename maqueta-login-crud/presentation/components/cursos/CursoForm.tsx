import { Text, TextInput, TouchableOpacity, View } from 'react-native';

interface CursoFormProps {
  nombre: string;
  descripcion: string;
  editando: boolean;
  onNombreChange: (valor: string) => void;
  onDescripcionChange: (valor: string) => void;
  onGuardar: () => void;
  onCancelar: () => void;
}

export function CursoForm(props: CursoFormProps) {
  return (
    <View className="rounded-2xl bg-white p-4 shadow border border-slate-100">
      <TextInput
        className="mb-3 rounded-xl border border-slate-300 px-4 py-3 text-slate-800"
        placeholder="Nombre del curso"
        placeholderTextColor="#94a3b8"
        value={props.nombre}
        onChangeText={props.onNombreChange}
      />
      <TextInput
        className="mb-3 rounded-xl border border-slate-300 px-4 py-3 text-slate-800"
        placeholder="Descripcion del curso"
        placeholderTextColor="#94a3b8"
        value={props.descripcion}
        onChangeText={props.onDescripcionChange}
        multiline
        numberOfLines={2}
      />
      <TouchableOpacity
        className="items-center rounded-xl bg-violet-600 p-4"
        onPress={props.onGuardar}
      >
        <Text className="font-extrabold text-white">
          {props.editando ? 'Actualizar curso' : 'Crear curso'}
        </Text>
      </TouchableOpacity>
      {props.editando && (
        <TouchableOpacity className="items-center p-3" onPress={props.onCancelar}>
          <Text className="font-bold text-slate-500">Cancelar edicion</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
