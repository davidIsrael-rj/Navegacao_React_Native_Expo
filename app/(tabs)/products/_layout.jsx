import { Stack } from "expo-router";

export default function ProductsLayout(){
    return(
        <Stack
        screenOptions={{
            headerStyle: { backgroundColor: "#e94560" },
            headerTintColor: "#FFFF",
            // headerShown: false
          }}
        >
            <Stack.Screen name="index" options={{title:"Produtos"}}/>
            <Stack.Screen name="products/[id]" options={{title: "Detalhes"}}/>
        </Stack>
    )
}