// ==================== SISTEMA DE NAVEGACIÓN ====================

function initNavigation() {
    setupNavEventListeners();
}

// Configurar event listeners de navegación
function setupNavEventListeners() {
    // Botón del carrito
    document.getElementById('cart-btn').addEventListener('click', openCart);

    // Botón de favoritos
    document.getElementById('favorites-btn').addEventListener('click', showFavorites);
}

// Mostrar favoritos
function showFavorites() {
    if (APP_STATE.favorites.length === 0) {
        showToast('No tienes productos favoritos aún', 'info');
        return;
    }

    // Filtrar menú para mostrar solo favoritos
    filterMenu('favoritos');
    scrollToSection('menu');
}