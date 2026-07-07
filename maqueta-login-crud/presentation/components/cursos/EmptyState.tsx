import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

interface Props {
  onCrear: () => void;
}

export const EmptyState = ({ onCrear }: Props) => {
  return (
    <View className="items-center justify-center mt-16 px-10">
      <View className="w-20 h-20 rounded-3xl bg-violet-50 items-center justify-center mb-4">
        <Ionicons name="folder-open-outline" size={36} color="#7C3AED" />
      </View>
      <Text className="text-slate-800 text-base font-bold text-center">
        No hay cursos registrados
      </Text>
      <Text className="text-slate-500 text-sm text-center mt-1 mb-6">
        Crea el primer curso para empezar a gestionarlo aquí.
      </Text>
      <TouchableOpacity
        onPress={onCrear}
        className="flex-row items-center bg-violet-600 px-6 py-3 rounded-2xl"
      >
        <Ionicons name="add-circle-outline" size={18} color="#fff" />
        <Text className="text-white font-bold ml-2">Crear primer curso</Text>
      </TouchableOpacity>
    </View>
  );
};
