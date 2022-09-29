let loading = document.getElementById('principal')
loading.style.display = 'block'
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
    }) 
    .finally(() => {
        loading.style.display = 'none' 
    })

