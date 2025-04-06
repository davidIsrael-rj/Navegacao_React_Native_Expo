import { FontAwesome } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { router, Stack } from "expo-router";
import Drawer from "expo-router/drawer";
import { StatusBar } from "expo-status-bar";

const CustomDrawerContent = () => {
  return (
    <DrawerContentScrollView>
      <DrawerItem
        icon={({color}) => <FontAwesome size={28} name="user" color={color}/>}
        label="Usuário"
        onPress={()=> router.push("/user")}
      />
    </DrawerContentScrollView>
  )
}
export default function RootLayout() {
  return (
    <>
      <StatusBar backgroundColor="#e94560" />
      <Drawer
        drawerContent={() => <CustomDrawerContent />}
        screenOptions={{
          headerStyle: { backgroundColor: "#e94560" },
          headerTintColor: "#FFFF",
          // headerShown: false
        }}>

        <Drawer.Screen name="(tabs)" options={{ headerShown: false }} />
        <Drawer.Screen name="+not-found" options={{ headerTitle: "ERRO" }} />
      </Drawer>
    </>
  )
}