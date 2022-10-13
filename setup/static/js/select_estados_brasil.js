// let brasilSelect = document.getElementById('paises');
let brasilSelect = document.getElementById('paises');

brasilSelect.addEventListener('change', (e) => {

    if (brasilSelect.value === 'Brasil'){
        let estadosBrasileiros = `Estado
        <select id="estadosBrasil" name="estadosBrasil" class="form-control">
        <option value="AC">Acre</option>
        <option value="AL">Alagoas</option>
        <option value="AP">Amapá</option>
        <option value="AM">Amazonas</option>
        <option value="BA">Bahia</option>
        <option value="CE">Ceará</option>
        <option value="DF">Distrito Federal</option>
        <option value="ES">Espírito Santo</option>
        <option value="GO">Goiás</option>
        <option value="MA">Maranhão</option>
        <option value="MT">Mato Grosso</option>
        <option value="MS">Mato Grosso do Sul</option>
        <option value="MG">Minas Gerais</option>
        <option value="PA">Pará</option>
        <option value="PB">Paraíba</option>
        <option value="PR">Paraná</option>
        <option value="PE">Pernambuco</option>
        <option value="PI">Piauí</option>
        <option value="RJ">Rio de Janeiro</option>
        <option value="RN">Rio Grande do Norte</option>
        <option value="RS">Rio Grande do Sul</option>
        <option value="RO">Rondônia</option>
        <option value="RR">Roraima</option>
        <option value="SC">Santa Catarina</option>
        <option value="SP">São Paulo</option>
        <option value="SE">Sergipe</option>
        <option value="TO">Tocantins</option>
     </select>
        `
        let labelEstado = document.getElementById('label-estado');
    
        labelEstado.innerHTML = estadosBrasileiros;    
    }

    let selectEstadosBrasil = document.querySelector('#estadosBrasil');

    selectEstadosBrasil.addEventListener('change', () => {

        getAndIsertCitysOfBrazilianStates(selectEstadosBrasil.value);
       
    })

});

function getAndIsertCitysOfBrazilianStates(surnameCity) {
    let select = document.getElementById('cidades');
    let lastOption = select.lastChild;
    // select.removeChild
    while (lastOption){
        select.removeChild(lastOption);
        lastOption = select.lastChild;
    }

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer zd7rJpq2SoR5prY3J4UwL-uOmrA4f9zVEG6iXOeP8Q_VWOGfFPhOJJlSfkT5ix9fts0");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${surnameCity}/municipios`, requestOptions)
    .then(response => response.json())
    .then(result => {

        result.forEach(city => {

            let option = document.createElement('option');
            option.value = city.nome
            option.textContent = city.nome

            select.append(option);
        });
    })
    .catch(error => console.log('error', error));
}