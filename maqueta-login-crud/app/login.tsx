import { router } from "expo-router";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CustomTextInput } from "../presentation/components/shared/CustomTextInput";
import { useLoginForm } from "../presentation/hooks/useLoginForm";

export default function LoginRoute() {
  const { email, setEmail, password, setPassword, errors, handleLogin } =
    useLoginForm();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-blue-600"
    >
      <ScrollView contentContainerClassName="flex-grow">
        {/* Header azul */}
        <View className="items-center pt-20 pb-12 px-6">
          <View className="w-20 h-20 rounded-2xl bg-white items-center justify-center mb-6">
            <Image
              source={require("../assets/images/logo-idat.png")}
              className="w-20 h-20"
              resizeMode="contain"
            />
          </View>
          <Text className="text-4xl font-black text-white tracking-tight">
            Bienvenido
          </Text>
          <Text className="text-blue-200 mt-2 text-base text-center">
            Inicia sesion para acceder al panel
          </Text>
        </View>

        {/* Card blanca */}
        <View className="flex-1 bg-white rounded-t-[36px] px-6 pt-8 pb-12">
          <View className="flex-row justify-center mb-8">
            <View className="bg-blue-50 border border-blue-100 rounded-full px-4 py-1">
              <Text className="text-blue-500 text-xs font-semibold tracking-widest uppercase">
                Acceso seguro
              </Text>
            </View>
          </View>

          <CustomTextInput
            label="Correo electronico"
            placeholder="correo@idat.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            error={errors.email}
          />

          <CustomTextInput
            label="Contrasena"
            placeholder="••••••••"
            value={password}
            onChangeText={setPassword}
            isPassword={true}
            error={errors.password}
          />

          <TouchableOpacity
            className="bg-blue-600 rounded-2xl h-14 mt-4 items-center justify-center active:bg-blue-700"
            onPress={handleLogin}
          >
            <Text className="text-white font-bold text-lg tracking-wide">
              Ingresar
            </Text>
          </TouchableOpacity>

          <View className="flex-row items-center my-6">
            <View className="flex-1 h-px bg-slate-200" />
            <Text className="text-slate-400 mx-4 text-sm">o</Text>
            <View className="flex-1 h-px bg-slate-200" />
          </View>

          <View className="bg-blue-50 border border-blue-100 rounded-2xl p-4 mb-6">
            <Text className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">
              Usuarios de prueba
            </Text>
            <View className="flex-row justify-between mb-2">
              <Text className="text-slate-600 text-sm">admin@idat.com</Text>
              <Text className="text-blue-600 text-sm font-bold">admin123</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-slate-600 text-sm">alumno@idat.com</Text>
              <Text className="text-blue-600 text-sm font-bold">alumno123</Text>
            </View>
          </View>

          <TouchableOpacity
            className="p-2"
            onPress={() => router.push("/registro")}
          >
            <Text className="text-center text-slate-400 text-base">
              No tienes cuenta?{" "}
              <Text className="text-blue-600 font-bold">Registrate</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
