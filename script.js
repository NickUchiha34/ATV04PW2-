let titulos_livros = []; // Armazena os títulos dos livros cadastrados
let autores_livros = {}; // Relaciona os títulos dos livros aos seus autores e gêneros
let conjuto_generos = new Set(); // Conjunto que armazena todos os gêneros únicos dos livros

// Função para adicionar um livro ao acervo
function adicionar_livro(titulo, autor, genero) {
    titulos_livros.push(titulo); // Insere o título na lista de livros
    autores_livros[titulo] = { autor: autor, genero: genero }; // Vincula autor e gênero ao título no mapa
    conjuto_generos.add(genero); // Adiciona o gênero ao conjunto de gêneros únicos

    return console.log("Livro adicionado com sucesso.");
}

// Função para remover um livro do acervo
function remover_livro(titulo) {
    let index = titulos_livros.indexOf(titulo); // Localiza o índice do livro na lista de títulos
    if (index !== -1) {
        titulos_livros.splice(index, 1); // Remove o título da lista
    }
    
    // Exclui as informações do autor e gênero associadas ao título
    let genero = autores_livros[titulo]?.genero;
    delete autores_livros[titulo];

    // Remove o gênero do conjunto, caso não existam mais livros associados a ele
    if (genero && !titulos_livros.some(t => autores_livros[t]?.genero === genero)) {
        conjuto_generos.delete(genero);
    }
}

// Função para exibir todos os livros cadastrados
function listar_livros() {
    if (titulos_livros.length === 0) {
        console.log("Nenhum livro cadastrado.");
    } else {
        console.log("Livros cadastrados:");
        titulos_livros.forEach(function(titulo) {
            console.log(titulo); // Mostra cada título da lista de livros
        });
    }
}

// Função para verificar a disponibilidade de um livro no acervo
function disponibilidade_livro(titulo) {
    if (titulos_livros.includes(titulo)) {
        console.log(`O livro "${titulo}" está disponível.`);
    } else {
        console.log(`O livro "${titulo}" não está disponível.`);
    }
}

// Função para encontrar livros baseados em seu gênero
function livro_por_genero(genero) {
    let livros_porGenero = []; // Lista para armazenar os títulos que pertencem ao gênero informado

    // Itera pelos títulos para encontrar livros do gênero especificado
    titulos_livros.forEach(function(titulo) {
        if (autores_livros[titulo]?.genero === genero) {
            livros_porGenero.push(titulo); // Adiciona o título à lista de resultados
        }
    });

    if (livros_porGenero.length === 0) {
        console.log(`Nenhum livro encontrado para o gênero "${genero}".`);
    } else {
        console.log(`Livros do gênero "${genero}":`);
        livros_porGenero.forEach(function(titulo) {
            console.log(titulo);
        });
    }
}

// Testando as funções
adicionar_livro("coragem é agir com o coração", "fred euboni", "emoção");
adicionar_livro("5 linguagens do amor", "Mateus", "amor");

// Removendo um livro
remover_livro("coragem é agir com o coração");

// Listando os livros cadastrados
listar_livros();

// Verificando a disponibilidade de livros
disponibilidade_livro("coragem é agir com o coração");
disponibilidade_livro("5 linguagens do amor");

// Buscando livros por gênero
livro_por_genero("emoção");
livro_por_genero("amor");
livro_por_genero("aventura");

