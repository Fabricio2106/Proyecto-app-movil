import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCursos } from '../../presentation/context/CursosContext';

export default function CursoDetalleRoute() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { cursos } = useCursos();

  const curso = cursos.find((c) => c.id === id);

  if (!curso) {
    return (
      <SafeAreaView className="flex-1 bg-slate-900 items-center justify-center px-6">
        <Text className="text-white text-lg font-bold text-center">
          Curso no encontrado.
        </Text>
        <TouchableOpacity
          className="mt-6 bg-emerald-700 px-6 py-3 rounded-xl"
          onPress={() => router.back()}
        >
          <Text className="text-white font-bold">Volver</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-slate-900">
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 48 }}>

        {/* Boton volver */}
        <TouchableOpacity
          className="flex-row items-center mb-6"
          onPress={() => router.back()}
        >
          <View className="bg-slate-700 rounded-xl px-4 py-2">
            <Text className="text-slate-300 font-bold text-sm">Volver</Text>
          </View>
        </TouchableOpacity>

        {/* Etiqueta */}
        <Text className="text-xs font-extrabold tracking-widest text-emerald-400 uppercase mb-2">
          Detalle del curso
        </Text>

        {/* Nombre */}
        <Text className="text-3xl font-black text-white mb-6 leading-tight">
          {curso.nombre}
        </Text>

        {/* Card de descripcion */}
        <View className="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-4">
          <Text className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3">
            Descripcion
          </Text>
          <Text className="text-slate-300 text-base leading-relaxed">
            {curso.descripcion}
          </Text>
        </View>

        {/* Card de codigo */}
        <View className="bg-slate-800 border border-slate-700 rounded-2xl p-5">
          <Text className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3">
            Informacion del curso
          </Text>
          <View className="flex-row justify-between items-center">
            <Text className="text-slate-400 text-sm">Codigo</Text>
            <Text className="text-white font-bold text-sm">#{curso.id}</Text>
          </View>
          <View className="h-px bg-slate-700 my-3" />
          <View className="flex-row justify-between items-center">
            <Text className="text-slate-400 text-sm">Estado</Text>
            <View className="bg-emerald-900 border border-emerald-700 rounded-full px-3 py-1">
              <Text className="text-emerald-400 text-xs font-bold">Disponible</Text>
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
