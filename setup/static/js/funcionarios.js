fetch('https://desafiotrimestral.azurewebsites.net/funcionario/getultimasvendasfuncionario') /*pega o endpoint(caminho) de ultimas vendas da API*/
    .then(function(response){
        return response.json();
    }) /*função passa dados da API para JSON */

    .then(function(vendas){ /*criando funcao de ultimas vendas*/
        let placeholder = document.querySelector("#data-output"); // variavel recebe Elemento HTML responsavel pela tabela de ultimas vendas, variavel recebe por meio de um ID

        let out = "";// variavel recebe o valor nulo

        for(let venda of vendas){ // for recebe uma variavel chamada venda que armazena a função vendas

            out += // variavel out deixa de ser nula e recebe os elementos HTML que eu quero que seja repetidos enquanto os valores do endpoint de ultimas vendas existirem 
            
            ` <!--alterando valores de dentro da tabela de ultimas vendas -->
            <tr>
            <td> ${venda.nomeEmpregado}</td> <!--a coluna de empregados da tabela recebe a variavel venda que foi criada dentro do for  e que referencia todas as chaves do endpoint (nomeEmpregado, idProduto, nomeProduto) e pegando todos os valores da chave nomeEmpregado-->
            <td> ${venda.nomeProduto.replace('db_desafio_tri Traders ', '')}</td> <!--a coluna de ultimas vendas da tabela recebe a variavel venda que foi criada dentro do for  e que referencia todas as chaves do endpoint (nomeEmpregado, idProduto, nomeProduto) e pegando todos os valores da chave nomeProduto-->
            </tr>

            `;
        }

        placeholder.innerHTML = out; // a variavel placeholder que referencia a minha tabela dentro do HTML esta exibindo na tela o conteúdo da variavel OUT
    }) // termina meu for 

function listaDeEmpregados() {
    fetch('https://desafiotrimestral.azurewebsites.net/funcionario/getall')
        .then(function(response){
            return response.json();
        })
        .then(function(results){
            let placeholder = document.querySelector("#empregados");
            let out = "";
            // results = [{}, {}, {}]
            // data = {nome: felipe, sobrenome: rodrigues}...;
            
            for(let data of results){
                let teste = document.createElement("div");
                teste.innerHTML = 
                `
                
                <div class="borda-cinza"">
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
                </div>
                    

                `;

                // teste.onclick = function(){
                //     mudaaba2(data)
                // };
                placeholder.appendChild(teste);
            }
            
        })

    }

window.onload = function() {
    listaDeEmpregados();
}

function mudaaba2(data) {
    console.log(data);
    
    const divempregados = document.getElementById('empregados');
    const divempregados2 = document.getElementById('empregados2');
    if (divempregados.style.display === 'block' && divempregados2.style.display === 'none') {
        divempregados.style.display = 'none';
        divempregados2.style.display = 'block';
    }

    let empregadosPai = document.querySelector('#empregados2');

let out = `<div class="row">
            <div class="col-sm-12" style="margin-left: -16rem; margin-top: 0rem;">	
                <span><strong>Nome: </strong>${data.nome === 'null' ? '' : data.nome} ${data.sobrenome === 'null' ? '' : data.sobrenome}</span>
            </div>
        </div>
        <div class="row">	
            <div class="col-sm-12" style="margin-left: -250px;">	
                <span><strong>Cargo: </strong>${data.cargo === 'null' ? '' : data.cargo}</span>
            </div> 
        </div>
        <br/>
        <div class="row">
            <div class="col-sm-6" style= "margin-left: 8rem;">
                <img style="width: 21rem; height: 20rem; margin-top: 0px;" id="foto" src="data:image/jpg;base64,${data.foto}">
            </div>
            <div class="col-sm-6" style="text-align: left; margin-left: 43rem; margin-top: -19rem;">
                <span><strong>Id do empregado: </strong>${data.id === 'null' ? '' : data.id}</span>
                <br/>
                <span><strong>Telefone comercial: </strong>${data.telefoneComercial === 'null' ? '' : data.telefoneComercial}</span>
                <br/>
                <span><strong>Telefone residencial: </strong>${data.telefoneResidencial === 'null' ? '' : data.telefoneResidencial}</span>
                <br/>
                <span><strong>Telefone celular: </strong>${data.telefoneCelular === 'null' ? '' : data.telefoneCelular}</span>
                <br/>
                <span><strong>Endereço residencial:</strong>${data.endereco === 'null' ? '' : data.endereco}</span>
                <br/>
                <span><strong>Cidade: </strong>${data.cidade === 'null' ? '' : data.cidade}</span>
                <br/>
                <span><strong>Estado: </strong>${data.estado === 'null' ? '' : data.estado}</span>
                <br/>
                <span><strong>Código postal: </strong>${data.codigoPostal === 'null' ? '' : data.codigoPostal}</span>
                <br/>
                <span><strong>País: </strong>${data.pais === 'null' ? '' : data.pais}</span>
                <br/>
                <span><strong>Website: </strong>${data.website === 'null' ? '' : data.website}</span>
                <br/>
                <span><strong>Observação: </strong>${data.observacao === 'null' ? '' : data.observacao}</span>
                <br/>
            </div>
        </div>
    `;
    empregadosPai.innerHTML = out;
}
