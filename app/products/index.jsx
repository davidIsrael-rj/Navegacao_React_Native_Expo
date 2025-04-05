import { Text, View } from "react-native";
import { styles } from "../../styles/styles";
import { Link } from "expo-router";

export default function Products(){
    return(
        <View style={[styles.container, {backgroundColor: "#dbcdf0"}]}>
            <Text>Produtos</Text>
            <Link push href="/products/1">Produto 1</Link>
            <Link push href="/products/2">Produto 2</Link>
        </View>
    )
}