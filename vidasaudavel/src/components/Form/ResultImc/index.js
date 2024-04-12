//importa componentes necessarios
import React from  "react";
import { View, Text } from "react-native";
import styles from "./style";
//função que exibe o titulo do aplicativo
export default function ResultImc(props){
    return(
        <View style={styles.resultImc}>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style = {styles.numberImc}>{props.resultImc}</Text>
        </View>
    );    
}
