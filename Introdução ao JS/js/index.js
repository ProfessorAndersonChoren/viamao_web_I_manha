/* Comandos de saída / impressão
1° Usando o objeto console
console.log("Hello World!!!")
console.debug("Uma impressão de 'Depuração' qualquer")
console.warn("Uma advertência qualquer!!!")
console.info("Uma informação qualquer!!!")
console.error("Um erro grave no sistema!!!")

2° Usando as funções innerHTML e innerText
document.body.innerHTML = "<p>Um texto inserido via JS</p>"
document.body.innerText = "<p>Um texto inserido via JS</p>"

3° Usando o função alert
alert("Um mensagem bem chata na cara do usuário!!!") */

// ---------------------- Criar elemento ------------------
let elementImg = document.createElement("img");
elementImg.src = "../img/dia.jpg";
elementImg.width = 400;

document.body.appendChild(elementImg);

elementImg.addEventListener("click", () => {
  elementImg.src = "../img/noite.jpg";
});

// --------------- Seletor de ID --------------------
let elementParagraph = document.getElementById("meuParagrafo")

elementParagraph.classList.add("text-primary","fw-bold","text-center")