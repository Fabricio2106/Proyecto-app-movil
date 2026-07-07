import { UserPlus } from "lucide-react-native";
import { Text, View } from "react-native";
import { GradientIcon } from "../shared/GradientIcon";

export const RegisterHeader = () => {
  return (
    <View className="items-center mb-8 mt-4">
      <View className="w-20 h-20 bg-indigo-100 rounded-full items-center justify-center mb-4">
        <GradientIcon icon={UserPlus} size={36} />
      </View>
      <Text className="text-3xl font-extrabold text-slate-800 text-center mb-2">
        Crear Cuenta
      </Text>
      <Text className="text-slate-500 text-center text-base">
        Únete a nosotros hoy mismo
      </Text>
    </View>
  );
};
