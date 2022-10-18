var dataurl = document.URL;
var splitbarra = dataurl.split("/");
let funcionarioQueSeraEditado = splitbarra.find(item => item > 0);

let nome = document.getElementById('Nome');
let anexo = document.getElementById('Anexo');
let sobrenome = document.getElementById('Sobrenome');
let cargo = document.getElementById('Cargo');
let salario = document.getElementById('Salario');
let telefoneComercial = document.getElementById('telefone_comercial');
let telefoneResidencial = document.getElementById('telefone_residencial');
let telefoneCelular = document.getElementById('telefone_celular');
let paises = document.getElementById('paises');
let estados = document.getElementById('estadosBrasil');
let cidades = document.getElementById('cidades');
let enderecoResidencial = document.getElementById('endereco_residencial');
let codigoPostal = document.getElementById('codigo_postal');
let website = document.getElementById('website');
let observacao = document.getElementById('observacao');
let fotoEscolhida = document.getElementById('fotoEscolhida');
let funcAtivo = document.getElementById('ativo');
let funcDesativo = document.getElementById('desativo');

funcAtivo.checked = true;

const btnSend = document.getElementById('btn-enviar');

alert('Edita funcionario.', funcionarioQueSeraEditado);

let URL= `https://desafiotrimestral.azurewebsites.net/funcionario/update/${funcionarioQueSeraEditado}`;

let requestOptions = {
    method: 'GET', 
    redirect: 'follow'
}

fetch(URL, requestOptions)
.then(response => response.json())
.then(result => {
    console.log(result);
    nome.value = result.nome;

})
.catch(err => console.log('Error ', err))