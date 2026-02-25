const botao = document.getElementById("botao");
const texto = document.getElementById("texto");
const imagen = document.getElementById("imagem");

botao.addEventListener("click", ()=>{
    fetch("http://pokeapi.co/api/v2/pokemon/3")
    .then(resposta => resposta.json())
.then(dados => {
    texto.textContent = dados.name;
imagen.src = dados.sprites.front_default;
    
   });
});
