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

        const card = document.createElement("div");
        card.setAttribute("class", "card");

        const imgCartaz = document.createElement("img");
        imgCartaz.setAttribute("class", "card-img-topz");
        imgCartaz.setAttribute("src", this.cartaz);

        const cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body");

        const hCardTitle = document.createElement("h5");
        hCardTitle.setAttribute("class", "card-title");

        const divDetalhes = document.createElement("div");
        divDetalhes.setAttribute("style", "display: flex; justify-content: space-around; text-align: center; font-weight: 700;");

        const divGenero = document.createElement("div");
        divGenero.setAttribute("style", "flex-grow:1;");

        const divAnoProducao = document.createElement("div");
        divAnoProducao.setAttribute("style", "flex-grow:1;");

        const divClassificacao = document.createElement("div");
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

        const cardDetalhes = document.createElement('div');
        cardDetalhes.setAttribute("class", "card-detalhes");

        const imgDetalhes = document.createElement("img");
        imgDetalhes.setAttribute("class", "img-detalhes");
        imgDetalhes.setAttribute("src", this.cartaz);

        const cardBodyDetalhes = document.createElement("div");
        cardBodyDetalhes.setAttribute("class", "body-detalhes");

        const divCabecalho = document.createElement("div");
        divCabecalho.setAttribute("class", "cabecalho");

        const hTitleDetalhes = document.createElement("h2");
        hTitleDetalhes.setAttribute("class", "cardTitle");
        hTitleDetalhes.appendChild(document.createTextNode(this.titulo));

        const fecharFilme = document.createElement('button');
        fecharFilme.setAttribute("class", "btn-close");
        fecharFilme.setAttribute("id", this.id);
        fecharFilme.setAttribute("id", "fecharDetalhes");

        const divDetalhes = document.createElement("div");
        divDetalhes.setAttribute("class", "div-detalhes");

        const divAno = document.createElement("div");
        divAno.setAttribute("class", "div-ano");
        divAno.appendChild(document.createTextNode("• Ano: "));

        const divGenero = document.createElement("div");
        divGenero.setAttribute("class", "div-genero");
        divGenero.appendChild(document.createTextNode("• Genêro: "));

        const divDuracao = document.createElement("div");
        divDuracao.setAttribute("class", "div-duracao");
        divDuracao.appendChild(document.createTextNode("• Duração: "));

        const divDirecao = document.createElement("div");
        divDirecao.setAttribute("class", "div-direcao");
        divDirecao.appendChild(document.createTextNode("• Direção: "));

        const divElenco = document.createElement("div");
        divElenco.setAttribute("class", "div-elenco");
        divElenco.appendChild(document.createTextNode("• Elenco: "));

        const divSinopse = document.createElement("div");
        divSinopse.setAttribute("class", "div-sinopse");
        divSinopse.appendChild(document.createTextNode("• Sinopse: "));

        const divAvaliacao = document.createElement("div");
        divAvaliacao.setAttribute("class", "div-avaliacao");
        divAvaliacao.appendChild(document.createTextNode("• Avaliação: "));

        /*const salvarFilme = document.createElement('button');
        salvarFilme.setAttribute("id", "salvarDetalhes");
        salvarFilme.appendChild(document.createTextNode('Salvar'));*/

        divAno.appendChild(document.createTextNode(this.ano));
        divGenero.appendChild(document.createTextNode(this.genero));
        divDuracao.appendChild(document.createTextNode(this.duracao));
        divDirecao.appendChild(document.createTextNode(this.direcao));
        divElenco.appendChild(document.createTextNode(this.elenco));
        divSinopse.appendChild(document.createTextNode(this.sinopse));
        divAvaliacao.appendChild(document.createTextNode(this.avaliacao));

        divDetalhes.appendChild(divAno);
        divDetalhes.appendChild(divGenero);
        divDetalhes.appendChild(divDuracao);
        divDetalhes.appendChild(divDirecao);
        divDetalhes.appendChild(divElenco);
        divDetalhes.appendChild(divSinopse);
        divDetalhes.appendChild(divAvaliacao);
        //divDetalhes.appendChild(salvarFilme);

        cardDetalhes.appendChild(imgDetalhes);
        cardDetalhes.appendChild(cardBodyDetalhes);

        divCabecalho.appendChild(hTitleDetalhes);
        divCabecalho.appendChild(fecharFilme);

        cardBodyDetalhes.appendChild(divCabecalho);
        cardBodyDetalhes.appendChild(divDetalhes);


        return cardDetalhes;

    }


}