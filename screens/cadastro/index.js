import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, TextInput, Button } from 'react-native';
import Cores from '../../cores/index';



const NovoLugarTela = (props) => {

    const [novoLugar, setNovoLugar] = useState('');

    const novoLugarAlterado = (texto) => {
        setNovoLugar(texto);
    }

    const adicionarLugar = () => {

    }

    return (

        <ScrollView>
            <View style={estilos.form}>
                <Text style={estilos.titulo}>Novo Lugar</Text>
                <TextInput
                    style={estilos.textInput}
                    onChangeText={novoLugarAlterado}
                    value={novoLugar}
                />
                <Button
                    title="Salvar Lugar"
                    color={Cores.primary}
                    onPress={adicionarLugar}
                />
            </View>
        </ScrollView>

    );
}

const estilos = StyleSheet.create({
    form: {
        margin: 30
    },
    titulo: {
        fontSize: 18,
        marginBottom: 15,
    },
    textInput: {
        borderBottomColor: '#DDD',
        borderBottomWidth: 2,
        marginBottom: 15,
        paddingVertical: 4
    }
})

export default NovoLugarTela;