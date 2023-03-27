 class Ator{
    constructor(id, nome){
        this.nome = nome;
        this.id = id;
    }
}

class Diretor{
    constructor(id, nome){
        this.nome = nome;
        this.id = id;
    }
}


class Filme{
    constructor(id, titulo, ano, genero, duracao, sinopse, cartaz, direcao, elenco, classificacao, avaliacao){
        this.id = id;
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.sinopse = sinopse;
        this.cartaz = cartaz;
        this.direcao = direcao;
        this.elenco = elenco;
        this.classificacao = classificacao;
        this.avaliacao = avaliacao;
        this.btnDetalhes = null;
    }

    getCard = async () => {

        let card = document.createElement("div");
        card.setAttribute("class", "card");

        let imgCartaz = document.createElement("img");
        imgCartaz.setAttribute("class", "card-img-topz");
        imgCartaz.setAttribute("src", this.cartaz);

        let cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body");

        let hCardTitle = document.createElement("h5");
        hCardTitle.setAttribute("class", "card-title");

        let divDetalhes = document.createElement("div");
        divDetalhes.setAttribute("style", "display: flex; justify-content: space-around; text-align: center; font-weight: 700;");

        let divGenero = document.createElement("div");
        divGenero.setAttribute("style", "flex-grow:1;");

        let divAnoProducao = document.createElement("div");
        divAnoProducao.setAttribute("style", "flex-grow:1;");

        let divClassificacao = document.createElement("div");
        divClassificacao.setAttribute("style", "flex-grow:1;");

        hCardTitle.appendChild(document.createTextNode(this.titulo));
        divGenero.appendChild(document.createTextNode(this.genero));
        divAnoProducao.appendChild(document.createTextNode(this.ano));
        divClassificacao.appendChild(document.createTextNode(this.classificacao));

        divDetalhes.appendChild(divGenero);
        divDetalhes.appendChild(divAnoProducao);
        divDetalhes.appendChild(divClassificacao);

        card.appendChild(imgCartaz);
        card.appendChild(cardBody);

        cardBody.appendChild(hCardTitle);
        cardBody.appendChild(divDetalhes);

        this.setBtnDetalhes();
        cardBody.appendChild(this.getBtnDetalhes());
    
        return card;
    }

    getBtnDetalhes = () => {

        return this.btnDetalhes;

    }

    setBtnDetalhes = () => {

        this.btnDetalhes = document.createElement('button');
        this.btnDetalhes.appendChild(document.createTextNode("Detalhes"));
        this.btnDetalhes.setAttribute("id", this.id);
        this.btnDetalhes.setAttribute("class", "btnDetalhesFilme");

    }

    getDetalhesFilme = async () => {

        let cardDetalhes = document.createElement("div");
        cardDetalhes.setAttribute("class", "card mb-3");
        cardDetalhes.setAttribute("style", "max-width: 540px;");

        let cardimgDetalhes = document.createElement("div");
        cardimgDetalhes.setAttribute("class", "row g-0");

        let divImg = document.createElement("div");
        divImg.setAttribute("class", "col-md-4");
        divImg.setAttribute("src", this.cartaz);

        let divDetalhes = document.createElement("div");
        divDetalhes.setAttribute("class", "col-md-8");

        let cardBodyDetalhes = document.createElement("div");
        cardBodyDetalhes.setAttribute("class", "card-body");

        let htitleDetalhes = document.createElement("h5");
        htitleDetalhes.setAttribute("class", "card-title-detalhes");

        let divAnoProducao = document.createElement("div");
        divAnoProducao.setAttribute("style", "flex-grow: 1;");

        let divDuracao = document.createElement("div");
        divDuracao.setAttribute("style", "flex-grow: 1;");

        let divGenero = document.createElement("div");
        divGenero.setAttribute("style", "flex-grow: 1;");

        let divDirecao = document.createElement("div");
        divDirecao.setAttribute("style", "flex-grow: 1;");

        let divElenco = document.createElement("div");
        divElenco.setAttribute("style", "flex-grow: 1;");

        let divSinopse = document.createElement("div");
        divSinopse.setAttribute("class", "sinopse");


        return cardDetalhes;

    }
}