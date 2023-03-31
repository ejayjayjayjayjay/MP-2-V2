//set up variables
let productsDOM = document.querySelector('.products');

// All products
let products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) :productsDB;

// Filter Products
let selectionFilter = document.getElementById("filter-by-size");

selectionFilter.addEventListener("change",getProductsFilteredBySize);

// let addedItems;

let DrawUI;
// Display Products in Home DOM
(DrawUI =function(products = []){
    // console.log(localStorage.getItem("products"));
    let prods = products.map((item) => 
    `
    <div class="product-item" >

        <img src="${item.ImagURL}" class="product-image" alt="product imgae" onclick="productdetails(${item.id})" />
        ${item.isMe == "Y" ? "<span class='isMe'> Me </span>" : ""}

        <div class="product-item-desc">
            <p>Click Image &#8593</p>
            <h2 class="product-title fw-bold"> ${item.title} </h2>
            <p class="product-desc">${item.desc}</p>
            <p class="product-size">Meal Type: ${item.size} </p>
            <p>Servings: ${item.serving}</p>   
            <p class="text-dark fw-bold">Amount: &#8369;${item.price}</p>   
            <div>
            ${item.isMe == "Y" ?"<button type='button' onclick='editProduct("+ item.id +")' class='edit-product'> Edit </button>"
            + "<button type='button' onclick='deleteProduct("+ item.id +")' class='edit-product'> Delete </button>" : ""}
            </div>
        </div>

        <div class="product-item-action">
            <button type="button" onclick="addedItem(${item.id})" class="Add-To-Cart">Add To Cart</button>
        </div>

    </div>
    `).join("");
    productsDOM.innerHTML = prods;
})(products);

// Add Product to CartproductsDoM & added to Array and Save into LocalStorage

let container = [...addedItems];
function addedItem(id){
    products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : products;
    let element = products.find(item => item.id == id);
    let item = container.find(el => el.id === element.id);
    console.log(item);

    if(item){
        item.quantity += 1;
    }else{
        container.push(element);
    }

    cartproductsDom.innerHTML = "";
    container.map(item => {
        cartproductsDom.innerHTML += `<p>${item.title} <span class='item-qty'>${item.quantity}</span></p>`;
    })

    addedItems = [...addedItems , element];
    let uniqueCartProducts = uniqueProductsSendToCart(addedItems,"id")

    localStorage.setItem("productsInCart",JSON.stringify(uniqueCartProducts));

    let cartproductsLength = document.querySelectorAll('.cartproducts p');
    notificationNumber.innerHTML = cartproductsLength.length;

    showNotify();
}


function productdetails(id){
    localStorage.setItem("productId",id);
    setTimeout(() => {
        window.location = "productdetails.html";
    }, 1500)
}

let searchInput = document.getElementById('search');
searchInput.addEventListener("input",function(e){
    // console.log("vibar pogi hehe");
    if(e.target.value.trim() === ""){
        DrawUI(JSON.parse(localStorage.getItem('products')));
    }else{
        let products = JSON.parse(localStorage.getItem("products")) || products;
        let arr = searchByName(e.target.value , products);
        DrawUI(arr);
    }
})

function searchByName ( title , myContainer )
{
    let result = myContainer.filter((item) => {return (item.title.toLowerCase()).includes(title.toLowerCase())} )
    return result;
}

function uniqueProductsSendToCart(Arr , type){
    return (Arr.map(item => item[type])
    .map((item,i,final)=> final.indexOf(item) == i && i)
    .filter((item) => Arr[item])
    .map(item => Arr[item]));
}


function getProductsFilteredBySize(e){
    console.log(e.target.value);
    if(e.target.value === "All"){
        let productss = JSON.parse(localStorage.getItem("products")) || products;
        DrawUI(productss);
    }
    else{
        let productss = JSON.parse(localStorage.getItem("products")) || products;
        filteredArr = productss.filter(i => i.size === e.target.value);
        DrawUI(filteredArr);
    }
}

