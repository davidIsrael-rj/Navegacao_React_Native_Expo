import { Text, View } from "react-native";
import { styles } from "../../styles/styles";
import { useLocalSearchParams } from "expo-router";

export default function ProductDetail(){
    const {id} = useLocalSearchParams()
    return(
        <View style={[styles.container, {backgroundColor: "#f2c6de"}]}>
            <Text>Detalhes do Produto</Text>
            <Text>Produto com id: {id}</Text>
        </View>
    )
}