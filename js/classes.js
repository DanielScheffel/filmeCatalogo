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

    getDetalhesFilme =  () => {

        let cardDetalhes = document.createElement('div');
        cardDetalhes.setAttribute("class", "card-detalhes");

        let imgDetalhes = document.createElement("img");
        imgDetalhes.setAttribute("class", "img-detalhes");
        imgDetalhes.setAttribute("src", this.cartaz);

        let cardBodyDetalhes = document.createElement("div");
        cardBodyDetalhes.setAttribute("class", "body-detalhes");

        let hTitleDetalhes = document.createElement("h5");
        hTitleDetalhes.setAttribute("class", "card-title");
        hTitleDetalhes.appendChild(document.createTextNode(this.titulo));

        let divDetalhes = document.createElement("div");
        divDetalhes.setAttribute("class", "div-detalhes");

        let divAno = document.createElement("div");
        divAno.setAttribute("class", "div-ano");

        let divGenero = document.createElement("div");
        divGenero.setAttribute("class", "div-genero");

        let divDuracao = document.createElement("div");
        divDuracao.setAttribute("class", "div-duracao");

        let divDirecao = document.createElement("div");
        divDirecao.setAttribute("class", "div-direcao");

        let divElenco = document.createElement("div");
        divElenco.setAttribute("class", "div-elenco");

        let divAvaliacao = document.createElement("div");
        divAvaliacao.setAttribute("class", "div-avaliacao");

        let divSinopse = document.createElement("div");
        divSinopse.setAttribute("class", "div-sinopse");

        divAno.appendChild(document.createTextNode(this.ano));
        divGenero.appendChild(document.createTextNode(this.genero));
        divDuracao.appendChild(document.createTextNode(this.duracao));
        divDirecao.appendChild(document.createTextNode(this.direcao));
        divElenco.appendChild(document.createTextNode(this.elenco));
        divAvaliacao.appendChild(document.createTextNode(this.avaliacao));
        divSinopse.appendChild(document.createTextNode(this.sinopse));

        divDetalhes.appendChild(divAno);
        divDetalhes.appendChild(divGenero);
        divDetalhes.appendChild(divDuracao);
        divDetalhes.appendChild(divDirecao);
        divDetalhes.appendChild(divElenco);
        divDetalhes.appendChild(divAvaliacao);
        divDetalhes.appendChild(divSinopse);

        cardDetalhes.appendChild(imgDetalhes);
        cardDetalhes.appendChild(cardBodyDetalhes);

        cardBodyDetalhes.appendChild(hTitleDetalhes);
        cardBodyDetalhes.appendChild(divDetalhes);

        return cardDetalhes;

    }
}