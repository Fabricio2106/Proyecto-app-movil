# maqueta-login-crud

Aplicacion movil con pantalla de login, registro y CRUD de productos. Desarrollada con Expo, React Native, TypeScript y NativeWind.

## Requisitos previos

- Node.js 18 o superior
- npm 9 o superior
- Expo Go instalado en el dispositivo fisico, o un emulador de Android/iOS configurado

## Instalacion

Clonar el repositorio e instalar dependencias:

```bash
npm install
```

## Levantar el proyecto

Iniciar el servidor de desarrollo:

```bash
npx expo start
```

El terminal mostrara un codigo QR. Desde ahi se puede abrir la app en:

- **Dispositivo fisico**: escanear el QR con la app Expo Go (Android o iOS).
- **Emulador Android**: presionar `a` en la terminal (requiere Android Studio con un emulador corriendo).
- **Simulador iOS**: presionar `i` en la terminal (solo macOS, requiere Xcode).
- **Navegador web**: presionar `w` en la terminal.

## Scripts disponibles

| Comando | Descripcion |
|---|---|
| `npm start` | Inicia el servidor de desarrollo |
| `npm run android` | Abre directamente en emulador Android |
| `npm run ios` | Abre directamente en simulador iOS |
| `npm run web` | Abre en el navegador |
| `npm run lint` | Ejecuta el linter |

## Estructura del proyecto

```
app/                   Pantallas (enrutamiento basado en archivos)
assets/                Imagenes y recursos estaticos
domain/entities/       Entidades del dominio (Producto)
presentation/
  components/          Componentes reutilizables por pantalla
  context/             Context API para estado global
  hooks/               Hooks personalizados
  reducers/            Reducers de estado
```

## Tecnologias

- Expo SDK 54
- React Native 0.81
- TypeScript
- NativeWind 4 (TailwindCSS para React Native)
- Expo Router 6
