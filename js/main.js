function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Click no botão");
}

function redirecionar(){
    window.open("https://www.google.com.br/");
    //window.location.href = "https://www.google.com.br/";
}

function trocar(elemento){
    //document.getElementById("mouseMove").innerHTML = "<b>Obrigado por pasar o mouse</b>";
    elemento.innerHTML = "Obrigado por pasar o mouse";
    //alert("Trocar texto");
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mouseMove").innerHTML = "<b>Passe o mouse aqui</b>";
}

function load() {
    alert("Página carregada!")
}

function funcaoChange(elemento) {
    console.log(elemento.value)
}

// function soma(n1, n2){
//     return n1-n2;
// }

// function setReplace(frase, nome, nome_nome){
//     return frase.replace(nome, nome_nome);
// }

// function validaIdade(idade){
//     var validar = true;
//     if (idade >=18) {
//         validar = true;
//     } else {
//         validar =false;
//     }
//     return validar;
// }

//alert(soma(10, 5));
// alert(setReplace("Vai Japão", "Japão", "Brasil"));
// var idade = prompt("Qual sua idade? ")
// console.log(validaIdade(idade));


// var d = new Date();
// alert(d.getDay());


// var cont;
// for (let cont = 0; cont <= 5; cont++) {
//     alert(cont)
// };


// var cont = 0;
// while (cont < 5) {
//     console.log(cont);
//     cont ++;
// }


// var idade = prompt("Qual sua idade? ");
// if (idade >= 18) {
//     alert("Maior de idade");
// } else {
//     alert("Menor de menor de idade");
// };


// var fruta = [{nome:"Maça", cor:"Vermelo"}, {nome:"Uva", cor:"Roxa"}];
// console.log(fruta[0].cor);


// var lista = ["Maça", "Pêra", "Laranja"];
// // lista.push("Uva");
// lista.pop();
// console.log(lista);
// console.log(lista.length);
// console.log(lista.reduce);
// console.log(lista.toString);
// console.log(lista.join(" "));
// alert(lista);



// var nome = "Marcos Vinicius";
// var idade = 35;
// var idade2 = 10;
// var frase = "Japão é o melhor time do mundo";
// // alert("Nome: " + nome + "Idade: " + idade);
// // alert(idade + idade2);
// console.log(nome);
// console.log(idade + idade2);
// console.log(frase.replace("Japão", "Brasil"));
// alert(frase.replace("Japão", "Basil"));
// console.log(frase.toLowerCase());
// console.log(frase.toLocaleUpperCase());