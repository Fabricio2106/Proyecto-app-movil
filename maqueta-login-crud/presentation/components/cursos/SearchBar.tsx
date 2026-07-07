import { Ionicons } from "@expo/vector-icons";
import { TextInput, View } from "react-native";

interface Props {
  value: string;
  onChangeText: (text: string) => void;
}

export const SearchBar = ({ value, onChangeText }: Props) => {
  return (
    <View className="flex-row items-center bg-white rounded-full px-4 py-3 mx-6 mt-4 shadow-sm shadow-slate-200 elevation-2">
      <Ionicons name="search" size={20} color="#64748B" />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Buscar curso..."
        placeholderTextColor="#94A3B8"
        className="flex-1 ml-3 text-slate-800 text-base"
      />
    </View>
  );
};
