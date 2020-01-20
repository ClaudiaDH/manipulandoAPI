let botaoClicado = document.getElementById("btn");
let board = document.getElementById("board");
//adicionando um evento no botao. com addEventListener, podemos retirar o evento.
botaoClicado.addEventListener("click", () => {
    //vai se conectar com o servidor.
    //dentro do paraenteses vai a URL do API
    //para pegar as informações usamos o "then"
    //O fetch passa as informação como parametro da função anonima.
    //para poder ver o que esta vindo de resposta usamos o console.log
    fetch("https://newsapi.org/v2/top-headlines?country=br&apiKey=e5b12e8351004b1fb606eb4250a4d10f").then((resposta) => {
        //dizendo para o fetch que o que foi buscar eh um json, dai o fetch retorna o json que ele recolheu.
        //retorna uma promessa dizendo que vai entregar em algum momento, por isso preciso fazer um segundo then.
        return resposta.json();
    }).then(json => {
        //acessando o atributo que esta dentro do objeto.
        console.log(json.articles);
        //mostrar na tela a lista de noticias
        mostrarNaTela(json.articles);
    })
    //******  De uma maneira mais resumida  ******
    // fetch("https://newsapi.org/v2/top-headlines?country=br&apiKey=e5b12e8351004b1fb606eb4250a4d10f")
    // .then((resposta)=>resposta.json())
    // .then(json=>{
    //     console.log(json)
    // })





})
//***COMO SERIA SEM USAR O THEN */
botaoClicado.addEventListener("click", async() => {
    let listaNoticias = (await fetch("https://newsapi.org/v2/top-headlines?country=br&apiKey=e5b12e8351004b1fb606eb4250a4d10f")).json();
    console.log(listaNoticias);
})

//Vai mostrar uma lista de noticias.
let mostrarNaTela = listaNoticias => {
    //for let(noticia of listaNoticias)

    //ou

    listaNoticias.forEach(function (noticia, posicao) {
        //usando template string
        let card = `<div id="board" class="card mt-5 container" style="width: 18rem;">
        <img src="${noticia.urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${noticia.title}</h5>
            <p class="card-text">${noticia.description}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>`
        board.innerHTML += card;
    })


}