import api from "../api";

// export async function pegarRepositoriosDoUsuario(id){
export async function pegarRepositoriosDoUsuario(nomeUsuario){
    try{
        // Quando estiver usando Fake API
        // const resultado = await api.get(`/repos?postId=${id}`);

        // Quando estiver usando API do GitHub
        const resultado = await api.get(`/users/${nomeUsuario}/repos`);

        return resultado.data;
    }
    catch(error){
        console.log(error);
        return[]
    }
}

export async function salvarRepositoriosDoUsuario(postId, nome, data, id){
    try{
        await api.put(`/repos/${id}`, {
            name: nome,
            data: data,
            postId: postId,
            id: id
        });
        
        return 'sucesso';
    }
    catch(error){
        console.log(error);
        return 'erro'
    }
}

export async function criarRepositoriosDoUsuario(postId, nome, data){
    try{
        await api.post(`/repos`, {
            name: nome,
            data: data,
            postId: postId,
        });
        
        return 'sucesso';
    }
    catch(error){
        console.log(error);
        return 'erro'
    }
}

export async function deletarRepositoriosDoUsuario(id){
    try{
        await api.delete(`/repos/${id}`);
        return 'sucesso';
    }
    catch(error){
        console.log(error);
        return 'erro'
    }
}

export async function buscaRepositorio(nomeRepositorio){
    try{
        const resultado = await api.get(`/repos?name=${nomeRepositorio}`);
        
        return resultado.data;
    }
    catch(error){
        console.log(error);
        return{}
    }
}