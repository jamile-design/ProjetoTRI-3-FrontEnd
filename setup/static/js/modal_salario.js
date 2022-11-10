let url = document.URL;
let arrElementosURL = url.split("/");
let funcionarioId = arrElementosURL.find(item => item > 0);

let modalContainer = document.getElementById('modal_salario');

let btnModal = document.getElementById('btn_modal');
let btnCancelar = document.getElementById('btn_cancelar');
let btnSalvar = document.getElementById('btn_salvar');
let loading = document.getElementById('principal');
let inputSalario = document.getElementById('salario');

loading.style.display = 'none';

btnModal.addEventListener('click', (e) => {
    e.preventDefault();
    modalContainer.style.display = 'block';
    modalContainer.style.display = 'flex';
});

btnCancelar.addEventListener('click', (e) => {
    console.log(inputSalario);
    inputSalario.value = "";
    modalContainer.style.display = 'none';
});

btnSalvar.addEventListener('click', (e) =>  {
    console.log(loading)
    loading.style.display = 'block';

    // let inputSalario = document.getElementById('inputSalario');
    console.log(inputSalario.value);

    let urlFetch = 'https://desafiotrimestral.azurewebsites.net/salario/postsalario';

    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    let raw = JSON.stringify({
        "idFuncionario": funcionarioId.replace('"', ""),
        "salarioFuncionario": salario.value.replace('"', ""),
    });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(urlFetch, requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log(result);

        if (result.status === 200) {
            salario.value = "";
            modalContainer.style.display = 'none';
            alert('Salário registrado');
        }
    })
    .catch(err => console.log('Error', err))
    .finally(() => {
        loading.style.display = 'none';
    })
});