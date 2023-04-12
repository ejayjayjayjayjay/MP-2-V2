const products = document.querySelectorAll('.product');
const cart = [];

products.forEach((product) => {
const addToCartBtn = product.querySelector('.ADD_TO_CART');
addToCartBtn.addEventListener('click', () => {
    const productTitle = product.querySelector('.product-title').textContent;
    const productPrice = product.querySelector('.product__price').textContent;
    const item = { title: productTitle, price: productPrice };
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Retrieve any previously stored purchases from local storage
    const storedPurchases = JSON.parse(localStorage.getItem('purchases')) || [];

    // Add the newly purchased item to the list of stored purchases
    storedPurchases.push(item);

    // Save the updated list of purchases back to local storage
    localStorage.setItem('purchases', JSON.stringify(storedPurchases));
    
    // Display the purchased items on the admin dashboard
    const dashboardList = document.querySelector('#dashboard-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${item.title}: ${item.price}`;
    dashboardList.appendChild(listItem);
});
});         

      
      
const storedPurchases = JSON.parse(localStorage.getItem('purchases')) || [];

storedPurchases.forEach((purchase, index) => {
const listItem = document.createElement('li');
listItem.textContent = `${purchase.title}: ${purchase.price}`;


const deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';
deleteButton.addEventListener('click', () => {

    storedPurchases.splice(index, 1);


    localStorage.setItem('purchases', JSON.stringify(storedPurchases));


    listItem.remove();
});

listItem.appendChild(deleteButton);

document.querySelector('#purchase-list').appendChild(listItem);
});