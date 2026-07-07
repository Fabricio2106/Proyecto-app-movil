import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";
import { Curso } from "../../../domain/entities/Curso";

interface AlumnoCursoCardProps {
  curso: Curso;
  onPress: () => void;
}

export function AlumnoCursoCard({ curso, onPress }: AlumnoCursoCardProps) {
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fade, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={{ opacity: fade }}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.85}
        className="bg-white rounded-3xl p-5 mx-6 mb-4 shadow-md shadow-slate-200 elevation-3"
      >
        <View className="flex-row items-start">
          <View className="w-12 h-12 rounded-2xl bg-violet-100 items-center justify-center mr-3">
            <Ionicons name="book-outline" size={22} color="#7C3AED" />
          </View>
          <View className="flex-1">
            <Text className="text-lg font-bold text-slate-800">
              {curso.nombre}
            </Text>
            <Text className="text-slate-500 text-sm mt-0.5" numberOfLines={2}>
              {curso.descripcion}
            </Text>
          </View>
        </View>

        <View className="flex-row items-center justify-between mt-4 pt-3 border-t border-slate-100">
          <View className="flex-row items-center bg-emerald-50 px-2 py-1 rounded-full">
            <View className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1" />
            <Text className="text-emerald-600 text-xs font-semibold">
              Disponible
            </Text>
          </View>
          <View className="flex-row items-center">
            <Text className="text-violet-600 text-sm font-semibold mr-1">
              Ver detalle
            </Text>
            <Ionicons name="chevron-forward" size={16} color="#7C3AED" />
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}
