function renderProducts(filter = 'all') {
  const grid = document.getElementById('productsGrid');
  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
  grid.innerHTML = filtered.map(p => `
    <div class="product-card">
      <div class="product-header">
        ${
  p.image 
    ? `<img src="${p.image}" class="product-img">` 
    : `<span class="product-emoji">${p.emoji || "🌿"}</span>`
} 
        <div class="product-name">${p.name}</div>
        <span class="product-tag">${p.tag}</span>
      </div>
      <div class="product-body">
        <div class="product-dose">📏 Dose: ${p.dose}</div>
        <ul class="product-benefits">
          ${p.benefits.map(b => `<li>${b}</li>`).join('')}
        </ul>
      </div>
      <div class="product-footer">
        <span class="product-crops">🌾 Suitable for: ${p.crops}</span>
      </div>
    </div>
  `).join('');
}

// Store user's current filter choice and only reset when appropriate
let userSelectedFilter = 'all';
let hasInteractedWithProducts = false;

function filterProducts(cat, btn) {
  document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  userSelectedFilter = cat;
  hasInteractedWithProducts = true;
  renderProducts(cat);
}

// Only reset to 'All Products' when user navigates away from products section and comes back much later
let lastScrollY = window.scrollY;
let timeLeftProducts = 0;
window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  const productsSection = document.getElementById('products');
  const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
  
  if (productsSection) {
    const rect = productsSection.getBoundingClientRect();
    const isInView = rect.top < window.innerHeight && rect.bottom > 0;
    
    // Record when user leaves products section
    if (!isInView && timeLeftProducts === 0) {
      timeLeftProducts = Date.now();
    }
    
    // Reset filter only if user has been away for more than 10 seconds AND hasn't recently interacted
    if (isInView && timeLeftProducts > 0 && hasInteractedWithProducts) {
      const timeAway = Date.now() - timeLeftProducts;
      if (timeAway > 10000) { // 10 seconds
        const allProductsBtn = document.querySelector('.filter-tab');
        if (allProductsBtn && !allProductsBtn.classList.contains('active')) {
          document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
          allProductsBtn.classList.add('active');
          renderProducts('all');
          userSelectedFilter = 'all';
          hasInteractedWithProducts = false;
        }
      }
      timeLeftProducts = 0;
    }
  }
  
  lastScrollY = currentScrollY;
});

renderProducts();
