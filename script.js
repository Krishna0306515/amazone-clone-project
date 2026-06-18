// Product Data

const products = [

{
id:1,
name:"iPhone 15",
category:"Electronics",
price:79999,
oldPrice:89999,
image:"https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500"
},

{
id:2,
name:"Samsung Galaxy S24",
category:"Electronics",
price:69999,
oldPrice:79999,
image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
},

{
id:3,
name:"MacBook Air",
category:"Electronics",
price:99999,
oldPrice:109999,
image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
},

{
id:4,
name:"HP Laptop",
category:"Electronics",
price:55999,
oldPrice:64999,
image:"https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500"
},

{
id:5,
name:"Smart Watch",
category:"Electronics",
price:2999,
oldPrice:3999,
image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
},

{
id:6,
name:"Gaming Mouse",
category:"Gaming",
price:999,
oldPrice:1499,
image:"https://images.unsplash.com/photo-1527814050087-3793815479db?w=500"
},

{
id:7,
name:"Mechanical Keyboard",
category:"Gaming",
price:2499,
oldPrice:3499,
image:"https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500"
},
{
id:8,
name:"Bluetooth Speaker",
category:"Electronics",
price:1999,
oldPrice:2999,
image:"https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500"
},

{
id:9,
name:"DSLR Camera",
category:"Electronics",
price:45999,
oldPrice:52999,
image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500"
},

{
id:10,
name:"Running Shoes",
category:"Fashion",
price:2299,
oldPrice:2999,
image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
},

{
id:11,
name:"Backpack",
category:"Fashion",
price:1299,
oldPrice:1799,
image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
},

{
id:12,
name:"LED Monitor",
category:"Electronics",
price:8999,
oldPrice:10999,
image:"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500"
},

{
id:13,
name:"Coffee Seeds",
category:"Home",
price:3499,
oldPrice:4499,
image:"https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500"
},

{
id:14,
name:"Gaming Headset",
category:"Gaming",
price:2799,
oldPrice:3799,
image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
}

];


let cart =
JSON.parse(localStorage.getItem("cart")) || [];

let wishlist =
JSON.parse(localStorage.getItem("wishlist")) || [];


const productContainer =
document.getElementById("productContainer");

const wishlistContainer =
document.getElementById("wishlistContainer");

const cartCount =
document.getElementById("cartCount");


function displayProducts(productArray){

productContainer.innerHTML = "";

productArray.forEach(product=>{

productContainer.innerHTML += `

<div class="product-card">

<span class="discount">
20% OFF
</span>

<img src="${product.image}" alt="${product.name}">

<div class="product-info">

<h3>${product.name}</h3>

<div class="rating">
⭐⭐⭐⭐⭐
</div>

<p class="price">
₹${product.price}

<span class="old-price">
₹${product.oldPrice}
</span>
</p>

<button
class="add-btn"
onclick="addToCart(${product.id})">

Add To Cart

</button>

<br>

<button
class="wishlist-btn"
onclick="addToWishlist(${product.id})">

❤️ Wishlist

</button>

</div>

</div>

`;

});

}

function addToCart(id){

const product =
products.find(item=>item.id===id);

cart.push(product);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

updateCartCount();

alert(product.name + " added to cart");

}

function addToWishlist(id){

const product =
products.find(item=>item.id===id);

wishlist.push(product);

localStorage.setItem(
"wishlist",
JSON.stringify(wishlist)
);

displayWishlist();

alert(product.name + " added to wishlist");

}

function displayWishlist(){

wishlistContainer.innerHTML = "";

wishlist.forEach(item=>{

wishlistContainer.innerHTML += `
<p>❤️ ${item.name}</p>
`;

});

}

function updateCartCount(){

cartCount.innerText = cart.length;

}

document
.getElementById("searchInput")
.addEventListener("keyup",function(){

const value =
this.value.toLowerCase();

const filteredProducts =
products.filter(product=>

product.name
.toLowerCase()
.includes(value)

);

displayProducts(filteredProducts);

});

function filterCategory(category){

if(category === "All"){

displayProducts(products);

}

else{

const filtered =
products.filter(product=>

product.category === category

);

displayProducts(filtered);

}

}

displayProducts(products);

displayWishlist();

updateCartCount();