import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TextInput, TouchableOpacity } from 'react-native';
import estilos from './estilos';
import { buscaRepositorio, pegarRepositoriosDoUsuario } from '../../servicos/requisicoes/repositorios';
import { useIsFocused } from '@react-navigation/native';

export default function Repositorios({ route, navigation }) {
    const [repo, setRepo] = useState([]);
    const estaNaTela = useIsFocused();

    useEffect( async () => {
        // Quando estiver usando Fake API
        // const resultado = await pegarRepositoriosDoUsuario(route.params.id)

        // Quando estiver usando API do GitHub
        const resultado = await pegarRepositoriosDoUsuario(route.params.nomeUsuario)
        setRepo(resultado)
    },[estaNaTela])

    const [nomeRepositorio, setNomeRepositorio] = useState('');

    async function busca(){
        const resultado = await buscaRepositorio(nomeRepositorio);
        setNomeRepositorio('')

        if(resultado){
            setRepo(resultado)
        }
        else{
            // Alerta para mobile
            Alert.alert('Falha na busca', 'Repositório não encontrado')
            //necessário poís o Chrome não exive o Alert.alert
            alert('Repositório não encontrado')

            setRepo({})
        }
    }

    return (
        <View style={estilos.container}>
                <Text style={estilos.repositoriosTexto}>{repo.length} repositórios criados</Text>
                <TouchableOpacity 
                    style={estilos.botao}
                    onPress={() => navigation.navigate('CriarRepositorio', {id: route.params.id})}
                >
                    <Text style={estilos.textoBotao}>Adicionar novo repositório</Text>
                </TouchableOpacity>

                <TextInput
                    placeholder="Busque por um repositório"
                    autoCapitalize="none"
                    style={estilos.entrada}
                    value={nomeRepositorio}
                    onChangeText={setNomeRepositorio}
                />
                <TouchableOpacity style={estilos.botao} onPress={busca} >
                    <Text style={estilos.textoBotao}>
                        Buscar
                    </Text>
                </TouchableOpacity>

                <FlatList
                    data={repo}
                    style={{ width: '100%' }}
                    keyExtractor={repo => repo.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={estilos.repositorio}
                            onPress={() => navigation.navigate('InfoRepositorio', {item})}
                        >
                            <Text style={estilos.repositorioNome}>{item.name}</Text>
                            <Text style={estilos.repositorioData}>Atualizado em {item.data}</Text>
                        </TouchableOpacity>
                    )}
                />

        </View>
    );
}
