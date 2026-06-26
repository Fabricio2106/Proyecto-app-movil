import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCursos } from '../presentation/context/CursosContext';

export default function AlumnoRoute() {
  const { cursos } = useCursos();

  return (
    <SafeAreaView className="flex-1 bg-slate-900">

      <View className="px-5 pt-4 pb-5">
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-xs font-extrabold tracking-widest text-emerald-400 uppercase">
              Panel Alumno
            </Text>
            <Text className="text-2xl font-black text-white mt-1">Mis Cursos</Text>
          </View>
          <TouchableOpacity
            className="bg-slate-700 px-4 py-2 rounded-xl border border-slate-600"
            onPress={() => router.replace('/login')}
          >
            <Text className="text-slate-300 font-bold text-sm">Salir</Text>
          </TouchableOpacity>
        </View>

        <View className="mt-4 bg-emerald-900 border border-emerald-700 rounded-2xl px-4 py-3">
          <Text className="text-emerald-300 text-sm">
            Toca un curso para ver su descripcion detallada.
          </Text>
        </View>
      </View>

      <FlatList
        data={cursos}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 32 }}
        ListHeaderComponent={
          <Text className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">
            {cursos.length} curso{cursos.length !== 1 ? 's' : ''} disponible{cursos.length !== 1 ? 's' : ''}
          </Text>
        }
        renderItem={({ item, index }) => (
          <TouchableOpacity
            className="mb-3 bg-slate-800 rounded-2xl p-4 border border-slate-700 active:bg-slate-700"
            onPress={() => router.push(`/curso/${item.id}`)}
          >
            <View className="flex-row items-center">
              <View className="w-8 h-8 rounded-lg bg-emerald-800 items-center justify-center mr-3">
                <Text className="text-emerald-400 text-xs font-black">{index + 1}</Text>
              </View>
              <View className="flex-1">
                <Text className="text-white font-bold text-base">{item.nombre}</Text>
                <Text className="text-slate-500 text-xs mt-0.5" numberOfLines={1}>
                  {item.descripcion}
                </Text>
              </View>
              <View className="ml-3">
                <Text className="text-slate-500 text-lg">›</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <View className="items-center mt-16">
            <Text className="text-slate-500 text-center text-base">
              No hay cursos disponibles aun.
            </Text>
            <Text className="text-slate-600 text-center text-sm mt-1">
              El administrador debe agregar cursos primero.
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}
