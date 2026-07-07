import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";

interface Props {
  visible: boolean;
  onClose: () => void;
  nombre: string;
  setNombre: (v: string) => void;
  descripcion: string;
  setDescripcion: (v: string) => void;
  errors?: { nombre?: string; descripcion?: string };
  onGuardar: () => void;
  esEdicion?: boolean;
}

export const CursoFormModal = ({
  visible,
  onClose,
  nombre,
  setNombre,
  descripcion,
  setDescripcion,
  errors,
  onGuardar,
  esEdicion,
}: Props) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <View className="flex-1 bg-black/40 justify-end">
        <View className="bg-white rounded-t-3xl p-6">
          <Text className="text-xl font-extrabold text-slate-800 mb-4">
            {esEdicion ? "Editar Curso" : "Nuevo Curso"}
          </Text>

          <Text className="text-slate-600 mb-1 font-medium">Nombre</Text>
          <TextInput
            value={nombre}
            onChangeText={setNombre}
            placeholder="Ej. Desarrollo App Móvil"
            className="bg-slate-100 rounded-2xl px-4 py-3 text-slate-800 mb-1"
          />
          {errors?.nombre && (
            <Text className="text-red-500 text-xs mb-2">{errors.nombre}</Text>
          )}

          <Text className="text-slate-600 mb-1 font-medium mt-3">
            Descripción
          </Text>
          <TextInput
            value={descripcion}
            onChangeText={setDescripcion}
            placeholder="Describe brevemente el curso"
            multiline
            numberOfLines={3}
            className="bg-slate-100 rounded-2xl px-4 py-3 text-slate-800 mb-1"
          />
          {errors?.descripcion && (
            <Text className="text-red-500 text-xs mb-2">
              {errors.descripcion}
            </Text>
          )}

          <View className="flex-row gap-3 mt-5">
            <TouchableOpacity
              onPress={onClose}
              className="flex-1 py-3 rounded-2xl bg-slate-100 items-center"
            >
              <Text className="text-slate-600 font-semibold">Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onGuardar}
              className="flex-1 py-3 rounded-2xl bg-violet-600 items-center"
            >
              <Text className="text-white font-semibold">Guardar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
