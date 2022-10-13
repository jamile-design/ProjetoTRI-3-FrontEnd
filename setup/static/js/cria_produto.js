function required(arrErros, elements){
  elements.forEach((item) =>{
    if (item.value === null || item.value === '' || item.value.length === 0){
      let nomeCampo = `\n  ${item.placeholder}`
      arrErros.push(nomeCampo);
    }
  });
}

let btnEnviar = document.getElementById('btn-enviar');
// let form = document.querySelector('form');
let attachaments =  document.getElementById('attachaments')
let fotoEscolhida = document.getElementById('fotoEscolhida');

function readImage() {
  if (this.files && this.files[0]) {
    var file = new FileReader();

    file.onload = function(e) {
      fotoEscolhida.src = e.target.result;
    };       
    file.readAsDataURL(this.files[0]);
  }
  fotoEscolhida.style.display = 'block'
}

attachaments.addEventListener("change", readImage, false);

btnEnviar.addEventListener('click', (e)=>{
    e.preventDefault();
    
    let productCode = document.getElementById('product_code').value;
    let productName = document.getElementById('product_name').value
    let description = document.getElementById('description').value
    let standardCost = document.getElementById('standard_cost').value
    let listPrice = document.getElementById('list_price').value
    let reorderLevel = document.getElementById('reorder_level').value
    let targetLevel = document.getElementById('target_level').value
    let quantityPerUnit = document.getElementById('quantity_per_unit').value
    let discontinued = document.querySelector('input[name="discontinuado"]:checked').value
    let minimunReorderQuantity = document.getElementById('minimun_reorder_quantity').value
    let category = document.getElementById('category').value
    let status = document.getElementById('status').value
    let unitsInStock = document.getElementById('units_in_stock').value
    let supplyersId = document.getElementById('supplyers_id').value
    
    
    var myHeaders = new Headers();
    // myHeaders.append("Authorization", "Basic Y2FydmFsaG86UGFudGVyYW5lZ3JhMzAh");
    var formData = new FormData();

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
    if (attachaments.files[0] == null){
      console.log('Sem imagem.');
    }else{
      formData.append("attachaments", attachaments.files[0], attachaments.value);
    }
    // formData.append("attachaments", attachaments.files[0], attachaments.value)
    formData.append("status", status)
    formData.append("UnitsInStock", unitsInStock)
    formData.append("supplyers_ids", supplyersId)
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formData,
      redirect: 'follow'
    };
    
    let statusRequest;

    let arrElements = document.querySelectorAll("input");    
    let erros = []


    required(erros, arrElements);

    if (erros.length > 0){
      alert(`Verifique os campos: ${erros}, eles não podem estar em branco.`);
    }else{
      fetch("http://18.231.157.213/api/products/", requestOptions)
        .then(response => {
          response.text()
          statusRequest = response.status;
        })
        .then(result => {
          console.log(result)
          if (statusRequest === 200 || statusRequest === 201 || statusRequest === 202){
            window.location.href = '/produtos'; //redireciona da página de criar produto para a de produtos.
          }

        })
        .catch(error => console.log('error', error))
        .finally(() =>{
          console.log('requisição feita.')
        });
    }
})