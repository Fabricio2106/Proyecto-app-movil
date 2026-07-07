import { router } from "expo-router";
import { useState } from "react";
import { Alert, FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Curso } from "../domain/entities/Curso";
import { CursoCard } from "../presentation/components/cursos/CursoCard";
import { CursoFormModal } from "../presentation/components/cursos/CursoForm";
import { EmptyState } from "../presentation/components/cursos/EmptyState";
import { FloatingButton } from "../presentation/components/cursos/FloatingButton";
import { CursosHeader } from "../presentation/components/cursos/Header";
import { SearchBar } from "../presentation/components/cursos/SearchBar";
import { StatsCard } from "../presentation/components/cursos/StatsCard";
import { useCursos } from "../presentation/context/CursosContext";
import { useCursoForm } from "../presentation/hooks/useCursoForm";

export default function HomeRoute() {
  const { cursos, eliminar } = useCursos();
  const form = useCursoForm();

  const [busqueda, setBusqueda] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const cursosFiltrados = cursos.filter((c) =>
    c.nombre.toLowerCase().includes(busqueda.toLowerCase()),
  );

  const abrirNuevo = () => {
    form.limpiar();
    setModalVisible(true);
  };

  const abrirEditar = (curso: Curso) => {
    form.comenzarEdicion(curso);
    setModalVisible(true);
  };

  const handleGuardar = () => {
    form.guardar();
    setModalVisible(false);
  };

  const handleCancelar = () => {
    form.limpiar();
    setModalVisible(false);
  };

  const confirmarEliminar = (curso: Curso) => {
    Alert.alert("Eliminar curso", `Eliminar "${curso.nombre}"?`, [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Eliminar",
        style: "destructive",
        onPress: () => eliminar(curso.id),
      },
    ]);
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <View className="flex-row justify-end px-5 pt-2">
        <TouchableOpacity
          className="bg-slate-200 px-4 py-2 rounded-xl"
          onPress={() => router.replace("/login")}
        >
          <Text className="text-slate-700 font-bold">Salir</Text>
        </TouchableOpacity>
      </View>

      <CursosHeader />
      <SearchBar value={busqueda} onChangeText={setBusqueda} />
      <StatsCard total={cursos.length} />

      {cursosFiltrados.length === 0 ? (
        <EmptyState onCrear={abrirNuevo} />
      ) : (
        <FlatList
          data={cursosFiltrados}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 120, paddingTop: 16 }}
          renderItem={({ item }) => (
            <CursoCard
              curso={item}
              onEditar={() => abrirEditar(item)}
              onEliminar={() => confirmarEliminar(item)}
            />
          )}
        />
      )}

      {/* Ahora SÍ va al final, después del FlatList */}
      <FloatingButton onPress={abrirNuevo} />

      <CursoFormModal
        visible={modalVisible}
        onClose={handleCancelar}
        nombre={form.nombre}
        setNombre={form.setNombre}
        descripcion={form.descripcion}
        setDescripcion={form.setDescripcion}
        onGuardar={handleGuardar}
        esEdicion={form.editandoId !== null}
      />
    </SafeAreaView>
  );
}
