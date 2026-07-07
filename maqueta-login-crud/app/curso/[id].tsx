import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCursos } from "../../presentation/context/CursosContext";

export default function CursoDetalleRoute() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { cursos } = useCursos();

  const curso = cursos.find((c) => c.id === id);

  if (!curso) {
    return (
      <SafeAreaView className="flex-1 bg-slate-50 items-center justify-center px-6">
        <Text className="text-slate-800 text-lg font-bold text-center">
          Curso no encontrado.
        </Text>
        <TouchableOpacity
          className="mt-6 bg-violet-600 px-6 py-3 rounded-2xl"
          onPress={() => router.back()}
        >
          <Text className="text-white font-bold">Volver</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 48 }}>
        <TouchableOpacity
          className="flex-row items-center self-start mb-6 bg-slate-200 rounded-xl px-4 py-2"
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={16} color="#334155" />
          <Text className="text-slate-700 font-bold text-sm ml-1">Volver</Text>
        </TouchableOpacity>

        <View className="flex-row items-start mb-6">
          <View className="w-14 h-14 rounded-2xl bg-violet-100 items-center justify-center mr-4">
            <Ionicons name="book-outline" size={26} color="#7C3AED" />
          </View>
          <View className="flex-1">
            <Text className="text-xs font-extrabold tracking-widest text-violet-600 uppercase">
              Detalle del curso
            </Text>
            <Text className="text-2xl font-black text-slate-800 mt-1 leading-tight">
              {curso.nombre}
            </Text>
          </View>
        </View>

        <View className="bg-white rounded-3xl p-5 mb-4 shadow-md shadow-slate-200 elevation-3">
          <Text className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">
            Descripción
          </Text>
          <Text className="text-slate-700 text-base leading-relaxed">
            {curso.descripcion}
          </Text>
        </View>

        <View className="bg-white rounded-3xl p-5 shadow-md shadow-slate-200 elevation-3">
          <Text className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">
            Información del curso
          </Text>
          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center">
              <Ionicons name="pricetag-outline" size={14} color="#94A3B8" />
              <Text className="text-slate-500 text-sm ml-1.5">Código</Text>
            </View>
            <Text className="text-slate-800 font-bold text-sm">
              #{curso.id.slice(0, 6)}
            </Text>
          </View>
          <View className="h-px bg-slate-100 my-3" />
          <View className="flex-row justify-between items-center">
            <Text className="text-slate-500 text-sm">Estado</Text>
            <View className="flex-row items-center bg-emerald-50 px-2 py-1 rounded-full">
              <View className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1" />
              <Text className="text-emerald-600 text-xs font-semibold">
                Disponible
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
