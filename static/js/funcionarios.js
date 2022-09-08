fetch('https://localhost:44314/funcionario/getultimasvendasfuncionario') /*pega o endpoint(caminho) de ultimas vendas da API*/
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
            <td> ${venda.nomeProduto}</td> <!--a coluna de ultimas vendas da tabela recebe a variavel venda que foi criada dentro do for  e que referencia todas as chaves do endpoint (nomeEmpregado, idProduto, nomeProduto) e pegando todos os valores da chave nomeProduto-->
            </tr>

            `;
        }

        placeholder.innerHTML = out; // a variavel placeholder que referencia a minha tabela dentro do HTML esta exibindo na tela o conteúdo da variavel OUT
    }) // termina meu for 

function listaDeEmpregados() {
    fetch('https://localhost:44314/funcionario/getall')
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
                
                <div class="borda-cinza">
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
                </div>
                    

                `;

                teste.onclick = function(){
                    mudaaba2(data)
                };
                placeholder.appendChild(teste);
            }
            
        })

    }

window.onload = function() {
    listaDeEmpregados();
}

