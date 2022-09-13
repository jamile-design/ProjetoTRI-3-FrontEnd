let btnEnviar = document.getElementById('btn-enviar');
let form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
    // e.preventDefault();
    var formData = new FormData();

    let productCode = document.getElementById('product_code').value
    let productName = document.getElementById('product_name').value
    let description = document.getElementById('description').value
    let standardCost = document.getElementById('standard_cost').value
    let listPrice = document.getElementById('list_price').value
    let reorderLevel = document.getElementById('reorder_level').value
    let targetLevel = document.getElementById('target_level').value
    let quantityPerUnit = document.getElementById('quantity_per_unit').value
    let discontinued = document.getElementById('discontinued').value
    let minimunReorderQuantity = document.getElementById('minimun_reorder_quantity').value
    let category = document.getElementById('category').value
    let attachaments =  document.getElementById('attachaments')
    let status = document.getElementById('status').value
    let unitsInStock = document.getElementById('units_in_stock').value
    let supplyersId = document.getElementById('supplyers_id').value

        
    var myHeaders = new Headers();
    // myHeaders.append("Authorization", "Basic Y2FydmFsaG86UGFudGVyYW5lZ3JhMzAh");
    myHeaders.append("Authorization", `Basic ${btoa('Publico:usuariopublico')}`);

    formData.append("product_code", productCode)
    formData.append("product_name", productName)
    formData.append("description", description)
    formData.append("standard_cost", standardCost)
    formData.append("list_price", listPrice)
    formData.append("reorder_level", reorderLevel)
    formData.append("target_level", targetLevel)
    formData.append("quantity_per_unit", quantityPerUnit)
    formData.append("discontinued", discontinued)
    formData.append("minimun_reorder_quantity", minimunReorderQuantity)
    formData.append("category", category)
    formData.append("attachaments", attachaments.files[0], attachaments.value)
    formData.append("status", status)
    formData.append("UnitsInStock", unitsInStock)
    formData.append("supplyers_ids", "http://18.231.157.213/api/suppliers/"+supplyersId+"/")

    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formData,
      redirect: 'follow'
    };
    
    fetch("http://18.231.157.213/api/products/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
})