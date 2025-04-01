// Fonction de recherche des produits
function searchProducts() {
    const query = document.getElementById('search').value.toLowerCase();
    const products = document.querySelectorAll('.product-card');

    products.forEach(product => {
        const productName = product.querySelector('h3').innerText.toLowerCase();
        if (productName.includes(query)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Fonction pour filtrer les produits par catégorie
function filterCategory() {
    const selectedCategory = document.getElementById('category').value;
    const products = document.querySelectorAll('.product-card');

    products.forEach(product => {
        if (selectedCategory === "" || product.dataset.category === selectedCategory) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
