import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

//função que realiza o calculo do imc, recebendo o peso e a altura

export default function Form(){
    //estado variavel para guardar a mensagem para ser mostrada no resultado de componente
    const[altura, setAltura] = useState(null)
    const[peso, setPeso] = useState(null)
    const[messageImc, setMessageImc] = useState("Preencha a altura e o peso")
    const[imc, setImc] = useState(null)
    const[textButton, setTextButton] = useState("Calcular")

 //função para calcular o imc de acordo com a altura e peso que o usuario fornecer

    function imcCalculator(){
        return setImc((peso/(altura*altura)).toFixed(2))
    }
//função para validar as informações do usuario e calcular o imc
    function validationImc(){
        if(peso != null && altura != null){
            imcCalculator()
            setAltura(null)
            setPeso(null)
            setMessageImc("Seu imc é igual a: ")
            setTextButton("Calcular Novamente")
            return
        }
        //se estiver faltando a altura ou o peso, mostrar uma mensagem de erro 
        setImc(null)
        setMessageImc("Preencha a altura e peso: ")
        setTextButton("Calcular")
    }
    
    //renderiza a forma e o resultado dos componentes
    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
               <Text style={styles.formLabel}>Altura</Text> 
               <TextInput
                    style={styles.input}
                    onChangeText={setAltura}
                    value={altura}
                    placeholder="Ex.: 1.75"
                    keyboardType="numeric"
               />

               <Text style={styles.formLabel}>Peso</Text> 
               <TextInput
                    style={styles.input}
                    onChangeText={setPeso}
                    value={peso}
                    placeholder="Ex.: 75.365"
                    keyboardType="numeric"
               />

               <TouchableOpacity
                    style={styles.buttonCalculator} 
                    onPress={() => {
                        validationImc()
                    }}
               >
                <Text style={styles.textButtonCalculator}>{textButton}</Text>
               </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc = {imc}/>
        </View>
    );
}
