///////
var dataurl = document.URL;
var splitbarra = dataurl.split("/");
var idURL = splitbarra.find(item => item > 0);

let produtoQueSeraDeletado = idURL;

var myHeaders = new Headers();
myHeaders.append("Authorization", `Basic ${btoa('Publico:usuariopublico')}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(`http://18.231.157.213/api/products/${produtoQueSeraDeletado}/`, requestOptions)
  .then(response => response.text())
  .then(result => {
    result = JSON.parse(result)
    
    let productCode = result.product_code
    let productName = result.product_name
    let description = result.description
    let standardCost = result.standard_cost 
    let listPrice = result.list_price 
    let reorderLevel = result.reorder_level 
    let targetLevel = result.target_level 
    let quantityPerUnit = result.quantity_per_unit 
    let minimunReorderQuantity = result.minimun_reorder_quantity 
    let category = result.category 
    let status = result.status  
    let unitsInStock = result.UnitsInStock 
    let supplyersId = result.supplyers_ids
    let discontinued = '1'

    var formdata = new FormData();
    formdata.append("discontinued", discontinued);
    formdata.append("product_code", productCode)
    formdata.append("product_name", productName)
    formdata.append("description", description)
    formdata.append("standard_cost", standardCost)
    formdata.append("list_price", listPrice)
    formdata.append("reorder_level", reorderLevel)
    formdata.append("target_level", targetLevel)
    formdata.append("quantity_per_unit", quantityPerUnit)
    formdata.append("minimun_reorder_quantity", minimunReorderQuantity)
    formdata.append("category", category)
    formdata.append("status", status)
    formdata.append("UnitsInStock", unitsInStock)
    formdata.append("supplyers_ids", supplyersId)
    
    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };
    
    fetch(`http://18.231.157.213/api/products/${produtoQueSeraDeletado}/`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

})
  .catch(error => console.log('error', error));

