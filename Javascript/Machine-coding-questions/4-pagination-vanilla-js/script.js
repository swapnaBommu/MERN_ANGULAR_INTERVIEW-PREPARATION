document.addEventListener("DOMContentLoaded", function(){
    
    let products = [];
    let page = 1;
    const app = document.querySelector(".app")
    async function fetchProducts() {
      try{
        const response = await fetch("https://dummyjson.com/products?limit=100");
        const data = await response.json();

        if(data && data.products){
            products = data.products;
            console.log(products);
            renderProducts();
        }
      }catch(error){
        console.log("Error in fetching products", error)
      }
    }
    const renderProducts = () =>{
        //create product div to display the products
        const productsContainer = document.createElement('div');
        productsContainer.classList.add('products');
        const pagination = document.createElement("div");
        pagination.classList.add("pagination");
        if(products.length > 0 ){
            products.slice(page * 10 - 10, page * 10).forEach((product)=>{
                const productElement = document.createElement('div');
                productElement.classList.add("products__single");
                productElement.innerHTML=`
                    <img  src="${product.thumbnail}" alt="${product.title}"/>
                    <span>${product.title}</span>
                `;

                productsContainer.appendChild(productElement); 
            });
            //for previous button
            if(page > 1){
                const prevButton = createPaginationButton("◀",()=>{
                    selectPageHandler(page - 1);
                });
                pagination.appendChild(prevButton);
            }
            //for displaying numbers
            for(let i = 0; i < products.length / 10; i++){
                const pageButton = createPaginationButton(i+1,()=>{
                    selectPageHandler(i + 1);
                },page===i+1);
                pagination.appendChild(pageButton);
            }

            //for next Button
            if(page < products.length / 10){
                const nextButton = createPaginationButton("▶",()=>{
                    selectPageHandler(page + 1);
                });
                pagination.appendChild(nextButton);
            }
        }
        app.innerHTML="";
        app.appendChild(productsContainer);
        app.appendChild(pagination)
    }
    fetchProducts();

    const createPaginationButton = (text, clickHandler,isSelected = false) =>{
        const button = document.createElement("button");
        button.textContent = text;
        button.addEventListener("click", clickHandler);
        if(isSelected){
            button.classList.add("pagination__selected")
        }
        return button;
    }

    const selectPageHandler = (selectedPage) =>{
        if(selectedPage >= 1 && selectedPage < products.length / 10 && selectedPage !== page){
            page = selectedPage;
            renderProducts();
        }
    }

    

});