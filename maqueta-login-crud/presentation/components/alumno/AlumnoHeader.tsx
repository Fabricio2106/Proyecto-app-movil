import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export const AlumnoHeader = () => {
  return (
    <View className="flex-row items-start justify-between px-6 pt-6 pb-2">
      <View>
        <Text className="text-3xl font-extrabold text-slate-800">
          Mis Cursos
        </Text>
        <Text className="text-slate-500 text-base mt-1">
          Explora los cursos disponibles para ti
        </Text>
      </View>
      <View className="w-11 h-11 rounded-full bg-violet-100 items-center justify-center">
        <Ionicons name="school-outline" size={22} color="#7C3AED" />
      </View>
    </View>
  );
};
