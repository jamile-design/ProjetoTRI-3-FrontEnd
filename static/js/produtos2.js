async function  insereProdutos(data){
    let divProduto = ''
    let div = document.getElementById('produtos2')
    let listaComProdutos = data.results
    console.log(typeof listaComProdutos);
    for (produto of listaComProdutos){
        divProduto += `
        <div class="products" style="vertical-align:top; width:20%;">
            <a style="text-decoration: none; color:white;" href='${produto.url.replace('http://18.231.157.213/api/products/' , '')}' >
                <img style="width: 100%; height: 10rem; margin-right: 0%; cursor: pointer;" id="foto" src="${produto.attachaments}">
        
                <p style="margin-top: 5%; font-size: 22px;text-weight:bold; text-align:center; vertical-align: top;">
                    ${produto.product_name.replace('Northwind Traders ', '')}
                </p>
            </a>                
         </div>
        `
        div.innerHTML = divProduto
    }
}

function listaDeProdutos() {

    fetch('http://18.231.157.213/api/products/', {
        headers: {'Authorization': `Basic ${btoa('Publico:usuariopublico')}` }
    })
    .then((results) => {
        results.json().then(data => {
            insereProdutos(data)
        })
        
    })
    .catch((err) => console.log(err))
    //colocar o load na tela
    // .finally(() => {

    // })
}

window.onload = function() {
    listaDeProdutos();
}

   