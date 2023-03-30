const inputBuscarFilme = document.querySelector("#input-buscar-filme");
const btnBuscarFilme = document.querySelector("#btn-buscar-filme");

const listaFilmes = document.querySelector("#lista-filmes");
const mostrarFilmes = document.querySelector("#mostrar-filmes");



btnBuscarFilme.onclick = () => {
    if(inputBuscarFilme.value.length > 0){
        const filmes = new Array();
        fetch("http://www.omdbapi.com/?apikey=4b8fb6ce&s="+inputBuscarFilme.value, {mode: "cors"})
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
    fetch("http://www.omdbapi.com/?apikey=4b8fb6ce&i="+id)
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

        /*document.querySelector("#salvarDetalhes").onclick = () => {
            salvarDetalhes(filme);
        }*/
    
    });
}

const listarFilmes = async (filmes) => {
    const listaFilmes = await document.querySelector("#lista-filmes");
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