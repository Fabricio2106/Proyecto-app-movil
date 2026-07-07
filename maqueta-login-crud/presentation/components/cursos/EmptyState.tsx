import { Text, TouchableOpacity, View } from "react-native";

interface Props {
  onCrear: () => void;
}

export const EmptyState = ({ onCrear }: Props) => {
  return (
    <View className="items-center justify-center mt-16 px-10">
      <Text className="text-6xl mb-4">📭</Text>
      <Text className="text-slate-500 text-base text-center mb-6">
        No hay cursos registrados
      </Text>
      <TouchableOpacity
        onPress={onCrear}
        className="bg-violet-600 px-6 py-3 rounded-2xl"
      >
        <Text className="text-white font-bold">Crear primer curso</Text>
      </TouchableOpacity>
    </View>
  );
};
