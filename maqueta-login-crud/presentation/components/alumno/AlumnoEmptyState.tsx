import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export const AlumnoEmptyState = () => {
  return (
    <View className="items-center justify-center mt-16 px-10">
      <View className="w-20 h-20 rounded-3xl bg-violet-50 items-center justify-center mb-4">
        <Ionicons name="folder-open-outline" size={36} color="#7C3AED" />
      </View>
      <Text className="text-slate-800 text-base font-bold text-center">
        No hay cursos disponibles
      </Text>
      <Text className="text-slate-500 text-sm text-center mt-1">
        El administrador aún no ha agregado cursos.
      </Text>
    </View>
  );
};
