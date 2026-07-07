import { Text, View } from "react-native";

interface Props {
  total: number;
}

export const StatsCard = ({ total }: Props) => {
  return (
    <View className="bg-violet-600 mx-6 mt-5 rounded-3xl p-5 flex-row items-center justify-between">
      <View>
        <Text className="text-violet-100 text-sm">Cursos registrados</Text>
        <Text className="text-white text-3xl font-extrabold mt-1">{total}</Text>
      </View>
      <View className="w-14 h-14 rounded-2xl bg-violet-500/40 items-center justify-center">
        <Text className="text-2xl">📚</Text>
      </View>
    </View>
  );
};
