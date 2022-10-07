let telefonesForm = document.querySelectorAll('.telefone');
let inputsSomenteLetras = document.querySelectorAll('.letras');
let regexTelefone = /[a-zA-Z]/ig;
let regex2Telefone = /["!@#$%¨&*()_+ªº`^~;:?/.,°|\-]/g;
let regexNãoLetras = /["!@#$%¨&*()_+ªº`^~;:?/.,°|\0-9-]/ig;
let arrTelephoneErros = [];
let arrEmptyErros =[]
let arrFieldsOfNotLetter = [];
let arrInputs = document.querySelectorAll('input');

let btnEnviar = document.getElementById('btn-enviar');

btnEnviar.addEventListener('click', (e) =>{
    e.preventDefault();

    telefonesForm.forEach(item =>{
        if (item.value.match(regexTelefone) || item.value.match(regex2Telefone)) {
            arrTelephoneErros.push(`\n${item.placeholder}`);
            item.classList.add('invalid-input');
            // item.style.borderColor = 'red';
            // item.style.borderStyle = 'solid';
            // item.style.borderWidth = 'thick';
            console.log(item);
        }
    });

    inputsSomenteLetras.forEach(item => {
        if (item.value.match(regexNãoLetras)){
            arrFieldsOfNotLetter.push(`\n${item.placeholder}`);
        }
    });

    arrInputs.forEach(input => {
        if  (input.value === null || input.value == '' || input.length ==0){
            arrEmptyErros.push(`\n${input.placeholder}`);
        }
    })

    if (arrFieldsOfNotLetter.length > 0){
        alert(`Os campos ${arrFieldsOfNotLetter} \nsó podem ter letras`);
        arrFieldsOfNotLetter.length = 0;
    }
    else if (arrTelephoneErros.length > 0){
        alert(`Os campos ${arrTelephoneErros}\n não podem ter letras ou caracteres especiais.`);
        arrTelephoneErros.length = 0;
    }
    else if (arrEmptyErros.length > 0 || arrEmptyErros.length !== 0){
        alert(`Os campos ${arrEmptyErros}\n não podem estar vazios.`);
        arrEmptyErros.length = 0;
    }
    else{
        alert('form was send.');
        let myHeaders = new Headers();

        let formData = new FormData();

        let name = document.getElementById('Nome');
        // let anexo = document.getElementById('Anexo');
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

        formData.append('first_name', name.value);
        formData.append('last_name', sobrenome.value);
        formData.append('job_title', cargo.value);
        formData.append('business_phone', telefoneComercial.value);
        formData.append('home_phone', telefoneResidencial.value);
        formData.append('mobile_phone', telefoneCelular.value);
        formData.append('address', enderecoResidencial.value);
        formData.append('zip_postal_code', codigoPostal.value);	
        formData.append('city', cidades.value);
        formData.append('country_region', paises.value);
        formData.append('state_province', estados.value);
        formData.append('notes', observacao.value);
        formData.append('web_page', website.value);
        // formData.append(, );// aqui iria o salário
        // formData.append('attachments', anexo.files[0], anexo.value);
    
        let requestOptions = {
            method: 'POST',
            body: formData,
            redirect: 'follow'
        }

        const URLCriarFuncionario = 'https://desafiotrimestral.azurewebsites.net/funcionario/post';

        fetch(URLCriarFuncionario, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(err => console.log(err))
    }
});
