async function insereFuncionarios(results){
    let placeholder = document.querySelector("#empregados");
    let out = "";
    
    for(let data of results){
        let teste = document.createElement("div");
        teste.innerHTML = 
        `
        
        <div class="borda-cinza">
            <a href="funcionarios/${data.id} " style="text-decoration: none; color: white; text-align: center;">
                <img style="width: 100%; height: 10rem; margin-right: 0%; cursor: pointer;" id="foto" src="data:image/jpg;base64,${data.foto}">
                <h5 style="margin: 5%;">
                    Nome
                </h5>
                <p style="margin-top: 5px; font-size: 20px;">
                    ${data.nome} ${data.sobrenome}
                </p>
                <h5 style="margin: 5%;">
                    Cargo
                </h5>
                <p style="margin-top: 5px; font-size: 20px;">
                    ${data.cargo}
                </p>
            </a>

            <a href="deleta_funcionario/${data.id}"><img src="static/img/trash_ico.png" alt="Icone da lixeira" style="
                                                                                                            width: 27px; 
                                                                                                            height: 27px;
                                                                                                            float: right;
                                                                                                            padding: 2px;
                                                                                                            background:white;
                                                                                                            "></a>
                                                                                                        
            <a href="edita_funcionario/${data.id}"><img src="static/img/pencil_ico.png" alt="Icone da lixeira" style="
                                                                                                            width: 27px; 
                                                                                                            height: 27px;
                                                                                                            float: left;
                                                                                                            padding: 2px;
                                                                                                            background:white;
                                                                                                            "></a>    
        </div>
            

        `;

        placeholder.appendChild(teste);
    }
            
}
let loading = document.getElementById('principal')
loading.style.display = 'block'
function listaDeEmpregados() {
    
    fetch('https://desafiotrimestral.azurewebsites.net/funcionario/getall')
        .then((response) => response.json())
        .then((results) => {
            insereFuncionarios(results)            
        })
        .finally(() => {
            loading.style.display = 'none' 
        })
}

window.onload = function() {
    listaDeEmpregados();
}

