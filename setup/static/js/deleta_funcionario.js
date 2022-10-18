var dataurl = document.URL;
var splitbarra = dataurl.split("/");
let funcionarioQueSeraDeletado = splitbarra.find(item => item > 0);

let requestOptions = {
    method: 'DELETE',
    redirect: 'follow'
};
  
let URL = `https://desafiotrimestral.azurewebsites.net/funcionario/delete/${funcionarioQueSeraDeletado}`;
fetch(URL, requestOptions)
.then(response => response.json())
.then(result => {
    if (result.status === 200){
        alert('Funcionário deletado com SUCESSO.');
        window.location.href = '/funcionarios';
    }
    
    let formData = new FormData();

    formData.append('ativo', '0');

    let requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };

    fetch()
    .then(response => response.json())
    .then(result => {
        console.log(result);
        if(result.status === 200){
            alert('Produto Deletado com SUCESSO.');
            window.location.href = '/funcionarios';
        }

        let formData = new FormData();
        formData.append('ativo', '0');

        let requestOptions = {
            method: 'PATCH',
            body: formData,
            redirect: 'follow'
        }

       
        fetch(URL, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(err => console.log('Error ', err))
        
    })
    .catch(err => console.log('Error ', err))

    alert('Funcionario NÃO deletado.');
    window.location.href = '/funcionarios';
    
})
.catch(error => console.log('error', error));

