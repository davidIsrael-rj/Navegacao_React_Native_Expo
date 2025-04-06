import { Text, View } from "react-native"
import { styles } from "../styles/styles"
import { Link } from "expo-router"

export default function NotFound(){
    return(
        <View style={[styles.container, {backgroundColor: "#f7d9c4"}]}>
            <Text>Página não existe</Text>
            <Link replace href="/">Ir para Home</Link>
        </View>
    )
}