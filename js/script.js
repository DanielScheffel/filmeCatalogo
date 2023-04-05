const inputBuscarFilme = document.querySelector("#input-buscar-filme");
const btnBuscarFilme = document.querySelector("#btn-buscar-filme");

const listaFilmes = document.querySelector("#lista-filmes");
const mostrarFilmes = document.querySelector("#mostrar-filmes");
const navFavoritos = document.querySelector("#nav-favoritos");
const filmeFavorito = document.querySelector("#btnFilmeFavorito")



btnBuscarFilme.onclick = () => {
    if(inputBuscarFilme.value.length > 0){
        const filmes = new Array();
        fetch("https://www.omdbapi.com/?apikey=4b8fb6ce&s="+inputBuscarFilme.value, {mode: "cors"})
        .then((resp) => resp.json())
        .then((resp) => {
            resp.Search.forEach(item => {
                console.log(item);
                const filme = new Filme(
                    item.imdbID,
                    item.Title,
                    item.Year,
                    item.Type,
                    null,
                    null,
                    item.Poster,
                    null,
                    null,
                    null,
                    null
                );
                filmes.push(filme);
            });
            listarFilmes(filmes);
        })
    
    }
    mostrarFilmes.style.display = "none";
    return false;
}

const detalhesFilme = async (id) => {
    fetch("https://www.omdbapi.com/?apikey=4b8fb6ce&i="+id)
    .then((resp) => resp.json())
    .then((resp) => {
        console.log(resp);
        const filme = new Filme(
            resp.imdbID,
            resp.Title,
            resp.Year,
            resp.Genre.split(", "),
            resp.Runtime,
            resp.Plot,
            resp.Poster,
            resp.Director,
            resp.Actors.split(", "),
            resp.Awards,
            resp.imdbRating
        )

        mostrarFilmes.style.display = "flex";
        mostrarFilmes.appendChild(filme.getDetalhesFilme());

        document.querySelector("#fecharDetalhes").onclick = () => {
            document.querySelector("#lista-filmes").style.display = "flex";
            document.querySelector("#mostrar-filmes").innerHTML = "";
            document.querySelector("#mostrar-filmes").style.display = "none";
        }

        document.querySelector("#btnFilmeFavorito").onclick = () => {
            filmesFavorito(filme);
        }

        document.querySelector("#btnDesfavoritar").onclick = () => {
            excluirFilme(filme);
        }
    
    });
}

const listarFilmes = async (filmes) => {
    const listaFilmes = document.querySelector("#lista-filmes");
    listaFilmes.style.display = "flex";
    listaFilmes.innerHTML = "";
    document.querySelector("#mostrar-filmes").innerhtml = "";
    if(filmes.length > 0){
        filmes.forEach(async(filme) => {
            console.log(filme);
            listaFilmes.appendChild(await filme.getCard());
            filme.getBtnDetalhes().onclick = () => {
                listaFilmes.style.display = "none";
                detalhesFilme(filme.id);
            }
        });


    }

}


let filmesFavorito = (filme) => {

    let filmeString = localStorage.getItem('filmesFavoritos');

    let filmes = null;

    if(filmeString){

        filmes = JSON.parse(filmeString);

        filmes.push(filme);

    }
    else{

        filmes = [filme];

    }

    filmes = JSON.stringify(filmes);

    localStorage.setItem('filmesFavoritos', filmes);

    //console.log(filmes);

}

const listaFavoritos = () => {

    let filmeSalvo = localStorage.getItem('filmesFavoritos');
    filmeSalvo = JSON.parse(filmeSalvo);
    let filmes = new Array();
    //console.log(filmeSalvo);
    filmeSalvo.forEach((item) => {
        //console.log(item);
        let filme = new Filme(
            item.id,
            item.titulo,
            item.ano,
            null,
            null,
            null,
            item.cartaz,
            null,
            null,
            null,
            null
        );

        filmes.push(filme);

    });

    listarFilmes(filmes);

}

navFavoritos.onclick = () => {

    listaFavoritos();

}

const excluirFilme = (id) => {

    let filmeSalvo = JSON.parse(localStorage.getItem('filmesFavoritos'));

    let Id = (filme) => filme.id == id;

    let excluir = filmeSalvo.find(Id);

    filmeSalvo.splice(excluir, 1);

    localStorage.setItem('filmesFavoritos', JSON.stringify(filmeSalvo));

    listaFavoritos();
}


// SIMPLES TESTE DE EDITAR

/*const editarFilme = (id, titulo, ano, genero, duracao, sinopse, cartaz) => {

    let filmeSalvo = JSON.parse(localStorage.getItem('filmesFavoritos'))
        .filter(item => item.Id !== id);
    
    filmeSalvo.push({
        Title: titulo,
        Year: ano,
        Genre: genero,
        Runtine: duracao,
        Plot: sinopse,
        Poster: cartaz
    });

    localStorage.setItem('filmesFavoritos', JSON.stringify(filmeSalvo));

}*/