// let div = document.getElementById('produtos2')
// var arrProdutos = []
// async function  insereProdutos(data){
//     let divProduto = ``
//     let listaComProdutos = data.results
//     for (produto of listaComProdutos){
//         divProduto += `
//         <div class="products" style="vertical-align:top; width:20%;">
//             <a style="text-decoration: none; color:white;" href='produtos/${produto.url.replace('http://18.231.157.213/api/products/' , '')}' >
//                 <img style="width: 100%; height: 10rem; margin-right: 0%; cursor: pointer;" id="foto" src="${produto.attachaments}">
        
//                 <p style="margin-top: 5%; font-size: 22px;text-weight:bold; text-align:center; vertical-align: top;">
//                     ${produto.product_name.replace('Northwind Traders ', '')}
//                 </p>
//             </a>                
//          </div>
//         `
//         // div.innerHTML += divProduto;
        
//         // console.log(produto.product_name)
//         arrProdutos.push(divProduto)
//     }
//     console.log(arrProdutos)
//     div.innerHTML += arrProdutos
//     // console.log('array',arrProdutos)
//     // return arrProdutos
// }

// let arrProd;
// function listaDeProdutos() {
//     let loading = document.getElementById('principal')
//     loading.style.display = 'block'
//     let urlNumber = 2;
//     for (let i = 1; i <= urlNumber; i++) {
//         fetch(`http://18.231.157.213/api/products/?page=${i}`, {
//             headers: {'Authorization': `Basic ${btoa('Publico:usuariopublico')}` }
//         })
//         .then((results) => {
//             results.json().then(data => {
//                 // console.log(data);
//                 insereProdutos(data);
//                 // arrProd = insereProdutos(data)
//                 // .then((data2 => {
//                 //     console.log(data2, 'data2')
//                 //     data2.forEach((produtos) => div.innerHTML +=produtos)
//                     // div.innerHTML = produtos
//                 // }))
//                 // console.log(arrProd)
//                 // div.innerHTML = arrProd
//                 // console.log(div)

                
//             })

            
//         })
//         .catch((err) => console.log(err))
//         //colocar o load na tela
//         .finally(() => loading.style.display = 'none' )
//     }
    
// }

// window.onload = function() {
//     listaDeProdutos();
// }


let div = document.getElementById('produtos2')
let arrProdutos = []
let paginationControl = 1;

async function  insereProdutos(data, array){
    let divProduto = ``
    let listaComProdutos = data.results
    for (produto of listaComProdutos){
        divProduto += `
        <div class="products" style="vertical-align:top; width:20%;">
        <a style="text-decoration: none; color:white;" href='produtos/${produto.url.replace('http://18.231.157.213/api/products/' , '')}' >
        <img style="width: 100%; height: 10rem; margin-right: 0%; cursor: pointer;" id="foto" src="${produto.attachaments}">
        
        <p style="margin-top: 5%; font-size: 22px;text-weight:bold; text-align:center; vertical-align: top;">
        ${produto.product_name.replace('Northwind Traders ', '')}
        </p>
        </a>                
        </div>
        `
        
        array.push(divProduto)
    }
    div.innerHTML += divProduto;

    if (paginationControl === 2) {
        pagination();
    }
    paginationControl++;
    console.log(array)
}


function pagination(){
 console.log('aqui dentro')
 const paginationNumbers = document.getElementById("pagination-numbers");
 const paginatedList = document.getElementById("paginated-list");

 const listItems = document.querySelectorAll(".products");//todos os produtos, o item li não existe
 console.log(listItems)
 const nextButton = document.getElementById("next-button");
 const prevButton = document.getElementById("prev-button");
 const paginationLimit = 12;
 const pageCount = Math.ceil(listItems.length / paginationLimit);
 let currentPage = 1;

 const disableButton = (button) => {
     button.classList.add("disabled");
     button.setAttribute("disabled", true);
 };

 const enableButton = (button) => {
     button.classList.remove("disabled");
     button.removeAttribute("disabled");
 };

 const handlePageButtonsStatus = () => {
     if (currentPage === 1) {
     disableButton(prevButton);
     } else {
     enableButton(prevButton);
     }
 
     if (pageCount === currentPage) {
     disableButton(nextButton);
     } else {
     enableButton(nextButton);
     }
 };

 const handleActivePageNumber = () => {
     document.querySelectorAll(".pagination-number").forEach((button) => {
         button.classList.remove("active");
         const pageIndex = Number(button.getAttribute("page-index"));
         if (pageIndex == currentPage) {
             button.classList.add("active");
         }
     });
 };

 const appendPageNumber = (index) => {
     const pageNumber = document.createElement("button");
     pageNumber.className = "pagination-number";
     pageNumber.innerHTML = index;
     pageNumber.setAttribute("page-index", index);
     pageNumber.setAttribute("aria-label", "Page " + index);

     paginationNumbers.appendChild(pageNumber);
 };

 const getPaginationNumbers = () => {
     for (let i = 1; i <= pageCount; i++) {
     appendPageNumber(i);
     }
 };

 const setCurrentPage = (pageNum) => {
     currentPage = pageNum;
 
     handleActivePageNumber();
     handlePageButtonsStatus();
     
     const prevRange = (pageNum - 1) * paginationLimit;
     const currRange = pageNum * paginationLimit;
 
     listItems.forEach((item, index) => {
        item.classList.add("hidden");
        if (index >= prevRange && index < currRange) {
            item.classList.remove("hidden");
        }
     });
 };


    console.log('dentro do pagination')
    console.log('window.addEventListener')
    getPaginationNumbers();
    setCurrentPage(1);
 
    prevButton.addEventListener("click", () => {
    setCurrentPage(currentPage - 1);
    });
 
    nextButton.addEventListener("click", () => {
    setCurrentPage(currentPage + 1);
    });
 
    document.querySelectorAll(".pagination-number").forEach((button) => {
    const pageIndex = Number(button.getAttribute("page-index"));
 
    if (pageIndex) {
        button.addEventListener("click", () => {
        setCurrentPage(pageIndex);
        });
    }
    });

}


function listaDeProdutos() {
    let loading = document.getElementById('principal')
    loading.style.display = 'block'
    let urlNumber = 2;
    for (let i = 1; i <= urlNumber; i++) {
        fetch(`http://18.231.157.213/api/products/?page=${i}`, {
            headers: {'Authorization': `Basic ${btoa('Publico:usuariopublico')}` }
        })
        .then((results) => {
            results.json().then(data => {
                // console.log(data);
                
                insereProdutos(data, arrProdutos); 
                console.log('dados carregados')
                // console.log(arrProdutos);
                
                // pagination();
                
            })

            
        })
        .catch((err) => console.log(err))
        //colocar o load na tela
        .finally(() => {
            loading.style.display = 'none' 
        })
    }
    
}
window.onload = function() {
    listaDeProdutos();

}


// console.log(arrProdutos);
//paginação de produtos
// const paginationNumbers = document.getElementById("pagination-numbers");
// const paginatedList = document.getElementById("paginated-list");

// const listItems = paginatedList.querySelectorAll("li");//todos os produtos, o item li não existe
// console.log(listItems)
// const nextButton = document.getElementById("next-button");
// const prevButton = document.getElementById("prev-button");

// const paginationLimit = 10;
// const pageCount = Math.ceil(listItems.length / paginationLimit);
// let currentPage = 1;
// console.log(Math.ceil(listItems.length / paginationLimit));

// const disableButton = (button) => {
//     button.classList.add("disabled");
//     button.setAttribute("disabled", true);
// };

// const enableButton = (button) => {
//     button.classList.remove("disabled");
//     button.removeAttribute("disabled");
// };

// const handlePageButtonsStatus = () => {
//     if (currentPage === 1) {
//       disableButton(prevButton);
//     } else {
//       enableButton(prevButton);
//     }
  
//     if (pageCount === currentPage) {
//       disableButton(nextButton);
//     } else {
//       enableButton(nextButton);
//     }
// };

// const handleActivePageNumber = () => {
//     document.querySelectorAll(".pagination-number").forEach((button) => {
//         button.classList.remove("active");
//         const pageIndex = Number(button.getAttribute("page-index"));
//         if (pageIndex == currentPage) {
//             button.classList.add("active");
//         }
//     });
//   };

// const appendPageNumber = (index) => {
//     const pageNumber = document.createElement("button");
//     pageNumber.className = "pagination-number";
//     pageNumber.innerHTML = index;
//     pageNumber.setAttribute("page-index", index);
//     pageNumber.setAttribute("aria-label", "Page " + index);

//     paginationNumbers.appendChild(pageNumber);
// };

// const getPaginationNumbers = () => {
//     for (let i = 1; i <= pageCount; i++) {
//       appendPageNumber(i);
//     }
// };

// const setCurrentPage = (pageNum) => {
//     currentPage = pageNum;
  
//     handleActivePageNumber();
//     handlePageButtonsStatus();
    
//     const prevRange = (pageNum - 1) * paginationLimit;
//     const currRange = pageNum * paginationLimit;
  
//     listItems.forEach((item, index) => {
//       item.classList.add("hidden");
//       if (index >= prevRange && index < currRange) {
//         item.classList.remove("hidden");
//       }
//     });
// };

// window.addEventListener("load", () => {
//     getPaginationNumbers();
//     setCurrentPage(1);
  
//     prevButton.addEventListener("click", () => {
//       setCurrentPage(currentPage - 1);
//     });
  
//     nextButton.addEventListener("click", () => {
//       setCurrentPage(currentPage + 1);
//     });
  
//     document.querySelectorAll(".pagination-number").forEach((button) => {
//       const pageIndex = Number(button.getAttribute("page-index"));
  
//       if (pageIndex) {
//         button.addEventListener("click", () => {
//           setCurrentPage(pageIndex);
//         });
//       }
//     });
// });
