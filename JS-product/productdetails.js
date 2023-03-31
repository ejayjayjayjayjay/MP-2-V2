let productId = localStorage.getItem("productId");
console.log(typeof productId);
let products = JSON.parse(localStorage.getItem("products"));
console.log(products);

let product = products.find( (item) => item.id == productId );


let productsDOM = document.querySelector('.product-item');

productsDOM.innerHTML = `<div class="container text-center">
        <img src="${product.ImagURL}" class="imgdetail" alt="product image" />

        <div class="product-item-unit">
            <h2 class="prod-title fw-bold"> ${product.title} </h2>
            <p class="prod-desc">${product.desc}</p>
            <p class="prod-size"> Meal Type : ${product.size} </p><br>
            <span class="prod-size"> Quantity : ${product.quantity} </span>
            <p class="mt-5"><span class="fw-bold">Recipe:</span> ${product.recipe}</p>
            <h2>Instructions</h2>
            <p>${product.tips}</p>
            <div>
            <h2>Video Tutorial</h2>
            <div>${product.vid}</div>
            </div>
        </div>
    </div>
`;