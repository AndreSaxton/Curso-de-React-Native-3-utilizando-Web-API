import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import estilos from './estilos';
import { criarRepositoriosDoUsuario } from '../../servicos/requisicoes/repositorios';

export default function CriarRepositorio({ route, navigation }) {
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');

    async function criar(){
        const resultado = await criarRepositoriosDoUsuario(
            route.params.id,
            nome,
            data,
        )

        if( resultado === 'sucesso'){
            // Alerta para mobile
            Alert.alert('Sucesso', 'Repositório criado!')
            //necessário poís o Chrome não exive o Alert.alert
            alert('Repositório criado!')
            navigation.goBack();
        }
        else{
            // Alerta para mobile
            Alert.alert('Erro ao criar repositório')
            //necessário poís o Chrome não exive o Alert.alert
            alert('Erro criar repositório')
        }

    }

    return (
        <View style={estilos.container}>
            <TextInput
                placeholder="Nome do repositório"
                autoCapitalize="none"
                style={estilos.entrada}
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                placeholder="Data de criação"
                autoCapitalize="none"
                style={estilos.entrada}
                value={data}
                onChangeText={setData}
            />
            <TouchableOpacity style={estilos.botao}
                onPress={criar}
            >
                <Text style={estilos.textoBotao}>
                    Criar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
