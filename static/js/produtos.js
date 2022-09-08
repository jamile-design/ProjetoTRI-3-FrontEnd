function listaDeProdutos() {

fetch('http://18.231.157.213/api/products/', {
        headers: {
            'Authorization': `Basic ${btoa('carvalho:Panteranegra30!')}`
        }
    })
        .then(function(response){
            return response.json();
    })
    .then(function(results2){
        const result = results2.results;
        let placeholder = document.querySelector("#produtos");
        let out = "";
        for(let data2 of result){
            out +=
            
            `
                <a href='${data2.url.replace('http://18.231.157.213/api/products/', '')}'>
                    <div class="products">
                        <img style="width: 100%; height: 6rem; margin-right: 0%; cursor: pointer;" id="foto" src="${data2.attachaments}" onclick="mudaaba3('${data2.product_code}','${data2.product_name}','${data2.description}','${data2.standard_cost}','${data2.list_price}','${data2.quantity_per_unit}','${data2.category}','${data2.attachaments}', '${data2.UnitsInStock}', '${data2.minimun_reorder_quantity}')">
                        
                        <p style="margin-top: 5%; font-size: 15px;">
                            ${data2.product_name.replace('Northwind Traders', '')}
                            
                        </p> 
                    </div>
                </a>

            `;
        }
        // console.log(data2);
        placeholder.innerHTML = out;
        
    })


}

window.onload = function() {
    listaDeProdutos()
}