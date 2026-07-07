import { router } from "expo-router";
import { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AlumnoCursoCard } from "../presentation/components/alumno/AlumnoCursoCard";
import { AlumnoEmptyState } from "../presentation/components/alumno/AlumnoEmptyState";
import { AlumnoHeader } from "../presentation/components/alumno/AlumnoHeader";
import { SearchBar } from "../presentation/components/cursos/SearchBar";
import { StatsCard } from "../presentation/components/cursos/StatsCard";
import { useCursos } from "../presentation/context/CursosContext";

export default function AlumnoRoute() {
  const { cursos } = useCursos();
  const [busqueda, setBusqueda] = useState("");

  const cursosFiltrados = cursos.filter((c) =>
    c.nombre.toLowerCase().includes(busqueda.toLowerCase()),
  );

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

      <AlumnoHeader />
      <SearchBar value={busqueda} onChangeText={setBusqueda} />
      <StatsCard
        total={cursos.length}
        label="Cursos disponibles"
        icon="book-outline"
      />

      {cursosFiltrados.length === 0 ? (
        <AlumnoEmptyState />
      ) : (
        <FlatList
          data={cursosFiltrados}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 32, paddingTop: 16 }}
          renderItem={({ item }) => (
            <AlumnoCursoCard
              curso={item}
              onPress={() => router.push(`/curso/${item.id}`)}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
}
