import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCursos } from '../presentation/context/CursosContext';
import { useCursoForm } from '../presentation/hooks/useCursoForm';
import { CursoForm } from '../presentation/components/cursos/CursoForm';
import { CursoItem } from '../presentation/components/cursos/CursoItem';

export default function HomeRoute() {
  const { cursos, eliminar } = useCursos();
  const form = useCursoForm();

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <View className="flex-1 px-5 pt-4">

        <View className="flex-row justify-between items-center mb-5">
          <View>
            <Text className="text-xs font-extrabold tracking-widest text-violet-600">ADMIN</Text>
            <Text className="text-2xl font-black text-slate-900">Gestion de Cursos</Text>
          </View>
          <TouchableOpacity
            className="bg-slate-200 px-4 py-2 rounded-xl"
            onPress={() => router.replace('/login')}
          >
            <Text className="text-slate-700 font-bold">Salir</Text>
          </TouchableOpacity>
        </View>

        <CursoForm
          nombre={form.nombre}
          descripcion={form.descripcion}
          editando={form.editandoId !== null}
          onNombreChange={form.setNombre}
          onDescripcionChange={form.setDescripcion}
          onGuardar={form.guardar}
          onCancelar={form.limpiar}
        />

        <FlatList
          data={cursos}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 24, paddingTop: 16 }}
          renderItem={({ item }) => (
            <CursoItem
              curso={item}
              onEditar={() => form.comenzarEdicion(item)}
              onEliminar={() =>
                Alert.alert('Eliminar curso', `Eliminar "${item.nombre}"?`, [
                  { text: 'Cancelar', style: 'cancel' },
                  { text: 'Eliminar', style: 'destructive', onPress: () => eliminar(item.id) },
                ])
              }
            />
          )}
          ListHeaderComponent={
            <Text className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">
              {cursos.length} curso{cursos.length !== 1 ? 's' : ''} registrado{cursos.length !== 1 ? 's' : ''}
            </Text>
          }
          ListEmptyComponent={
            <Text className="mt-8 text-center text-slate-400">
              No hay cursos. Crea el primero.
            </Text>
          }
        />
      </View>
    </SafeAreaView>
  );
}
