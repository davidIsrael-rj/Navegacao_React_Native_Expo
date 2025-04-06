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
       
        <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
        <Stack.Screen name="+not-found" options={{ headerTitle: "ERRO" }} />
      </Stack>
    </>
  )
}