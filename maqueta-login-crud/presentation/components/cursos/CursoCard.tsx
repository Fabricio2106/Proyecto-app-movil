import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";
import { Curso } from "../../../domain/entities/Curso";

interface CursoCardProps {
  curso: Curso;
  onEditar: () => void;
  onEliminar: () => void;
}

export function CursoCard({ curso, onEditar, onEliminar }: CursoCardProps) {
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fade, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{ opacity: fade }}
      className="bg-white rounded-3xl p-5 mx-6 mb-4 shadow-md shadow-slate-200 elevation-3"
    >
      <View className="w-14 h-14 rounded-2xl bg-violet-100 items-center justify-center mb-3">
        <Text className="text-2xl">📚</Text>
      </View>

      <Text className="text-lg font-bold text-slate-800">{curso.nombre}</Text>
      <Text className="text-slate-500 text-sm mt-1" numberOfLines={2}>
        {curso.descripcion}
      </Text>

      <View className="flex-row items-center justify-between mt-4">
        <Text className="text-xs text-slate-400">
          ID: {curso.id.slice(0, 6)}
        </Text>
        <View className="flex-row items-center bg-emerald-50 px-2 py-1 rounded-full">
          <View className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1" />
          <Text className="text-emerald-600 text-xs font-semibold">Activo</Text>
        </View>
      </View>

      <View className="flex-row justify-end mt-4 gap-2">
        <TouchableOpacity
          onPress={onEditar}
          className="flex-row items-center bg-blue-50 px-4 py-2 rounded-xl"
        >
          <Ionicons name="create-outline" size={16} color="#3B82F6" />
          <Text className="text-blue-500 font-semibold ml-1">Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onEliminar}
          className="flex-row items-center bg-red-50 px-4 py-2 rounded-xl"
        >
          <Ionicons name="trash-outline" size={16} color="#EF4444" />
          <Text className="text-red-500 font-semibold ml-1">Eliminar</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}
