// Product data (placeholder data)
let products = [
    {
        name: "TOFU 65 2.0 PBTFANS WOB KEYCAPS",
        id: "001",
        price: "$263",
        quantity: 2,
        rating: 5,
        image: "assets/Keyboards/Tofu65 WOB.jpg",
        
    },
    {
        name: "TOFU 65 2.0 PBTFANS SPARKLIGHT KEYCAPS",
        id: "002",
        price: "$266",
        quantity: 3,
        rating: 5,

        image: "assets/Keyboards/Tofu65 Sparklight.jpg"
    },
    {
        name: "TIGER LITE PBTFANS PURPURITE KEYCAPS",
        id: "003",
        price: "$206",
        quantity: 4,
        rating: 5,
        image: "assets/Keyboards/Tiger Lite Purpurite.jpg"
    },
    {
        name: "TOFU 65 GREY JAPANESE PBT KEYCAPS",
        id: "004",
        price: "$179",
        quantity: 0,
        rating: 5,

        image: "assets/Keyboards/Tofu65 GreyJP.jpg"
    },
    {
        name: "ODIN75 PBTFANS SPARKLIGHT KEYCAPS",
        id: "005",
        price: "$397",
        quantity: 3,
        rating: 5,

        image: "assets/Keyboards/Odin75 Sparklight.jpg"
    },
    {
        name: "ODIN R3 CLASSIC HANGUL KEYCAPS",
        id: "006",
        price: "$523",
        quantity: 2,
        rating: 5,

        image: "assets/Keyboards/OdinR3 ClassicHangul.jpg"
    },
    ];
    
    // Render product cards
    function renderProducts() {
    const container = document.getElementById("content");
    container.innerHTML = "";
    
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const card = document.createElement("div");
        card.className = "product-card";
        card.onclick = () => selectProduct(i);
        
        if (i === selectedProductIndex) {
        card.classList.add("selected");
        }
        
        card.innerHTML = `
        <img src="${product.image}" class="keyboard" alt="Product Image" width="100" height="100">
        <div class="text"> 
        <p>${product.name}</p>
        <p>ID: ${product.id}</p>
        <p>${product.price}</p>
        <p>Just ${product.quantity} in Stock</p>
        <p>${product.rating}/5</p>
        </div>
        `;
        
        container.appendChild(card);
    }
    }
    
    // Selected product index
    let selectedProductIndex = null;
    
    // Select a product
    function selectProduct(index) {
    selectedProductIndex = index;
    const selectedProduct = products[index];
    
    document.getElementById("input-name").value = selectedProduct.name;
    document.getElementById("input-id").value = selectedProduct.id;
    document.getElementById("input-price").value = selectedProduct.price;
    
    renderProducts();
    }
    
    // Update product details
    function updateProduct() {
    if (selectedProductIndex !== null) {
        const nameInput = document.getElementById("input-name").value;
        const idInput = document.getElementById("input-id").value;
        const priceInput = document.getElementById("input-price").value;
        
        products[selectedProductIndex].name = nameInput;
        products[selectedProductIndex].id = idInput;
        products[selectedProductIndex].price = priceInput;
        
        // Update the product card with the new details
        const selectedCard = document.getElementsByClassName("product-card selected")[0];
        const selectedProduct = products[selectedProductIndex];
        selectedCard.innerHTML = `
        <img src="${selectedProduct.image}" alt="Product Image" width="100" height="100">
        <p>Name: ${selectedProduct.name}</p>
        <p>ID: ${selectedProduct.id}</p>
        <p>Price: ${selectedProduct.price}</p>
        <p>Quantity: ${selectedProduct.quantity}</p>
        <p>Rating: ${selectedProduct.rating}</p>
        `;
        
        // Store the updated product data in localStorage
        localStorage.setItem("products", JSON.stringify(products));
    }
    }
    
    // Load product data from localStorage
    function loadProductData() {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
        products = JSON.parse(storedProducts);
        renderProducts();
    }
    }
    
    // Initial rendering and data loading
    renderProducts();
    loadProductData();