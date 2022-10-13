
const selectOfCountrys = document.getElementById('paises');
const selectOfStates = document.getElementById('estadosBrasil');
const selectOfCitys = document.getElementById('cidades');

let requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch('https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json', requestOptions)
.then(response => response.json())
.then(result => {
    // console.time('Runtime');
    insertCountrysStatesAndCitys(result);    
    // console.timeEnd('Runtime');
})
.catch(error => console.log('error', error));



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
                StatesNoDuplicated.add(country.subcountry);
            }
        })
        // console.log(StatesNoDuplicated);

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