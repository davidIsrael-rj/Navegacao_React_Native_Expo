import { FontAwesome } from "@expo/vector-icons";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerStyle: { backgroundColor: "#e94560" },
                headerTintColor: "#FFFF",
                tabBarActiveTintColor: "#e94560",
                tabBarInactiveTintColor: "#008000",
                headerLeft: () => <DrawerToggleButton tintColor="#fff"/>
                // headerShown: false
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({color}) => <FontAwesome size={28} name="home" color={color}/>
                }}
            />
            <Tabs.Screen
                name="products"
                options={{
                    headerShown: false,
                    title: "Produtos",
                    tabBarIcon: ({color}) => <FontAwesome size={28} name="shopping-bag" color={color}/>
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: "Configurações",
                    tabBarIcon: ({color}) => <FontAwesome size={28} name="cog" color={color}/>
                }}
            />
        </Tabs>
    )
}