import { Pressable, Text, View } from "react-native";
import { styles } from "../styles/styles";
import { router } from "expo-router";

export default function Settings() {
    
    const goToHome =() =>{
       router.replace("/") 
    }
    return (
        <View style={[styles.container, { backgroundColor: "#C6DEF1" }]}>
            <Text>Configurações</Text>
            <Pressable onPress={goToHome}>
                <Text>Ir para Home</Text>
            </Pressable>
        </View>
    )
}