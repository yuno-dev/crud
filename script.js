// Arama fonksiyonu
document.getElementById('search-bar').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        const productName = card.querySelector('h3').textContent.toLowerCase();
        const productPrice = card.querySelector('.price').textContent.toLowerCase();
        
        // Eğer ürün adı veya fiyat, arama terimiyle eşleşiyorsa kartı göster
        if (productName.includes(searchTerm) || productPrice.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Ətraflı Məlumat butonlarına tıklama olayını ekle
document.querySelectorAll('.more-info-btn').forEach(button => {
    button.addEventListener('click', function() {
        const category = button.getAttribute('data-id');
        localStorage.setItem('selectedCategory', category);
        window.location.href = 'category.html';
    });
});

// category.html sayfası için kategori ürünlerini göster
document.addEventListener('DOMContentLoaded', function() {
    const categoryTitle = document.getElementById('category-title');
    const productList = document.getElementById('product-list');
    const selectedCategory = localStorage.getItem('selectedCategory');

    if (categoryTitle && productList && selectedCategory) {
        categoryTitle.textContent = `${selectedCategory} Ürünleri`;

        // Ürünleri kategorisine göre göster
        const products = {
            'bot': [
                { name: 'Dağcılık Botu', price: '₺1499,99', image: 'https://example.com/bot.jpg' }
            ],
            'spor-ayakkabisi': [
                { name: 'Nike Air Zoom Pegasus', price: '₺899,99', image: 'https://example.com/spor-ayakkabi.jpg' }
            ],
            'classic-ayakkabi': [
                { name: 'Classic Oxford Ayakkabı', price: '₺1199,99', image: 'https://example.com/classic-ayakkabi.jpg' }
            ],
            'gunluk-ayakkabi': [
                { name: 'Günlük Rahat Sneaker', price: '₺699,99', image: 'https://example.com/gunluk-ayakkabi.jpg' }
            ]
        };

        products[selectedCategory].forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="card-info">
                    <h3>${product.name}</h3>
                    <p class="price">${product.price}</p>
                </div>
            `;
            productList.appendChild(productCard);
        });
    } else {
        console.error("Kategori başlığı veya ürün listesi bulunamadı.");
    }
});
