async function insereFuncionarios(results){
    let placeholder = document.querySelector("#empregados");
    let out = "";
    
    for(let data of results){
        let teste = document.createElement("div");
        teste.innerHTML = 
        `
        
        <div class="borda-cinza funcionarios">
            <a href="funcionarios/${data.id} " style="text-decoration: none; color: white; text-align: center;">
                <img style="width: 100%; height: 10rem; margin-right: 0%; cursor: pointer;" id="foto" src="data:image/jpg;base64,${data.foto}">
                <h5 style="margin: 5%;">
                    Nome
                </h5>
                <p style="margin-top: 5px; font-size: 20px;">
                    ${data.nome} ${data.sobrenome}
                </p>
                <h5 style="margin: 5%;">
                    Cargo
                </h5>
                <p style="margin-top: 5px; font-size: 20px;">
                    ${data.cargo}
                </p>
            </a>

            <a href="deleta_funcionario/${data.id}"><img src="static/img/trash_ico.png" alt="Icone da lixeira" style="
                                                                                                            width: 27px; 
                                                                                                            height: 27px;
                                                                                                            float: right;
                                                                                                            padding: 2px;
                                                                                                            background:white;
                                                                                                            "></a>
                                                                                                        
            <a href="edita_funcionario/${data.id}"><img src="static/img/pencil_ico.png" alt="Icone da lixeira" style="
                                                                                                            width: 27px; 
                                                                                                            height: 27px;
                                                                                                            float: left;
                                                                                                            padding: 2px;
                                                                                                            background:white;
                                                                                                            "></a>    
        </div>
            

        `;

        placeholder.appendChild(teste);
    }
    pagination();
            
}

function pagination(){
    const paginationNumbers = document.getElementById("pagination-numbers");
    const paginatedList = document.getElementById("paginated-list");
    const listItems = document.querySelectorAll(".funcionarios");//todos os produtos, o item li não existe
    const nextButton = document.getElementById("next-button");
    const prevButton = document.getElementById("prev-button");
    const paginationLimit = 6;
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
            window.scrollTo(0, 0);
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


    getPaginationNumbers();
    setCurrentPage(1);
 
    prevButton.addEventListener("click", () => {
        setCurrentPage(currentPage - 1);
        window.scrollTo(0, 0);
    });
 
    nextButton.addEventListener("click", () => {
        setCurrentPage(currentPage + 1);
        window.scrollTo(0, 0);
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

let loading = document.getElementById('principal')
loading.style.display = 'block'
function listaDeEmpregados() {
    
    fetch('https://desafiotrimestral.azurewebsites.net/funcionario/getall')
        .then((response) => response.json())
        .then((results) => {
            insereFuncionarios(results)            
        })
        .finally(() => {
            loading.style.display = 'none' 
        })
}

window.onload = function() {
    listaDeEmpregados();
}

