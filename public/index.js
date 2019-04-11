

//Code to get the products to render
let productHTML= "";
let productDiv = document.getElementById("products");

for(let i = 0; i < products.length; i++){
    let product = products[i];
    productHTML = productHTML + `<ul class="product" id = ${product._id}> 
                        <li>${product.name}</li>
                        <li>${product.price}</li>
                        <li>Rating: ${product.rating}</li>
                        <li>Rewiews: ${product.reviews.length}</li>
                        <li><button>Details</button>
                        <li><button onclick="addToCart()">Add to Cart</button></li>
                    </ul>`
}

productDiv.innerHTML = productHTML;

//code to render a search bar
let searchDiv = document.getElementById('search');
let searchHTML =  `<input type='text' placeholder='Search...' id="searchInput"> </input>`;

searchHTML = searchHTML + `<button>Search</button>`
searchDiv.innerHTML = searchHTML;

// make the search bar actually search


//Code for shopping cart
let cartDiv = document.getElementById('shoppingCart');
cartDiv.innerHTML = `<button>View Cart</button>`

//Category Selector
let categoryDiv = document.getElementById('category');
categoryDiv.innerHTML = `<select>
    <option>Choose</option>
    <option value="">Food</option>
    <option>Electronics</option>
    <option>Sporting</option>
</select>`




