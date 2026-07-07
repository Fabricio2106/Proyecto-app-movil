import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

interface FloatingButtonProps {
  onPress: () => void;
  label?: string;
}

export function FloatingButton({
  onPress,
  label = "Nuevo Curso",
}: FloatingButtonProps) {
  return (
    <View className="absolute bottom-6 right-6">
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.9}
        className="flex-row items-center rounded-full bg-violet-600 px-6 py-4 shadow-lg"
      >
        <Ionicons name="add" size={22} color="#fff" />
        <Text className="ml-2 text-base font-bold text-white">{label}</Text>
      </TouchableOpacity>
    </View>
  );
}
