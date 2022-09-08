
function mudaAba(abas) {
    const divHome = document.getElementById('home');
    const divEmpregados = document.getElementById('empregados');
    const divProdutos = document.getElementById('produtos');
    const divempregados2 = document.getElementById('empregados2');
    const divprodutos2 = document.getElementById('produtos2');
    if (abas === 'home') {
        divHome.style.display = 'block'; // aparecer
        divEmpregados.style.display = 'none'; 
        divProdutos.style.display = 'none';
    } else if (abas === 'empregados') {
        divHome.style.display = 'none';
        divEmpregados.style.display = 'block'; // aparecer
        divProdutos.style.display = 'none';
    } else {
        divHome.style.display = 'none';
        divEmpregados.style.display = 'none'; 
        divProdutos.style.display = 'block'; // aparecer
    }
    divempregados2.style.display = 'none';
    divprodutos2.style.display = 'none';
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
function mudaaba3(product_code, product_name, description, standard_cost, list_price, quantity_per_unit, category, attachaments, UnitsInStock, minimun_reorder_quantity) {
    const divprodutos = document.getElementById('produtos');
    const divprodutos2 = document.getElementById('produtos2');
    // if (divprodutos.style.display === 'block' && divprodutos2.style.display === 'none') {
    //     divprodutos.style.display = 'none';
    //     divprodutos2.style.display = 'block';
    // }
    var estoque = ''
    if (UnitsInStock < minimun_reorder_quantity){
        estoque ='indisponível'
    }
    else {
        estoque = UnitsInStock
    }

    let produtos2Pai = document.querySelector('#produtos2');
    let out = ''
    out = `
        <div class="row">
                <div class="col-sm-12" style="margin-left: 200px; margin-top: 0rem;">	
                    <span><strong>Nome do produto: </strong>${product_name}</span>
                </div>
            </div>
            <br/>
            <div class="row">
                <div class="col-sm-6" style= "margin-left: 8rem;">
                    <img style="width: 21rem; height: 20rem; margin-top: -23px; margin-left: 73px;" id="foto" src="${attachaments}">
                </div>
                <div class="col-sm-6" style="text-align: left; margin-left: 43rem; margin-top: -19rem;">
                    <span><strong>Código do produto: </strong>${product_code}</span>
                    <br/>
                    <span><strong>Nome do produto: </strong>${product_name}</span>
                    <br/>
                    <span><strong>Descrição do produto: </strong>${description}</span>
                    <br/>
                    <span><strong>Custo: </strong>${standard_cost}</span>
                    <br/>
                    <span><strong>Preço de venda: </strong>${list_price}</span>
                    <br/>
                    <span><strong>Status: </strong>${quantity_per_unit}</span>
                    <br/>
                    <span><strong>Categoria: </strong>${category}</span>
                    <br/>
                    <span style="${estoque === 'indisponível' ? 'color: red;' : ''}"><strong>Estoque: </strong>${estoque}</span>
                </div>
            </div>
        `;
    // }
    if (estoque == ''){
        out = `
        <div class="row">
                <div class="col-sm-12" style="margin-left: 200px; margin-top: 0rem;">	
                    <span><strong>Nome do produto: </strong>${product_name}</span>
                </div>
            </div>
            <br/>
            <div class="row">
                <div class="col-sm-6" style= "margin-left: 8rem;">
                    <img style="width: 21rem; height: 20rem; margin-top: -23px; margin-left: 73px;" id="foto" src="${attachaments}">
                </div>
                <div class="col-sm-6" style="text-align: left; margin-left: 43rem; margin-top: -19rem;">
                    <span><strong>Código do produto: </strong>${product_code}</span>
                    <br/>
                    <span><strong>Nome do produto: </strong>${product_name}</span>
                    <br/>
                    <span><strong>Descrição do produto: </strong>${description}</span>
                    <br/>
                    <span><strong>Custo: </strong>${standard_cost}</span>
                    <br/>
                    <span><strong>Preço de venda: </strong>${list_price}</span>
                    <br/>
                    <span><strong>Status: </strong>${quantity_per_unit}</span>
                    <br/>
                    <span><strong>Categoria: </strong>${category}</span>
                    <br/>
                    
                </div>
            </div>
    `;}
    
    produtos2Pai.innerHTML = out;
    
}

window.onload = function() {
    mudaAba();
    mudaaba2();
    mudaaba3();
}