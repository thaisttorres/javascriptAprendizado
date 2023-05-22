/* let nomeCarro = "Ferrari";
console.log(nomeCarro);

let precoBolo = 19.99;
console.log(precoBolo);

let cidade = "Sao Paulo";
console.log(cidade);

const nome = "Thais";
console.log(nome)


let x = 0;
x++;
console.log(x);


let nome = "Thais";
let sobreNome ="Torres"
let nomeCompleto = `${nome} ` + `${sobreNome} sao meus dois primeiros nomes`;
console.log(nomeCompleto)


let primeiroNumero = 30;

if (primeiroNumero < 20) {
   console.log("Thais")
}
else{
    console.log("Tamara")
}


for (let numero = 0; numero <= 10; numero++) {
    console.log("Numero: " + numero);  
}
let idade = 18;

let maiorIdade = (idade > 18 ? 'SIM' : 'NAO');
console.log(maiorIdade);


let profissao = "asdfasdf"

switch (profissao) {
    case "bombeiro":
        console.log("Sua camisa sera vermelha")
        break;

    case "fiscal":
        console.log("Sua camisa sera verde")
        break;
    default:
        console.log("sua camisa sera preta")
}


// Como criar uma funcao

function gravidade() {
    console.log('a gravidade do meu planeta e:');
    console.log(9.8); 
}
gravidade();


function somar(n1, n2) {
    let resultado = n1 + n2;
    console.log(resultado);
}
somar(10, 20);

function nomeCompleto (nome, sobrenome){
    return (`${nome} ${sobrenome}`);
}
let completo = nomeCompleto('Thais', 'Torres');
console.log(completo)

// ENTRADA - PROCESSAMENTO - SAIDA

function maiorDeIdade(idade){
    if(idade >=18){
        return true;
    }else{
            return false;
        }
}
let idade = 16;
let verificar = maiorDeIdade(idade);
 if(verificar == true) {
    console.log ('E maior de idade');
 } else {
    console.log ('Nao e maior de idade');
 }


 const paragrafo = document.querySelector('.paragrafo');


 function clicou(){
    paragrafo.style.color = 'red';
 }

 let botao = document.querySelector('.botao')
 botao.addEventListener('click', () => {
    clicou();
 })

 let voltar = document.querySelector('.voltar')
 function desclicou() {
 paragrafo.style.color = 'black';   
 }
 voltar.addEventListener('click', ()=> {
    desclicou();
 })

 let pontos = document.querySelector('.pontuacao');
 let novoli = document.createElement('li');
 novoli.innerHTML = 'Ponte Preta';

 pontos.prepend(novoli);
 
 pontos.before('Campeonato');

 let button = document.createElement('button');
 button.innerHTML = 'Ver resultados';
 pontos.after(button);


 let novaUl = document.createElement('ul');
 for (let i = 0; i < 6; i++) {
    novaLi = document.createElement('li');
    novaLi.innerHTML = 'Outros Times ';
    novaUl.append(novaLi);
 }
 pontos.before(novaUl);




function clicou(){
    const input = document.querySelector('input');
    if(input.hasAttribute('type')){
        console.log('TEM ESSE ATRIBUTO')
    }else{
       console.log ('NAO TEM ')
    }
}

function clicou(){
    const input = document.querySelector('input');
    const botao = document.querySelector('.botao');
    if(input.getAttribute('type') === 'text'){
        input.setAttribute('type', 'password');
        botao.innerText = 'Mostrar senha';
    }else{
        input.setAttribute('type', 'text');
        botao.innerText = 'Esconder senha';
    }
}


function soltou(e){
    console.log(e.key)
}
const input = document.querySelector('input');
input.addEventListener('keyup', soltou);


//Elementos de uma lista de tarefas simples

const input = document.querySelector('input');
const lista = document.querySelector('ul');

// Funcoes
function adicionar(e){
    //adicionar elemento LI na lista
    if(e.key === 'Enter'){
    const newLi = document.createElement('li');
    newLi.innerHTML = input.value;
    lista.appendChild(newLi);
    //Limpando o campo de texto
    input.value = ' ';
    }
}

// Eventos
input.addEventListener('keyup', adicionar);


programacao orientada a objetos ( POO - OOP) //PORTGUES E INGLES
Programacao funcional (PF - FP)





class Person{

    steps = 0;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    takeAStep(){

    }
}

let pessoa1 = new Person("Thais", 32);
let pessoa2 = new Person("Adriana", 23);
let pessoa3 = new Person("Tahine", 27);

console.log(`${pessoa1.name} tem ${pessoa1.age} anos`);
console.log(`${pessoa2.name} tem ${pessoa2.age} anos`);
console.log(`${pessoa3.name} tem ${pessoa3.age} anos`);

class Person{

    steps = 0;
    _age = 0;

    constructor(name, age){
        this.name = name;
    }
    takeAStep() {
        this.steps++;
    }
    get age(){
        return this._age;
    }
    
}

let pessoa1 = new Person("Thais", 32);
let pessoa2 = new Person("Adriana", 23);
let pessoa3 = new Person("Tahine", 27);

console.log(`a ${pessoa1.name} tem ${pessoa1.age} anos`);

function createPerson (name, lastName, age){
    return {
        name, 
        lastName, 
        age
    }
}

let person1 = createPerson('Thais', 'Torres', 25);


function chamandoligacao(){
    alert('funcionou sim');
};

document.querySelector('.callback').addEventListener('click', chamandoligacao);

// https://jsonplaceholder.typicode.com/posts

function clicou(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then ((response) =>{
        return response.json();
    }).then ((json) =>{
        document.querySelector('.testando').innerHTML = json[10].title;
    }).catch (() =>{
        alert('Erro na requisicao');
    })
}

 async function inserir() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {
            'Content-Type' : 'application/json'
            },
                body: JSON.stringify({
                title: 'Titulo da Requisicao',
                body: 'Corpo da Requisicao',
                userId:3888
                })     
        });
    let json = await response.json();
    console.log(json);
}
document.querySelector('.inserir').addEventListener('click', inserir);
document.querySelector('.callback').addEventListener('click', clicou);

async function clicou(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();
    alert(`Titulo do primeiro post: ${json[0].title}`)
}*/


async function readPosts(){
    let postArea = document.querySelector('.posts');
    postArea.innerHTML = 'Carregando...' 

    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();

    if(json.length > 0){
        postArea.innerHTML= '';

        for(let i in json){
            let postHtml = `<div> <h1> ${json[i].title}</h1>${json[i].body} </div>`;
            postArea.innerHTML += postHtml;
        }
    }else{
        postArea.innerHTML = 'Nenhum posts';
    }
}

async function addNewPost(title, body){
        await fetch( 'https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
                headers: {
                'Content-Type' : 'application/json'
                },
                    body: JSON.stringify({
                    title,
                    body,
                    userId:3888
                    }) 
        }
    );
    document.querySelector('#titleField').value = '';
    document.querySelector('#bodyField').value = '';

    readPosts();
}

document.querySelector('#inserirButton').addEventListener('click', () => {
    let title = document.querySelector('#titleField').value;
    let body = document.querySelector('#bodyField').value;

    if(title && body){
        addNewPost(title,body);
    }else {
        alert('preencha todos os campos');
    }
});
readPosts();

