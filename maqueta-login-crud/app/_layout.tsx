import 'react-native-reanimated';
import '../global.css';
import { Stack } from 'expo-router';
import { CursosProvider } from '../presentation/context/CursosContext';

export default function RootLayout() {
  return (
    <CursosProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="login" />
        <Stack.Screen name="registro" />
        <Stack.Screen name="home" />
        <Stack.Screen name="alumno" />
        <Stack.Screen name="curso/[id]" />
      </Stack>
    </CursosProvider>
  );
}
