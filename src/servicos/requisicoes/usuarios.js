import api from "../api";

export async function buscaUsuario(nomeUsuario){
    try{
        // Quando estiver usando Fake API
        // const resultado = await api.get(`/users?login=${nomeUsuario}`);
        // return resultado.data[0];

        // Quando estiver usando API do GitHub
        const resultado = await api.get(`/users/${nomeUsuario}`);
        return resultado.data;
    }
    catch(error){
        console.log(error);
        return{}
    }
}