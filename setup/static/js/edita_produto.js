
let productCode = document.getElementById('product_code')
let productName = document.getElementById('product_name')
let description = document.getElementById('description')
let standardCost = document.getElementById('standard_cost')
let listPrice = document.getElementById('list_price')
let reorderLevel = document.getElementById('reorder_level')
let targetLevel = document.getElementById('target_level')
let quantityPerUnit = document.getElementById('quantity_per_unit')
let discontinued = document.getElementById('discontinued')
let minimunReorderQuantity = document.getElementById('minimun_reorder_quantity')
let category = document.getElementById('category')
let attachaments =  document.getElementById('attachaments')
let status = document.getElementById('status')
let unitsInStock = document.getElementById('units_in_stock')
let supplyersId = document.getElementById('supplyers_id')
let tagImg = document.getElementById('foto')

let produtoQueSeraEditado;

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
    console.log(result)
    result = JSON.parse(result)

    productCode.value = result.product_code
    productName.value = result.product_name
    description.value = result.description
    standardCost.value = result.standard_cost 
    listPrice.value = result.list_price 
    reorderLevel.value = result.reorder_level 
    targetLevel.value = result.target_level 
    quantityPerUnit.value = result.quantity_per_unit 
    discontinued.value = result.discontinued 
    minimunReorderQuantity.value = result.minimun_reorder_quantity 
    category.value = result.category 
    status.value = result.status  
    unitsInStock.value = result.UnitsInStock 
    supId = result.supplyers_ids.replace('http://18.231.157.213/api/suppliers/', '').replace('/', '')
    supplyersId.value = supId

    tagImg['src'] = result.attachaments
    tagImg.style = 'block'
    console.log(result.attachaments)
})
  .catch(error => console.log('error', error));
  