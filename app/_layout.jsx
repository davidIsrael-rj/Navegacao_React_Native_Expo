import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";


export default function RootLayout() {
  return (
    <>
      <StatusBar backgroundColor="#e94560" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#e94560" },
          headerTintColor: "#FFFF",
          // headerShown: false
        }}>
        <Stack.Screen name="index" options={{ headerTitle: "Home" }} />
        <Stack.Screen name="settings" options={{ headerTitle: "Configurações" }} />
        <Stack.Screen name="user" options={{ headerTitle: "Usuários" }} />
        <Stack.Screen name="products" options={{ headerTitle: "Produtos" }} />
        <Stack.Screen name="products/[id]" options={{ headerTitle: "Detalhes do Produto" }} />
        <Stack.Screen name="+not-found" options={{ headerTitle: "ERRO" }} />
      </Stack>
    </>
  )
}