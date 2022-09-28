let dataurl = document.URL;
let splitbarra = dataurl.split("/");
let idURL = splitbarra.find(item => item > 0);

let nomeProdutoAlert;

let productCode = document.getElementById('product_code')
let productName = document.getElementById('product_name')
let description = document.getElementById('description')
let standardCost = document.getElementById('standard_cost')
let listPrice = document.getElementById('list_price')
let reorderLevel = document.getElementById('reorder_level')
let targetLevel = document.getElementById('target_level')
let quantityPerUnit = document.getElementById('quantity_per_unit')
let descontinuado = document.getElementById('descontinuado')
let continuado = document.getElementById('continuado')
let minimunReorderQuantity = document.getElementById('minimun_reorder_quantity')
let category = document.getElementById('category')
let attachaments =  document.getElementById('attachaments')
let status = document.getElementById('status')
let unitsInStock = document.getElementById('units_in_stock')
let supplyersId = document.getElementById('supplyers_id')
let tagImg = document.getElementById('fotoEscolhida')

let produtoQueSeraEditado = idURL;

var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic UHVibGljbzp1c3VhcmlvcHVibGljbw==");


var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(`http://18.231.157.213/api/products/${produtoQueSeraEditado}/`, requestOptions)
  .then(response => response.text())
  .then(result => {
    result = JSON.parse(result)
    
    productCode.value = result.product_code
    productName.value = result.product_name
    description.value = result.description
    standardCost.value = result.standard_cost 
    listPrice.value = result.list_price 
    reorderLevel.value = result.reorder_level 
    targetLevel.value = result.target_level 
    quantityPerUnit.value = result.quantity_per_unit 
    minimunReorderQuantity.value = result.minimun_reorder_quantity 
    category.value = result.category 
    status.value = result.status  
    unitsInStock.value = result.UnitsInStock 
    supplyersId.value = result.supplyers_ids
    tagImg.src = result.attachaments
    tagImg.style.display = 'block'

    nomeProdutoAlert =  result.product_name;

    if (result.discontinued === '0'){
      descontinuado.checked = true;
    }else{
      continuado.checked = true;
    }
    
})
  .catch(error => console.log('error', error));

//enviando a atualização com o verbo product_name
let btnEditar = document.getElementById('btn-editar');

btnEditar.addEventListener('click', () =>{
  let discontinued = document.querySelector('input[name="descontinuado"]:checked')


  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic UHVibGljbzp1c3VhcmlvcHVibGljbw==");

  var formData = new FormData();

  formData.append("product_code", productCode.value)
  formData.append("product_name", productName.value)
  formData.append("description", description.value)
  formData.append("standard_cost", standardCost.value)
  formData.append("list_price", listPrice.value)
  formData.append("reorder_level", reorderLevel.value)
  formData.append("target_level", targetLevel.value)
  formData.append("quantity_per_unit", quantityPerUnit.value)
  formData.append("discontinued", discontinued.value)
  formData.append("minimun_reorder_quantity", minimunReorderQuantity.value)
  formData.append("category", category.value)

  if (attachaments.files[0] == null){
    console.log('olá, não atualizando a imagem.');
  }else{
    formData.append("attachaments", attachaments.files[0], attachaments.value);
  }
  
  formData.append("status", status.value)
  formData.append("UnitsInStock", unitsInStock.value)
  formData.append("supplyers_ids", supplyersId.value)

  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: formData,
    redirect: 'follow'
  };

  fetch(`http://18.231.157.213/api/products/${idURL}/`, requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(result)
      // window.scrollTo(0, 0);
      alert(`Produto ${nomeProdutoAlert}, foi editado.`);
      window.location.href = '/produtos';
    })
    .catch(error => console.log('error', error));

})