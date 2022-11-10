const selectOfCountrys = document.getElementById('paises');
const selectOfStates = document.getElementById('estadosBrasil');
const selectOfCitys = document.getElementById('cidades');
let arrayResults = []

let requestOptions = {
    method: 'GET',
    redirect: 'follow'
};
let load = document.getElementById('principal');
let main = document.querySelector('main');

fetch('https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json', requestOptions)
.then(response => response.json())
.then(result => {
    // console.time('Runtime');
    arrayResults = result;
    insertCountrysStatesAndCitys(result);    
    // console.timeEnd('Runtime');

    load.style.display = 'none';
    main.style.display = 'flex';

    var dataurl = document.URL;
    var splitbarra = dataurl.split("/");
    let funcionarioQueSeraEditado = splitbarra.find(item => item > 0);

    let nome = document.getElementById('Nome');
    let anexo = document.getElementById('Anexo');
    let sobrenome = document.getElementById('Sobrenome');
    let cargo = document.getElementById('Cargo');
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

    const btnSend = document.getElementById('btn-editar');


    let URL= `https://desafiotrimestral.azurewebsites.net/funcionario/get/${funcionarioQueSeraEditado}`;

    let requestOptions = {
        method: 'GET', 
        redirect: 'follow'
    }

    fetch(URL, requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log(result);

        nome.value = result.nome;
        fotoEscolhida.src = 'data:image/jpg;base64,'+result.foto;
        fotoEscolhida.style.display = 'block';
        sobrenome.value = result.sobrenome;
        cargo.value = result.cargo;
        telefoneComercial.value = result.telefoneComercial;
        telefoneResidencial.value = result.telefoneResidencial;
        telefoneCelular.value = result.telefoneCelular;
        paises.value = result.pais; //aqui vem o país
        insertStatesInSelectWithCountryName(arrayResults, result.pais, selectOfStates);
        estados.value = result.estado;
        insertCitysInSelectWithStateName(arrayResults, result.estado, selectOfCitys)
        cidades.value = result.cidade; //aqui vem a cidade
        enderecoResidencial.value = result.endereco;
        codigoPostal.value = result.codigoPostal;
        website.value = result.website;
        observacao.value = result.observacao;
        let tbody = document.getElementById('salary_table');
        insertDataOfSalary(tbody, funcionarioQueSeraEditado);

        if (!result.ativo){
            funcDesativo.checked = true;
        }

        URL = `https://desafiotrimestral.azurewebsites.net/funcionario/update/${funcionarioQueSeraEditado}`

        btnSend.addEventListener('click', (e) => {
            e.preventDefault(); 

            let formData = new FormData();
            formData.append('nome', nome.value);
            formData.append('sobrenome', sobrenome.value);
            formData.append('cargo', cargo.value);
            formData.append('telefoneComercial', telefoneComercial.value);
            formData.append('telefoneResidencial', telefoneResidencial.value);
            formData.append('telefoneCelular', telefoneCelular.value);
            formData.append('endereco', enderecoResidencial.value);
            formData.append('codigoPostal', codigoPostal.value);
            formData.append('cidade', cidades.value);
            formData.append('pais', paises.value);
            formData.append('estado', estados.value);
            formData.append('observacao', observacao.value);
            formData.append('website', website.value);
            formData.append('fotoArquivo', anexo.files[0], anexo.value);
            // if (anexo.files[0]){ 
            //     formData.append('fotoArquivo', anexo.files[0], anexo.value);
            // }else {                
            //     formData.append('FotoArquivo', fotoEscolhida.src.replace('data:image/jpg;base64,', ''));
            //     console.log(fotoEscolhida.src.replace('data:image/jpg;base64,', ''));
            // } 
            let ativo = document.querySelector('input[name="ativo"]:checked'); 
            formData.append('ativo', ativo.value);

            let requestOption = {
                
                method: 'PUT',
                // headers: myHeaders,
                body:formData,
                redirect: 'follow',
            } 
            
            fetch(URL, requestOption) 
            .then(response => response.json()) 
            .then(result => {
                console.log(result); 
            }) 
            .catch(err => console.log('Error', err)) })

    })
    .catch(err => console.log('Error ', err))
})
.catch(error => console.log('error', error))


function insertCountrysStatesAndCitys(result) {
    const countrysNoDuplicated = new Set();
    result.forEach(country => { 
        countrysNoDuplicated.add(country.country);
    });

    cleanOptionsOfSelectWithId('paises');
    countrysNoDuplicated.forEach(item => { 
        let temporaryOption = document.createElement('option');
        temporaryOption.value = item;
        temporaryOption.textContent = item;

        selectOfCountrys.append(temporaryOption);
    })
    
    selectOfCountrys.addEventListener('change', () => {
        const StatesNoDuplicated = new Set();
        result.forEach(country => { 
            if (country.country == selectOfCountrys.value){
                // console.log(country);
                StatesNoDuplicated.add(country.subcountry);
            }

        })

        cleanOptionsOfSelectWithId('estadosBrasil');
        StatesNoDuplicated.forEach(state => {
            let temporaryOption = document.createElement('option');
            temporaryOption.value = state;
            temporaryOption.textContent = state;

            selectOfStates.append(temporaryOption);
        })
        
    })

    selectOfStates.addEventListener('change', () => {
        const CitysNoDuplicated = new Set();        
        result.forEach(country => { 
            if (country.subcountry == selectOfStates.value){
                CitysNoDuplicated.add(country.name);
            }            
        })
        // console.log(CitysNoDuplicated);
        
        
        cleanOptionsOfSelectWithId('cidades');
        CitysNoDuplicated.forEach(city => {
            let temporaryOption = document.createElement('option');
            temporaryOption.value = city;
            temporaryOption.textContent = city;

            selectOfCitys.append(temporaryOption);
        })
    })
}

function cleanOptionsOfSelectWithId(selectId){
    let select = document.getElementById(selectId);
    let lastOption = select.lastChild

    while (lastOption){
        select.removeChild(lastOption);
        lastOption = select.lastChild
    }
}

function insertStatesInSelectWithCountryName(array, nameCountry, select){
    const StatesNoDuplicated = new Set();
    array.forEach((item) => {
        if (item.country == nameCountry){
            // console.log(item.country)
            StatesNoDuplicated.add(item.subcountry);
        }
    })

    cleanOptionsOfSelectWithId('estadosBrasil');
    StatesNoDuplicated.forEach(item => {
        let temporaryOption = document.createElement('option');
        temporaryOption.value = item;
        temporaryOption.textContent = item;
        // console.log(temporaryOption)
        select.append(temporaryOption);
    })
    // console.log(select)
}

function insertCitysInSelectWithStateName(array, stateName, select){
    const CitysNoDuplicated = new Set();        
    array.forEach(item => { 
        if (item.subcountry == stateName){
            CitysNoDuplicated.add(item.name);
        }            
    })
    // console.log(CitysNoDuplicated);
    
    
    cleanOptionsOfSelectWithId('cidades');
    CitysNoDuplicated.forEach(city => {
        let temporaryOption = document.createElement('option');
        temporaryOption.value = city;
        temporaryOption.textContent = city;
        
        select.append(temporaryOption);
    })
}

function insertDataOfSalary(tbody, employeeId){

    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }

    fetch(`https://desafiotrimestral.azurewebsites.net/salario/getsalariobyfuncionario/${employeeId}`, requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log(result);
        if (!result.length){
            console.log('Nenhum salário com este funcionário');
            let tr = document.createElement('tr');
            let tdWithoutSalary = document.createElement('td');
            tdWithoutSalary.textContent = 'Nenhum salário adicionado.'
            tdWithoutSalary.classList.add('salario_tabela');
            tr.append(tdWithoutSalary);

            tbody.append(tr);
        }else{

            result.forEach(item => {
                let tdSalary = document.createElement('td');
                let tdData = document.createElement('td');
                let tr = document.createElement('tr');
                tdSalary.textContent = item.salarioFuncionario;

                let date = new Date(item.dataDoSalario);
                let dia = date.getDate().toString()
                let mes = (date.getMonth()+1).toString()
                let ano = date.getFullYear();

                tdData.textContent = `${dia}/${mes}/${ano}`;

                tdSalary.classList.add('salario_tabela');
                tdData.classList.add('salario_tabela');


                tr.append(tdSalary);
                tr.append(tdData);

                tbody.append(tr);
            });
        }
    })
    .catch(err => console.log('Error', err))

}