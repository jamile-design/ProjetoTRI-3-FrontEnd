const onlyNumbers = document.querySelectorAll('.only_numbers');
const arrTelRequireds = document.querySelectorAll('.dez_digito_obrigatorio');
const inputsOnlyLetter = document.querySelectorAll('.letras');
const arrAllInputs = document.querySelectorAll('input');
// let regexAlfabeto = /[a-zA-Z]/ig;

let regexOfTel = /["´'{}[\]!@#$%¨&*()_+ªº`^~;:?£¢¬/.,°^âêôíãõêãõ~eáóéàèò|\a-zA-Z-]/g;
let regexWithoutLetter = /["'{}[\]!@#$%¨&*()_+ªº^~;:?£¢¬/.,°|\-0-9]/ig;
let arrErrorsTel = [];
let arrEmptyFields =[];
// let arrFieldsOfNotLetter = [];
// let arrPostalCode = [];

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

const btnSend = document.getElementById('btn-enviar');


function restrinctChar(field, regex, message){
    function checkchar(e, pattern){
        const char = String.fromCharCode(e.keyCode);
    
        if (char.match(pattern)){
            // console.log(char);
            return true;
        }
    }

    field.addEventListener('keypress', (e) => {
        if (checkchar(e, regex)){
            e.preventDefault();
            alert(message);
        }
    });
}

onlyNumbers.forEach(input =>{
    restrinctChar(input, regexOfTel, 'Este campo só pode ter números.');
});

inputsOnlyLetter.forEach(input => {
    restrinctChar(input, regexWithoutLetter, 'Este campo só pode ter letras.')
});

btnSend.addEventListener('click', (e) =>{
    e.preventDefault();

    arrTelRequireds.forEach(item =>{
        if (item.value.length < 10){
            arrErrorsTel.push(`\n ${item.placeholder}`)
        }
    })

    arrAllInputs.forEach(input => {
        if  (input.value === null || input.value == '' || input.value.length == 0){
            arrEmptyFields.push(`\n${input.placeholder}`);
        }
    })

    if (arrEmptyFields.length > 0){
        if(observacao.value.length < 1){
            observacao.value = 'Empty';
        }else{
            alert(`Os campos ${arrEmptyFields}\nnão podem estar vazios.`);
            arrEmptyFields.length = 0;
        }
    }
    else if (arrErrorsTel.length > 0){
        alert(`Os campos ${arrErrorsTel}\n não podem ter menos de 10 dígitos.`);
        arrErrorsTel.length = 0;
    }
    else if (codigoPostal.value.length < 6){
        alert(`O campo ${codigoPostal.placeholder}\n não podem ter menos de 6 dígitos.`);
        // arrPostalCode.length = 0;
    }
    else{
        alert('form was send.');
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        // let formData = new FormData();
        

        // formData.append('nome', nome.value);
        // formData.append('sobrenome', sobrenome.value);
        // formData.append('cargo', cargo.value);
        // formData.append('telefoneComercial', telefoneComercial.value);
        // formData.append('telefoneResidencial', telefoneResidencial.value);
        // formData.append('telefoneCelular', telefoneCelular.value);
        // formData.append('endereco', enderecoResidencial.value);
        // formData.append('codigoPostal', codigoPostal.value);	
        // formData.append('cidade', cidades.value);
        // formData.append('pais', paises.value);
        // formData.append('estado', estados.value);
        // formData.append('observacao', observacao.value);
        // formData.append('website', website.value);
        // formData.append(, );// aqui iria o salário
        // formData.append('foto', anexo.files[0], anexo.value); 

        let raw = JSON.stringify({
            "nome": nome.value,
            "sobrenome": sobrenome.value,
            "cargo": cargo.value,
            "telefoneComercial": telefoneComercial.value,
            "telefoneResidencial": telefoneResidencial.value,
            "telefoneCelular": telefoneCelular.value,
            "endereco": enderecoResidencial.value,
            "cidade": cidades.value,
            "estado": estados.value,
            "codigoPostal": codigoPostal.value,
            "pais": paises.value,
            "website": website.value,
            "observacao": observacao.value,
            // "foto": anexo.files[0]
            "foto": null
        })
    
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        }

        const URLCreateEmployee = 'https://desafiotrimestral.azurewebsites.net/funcionario/post';

        const statusResponse = 0;
        fetch(URLCreateEmployee, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            if (statusResponse === 200){
                alert('Funcionario criado.');
                window.location.href = '/funcionarios'
            }else{
                 alert('Funcionario não criado, tente novamente.');
            }
        })
        .catch(err => console.log(err))
    }
});
