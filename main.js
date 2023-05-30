const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburguerMenu = document.querySelector('.icon-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartAside = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
hamburguerMenu.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click', toggleShoppingCart);
productDetailCloseIcon.addEventListener('click', closeProductDetail);


function toggleDesktopMenu() {
    const isShoppingCartAsideClosed = shoppingCartAside.classList.contains('inactive');

    if (!isShoppingCartAsideClosed) {
        shoppingCartAside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive');
}
function toggleMobileMenu() {
    const isShoppingCartAsideClosed = shoppingCartAside.classList.contains('inactive');

    if (!isShoppingCartAsideClosed) {
        shoppingCartAside.classList.add('inactive');
    }
    closeProductDetail();
    mobileMenu.classList.toggle('inactive');
}
function toggleShoppingCart() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }
    shoppingCartAside.classList.toggle('inactive');
}
function openProductDetail() {
    productDetailContainer.classList.remove('inactive');
    desktopMenu.classList.add('inactive');
    shoppingCartAside.classList.add('inactive');
}
function closeProductDetail() {
    productDetailContainer.classList.add('inactive');
}

/* cómo crear una lista de productos con js */
const productList = []; 

productList.push({
    name: 'Print 1',
    price: 500,
    image: './assets/1print.jpg',
});
productList.push({
    name: 'Print 2',
    price: 500,
    image: './assets/2print.jpg',
});
productList.push({
    name: 'Print 3',
    price: 500,
    image: './assets/3print.jpg',
});
productList.push({
    name: 'Print 1',
    price: 500,
    image: './assets/1print.jpg',
});
productList.push({
    name: 'Print 2',
    price: 500,
    image: './assets/2print.jpg',
});
productList.push({
    name: 'Print 3',
    price: 500,
    image: './assets/3print.jpg',
});
productList.push({
    name: 'Print 1',
    price: 500,
    image: './assets/1print.jpg',
});
productList.push({
    name: 'Print 2',
    price: 500,
    image: './assets/2print.jpg',
});


for (product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const imgProduct = document.createElement('img');
        imgProduct.setAttribute('src', product.image);
        imgProduct.addEventListener('click', openProductDetail);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './assets/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
        
        productInfo.append(productInfoDiv, productInfoFigure);

        productCard.append(imgProduct, productInfo);

        cardsContainer.appendChild(productCard);
    }


