import { DrawerToggleButton } from "@react-navigation/drawer"
import { Stack, useNavigation } from "expo-router";

export default function ProductsLayout() {

    const navigation = useNavigation();
    return (
        <Stack
            screenOptions={{
                headerStyle: { backgroundColor: "#e94560" },
                headerTintColor: "#FFFF",
                headerLeft: () => <DrawerToggleButton tintColor="#FFFFFF" />
                
            }}
        >
            <Stack.Screen name="index"/>
            <Stack.Screen name="products/[id]"/>
        </Stack>
    )
}