// ==================== SISTEMA PRINCIPAL ====================

// Estado global de la aplicación
const APP_STATE = {
    cart: [],
    favorites: [],
    currentSection: 'inicio'
};

// Inicializar toda la aplicación
function initApp() {
    console.log('🚀 Iniciando Miang Burgers...');

    // Cargar estado del carrito y favoritos
    loadAppState();

    // Inicializar todos los módulos
    initNavigation();
    initMenu();
    initCart();
    initContact();

    // Mostrar mensaje de bienvenida
    setTimeout(() => {
        showToast('¡Bienvenido a Miang Burgers! 🍔');
    }, 1000);

    console.log('✅ Miang Burgers inicializado correctamente');
}

// Cargar estado de la aplicación
function loadAppState() {
    const savedCart = loadFromStorage('miang_cart');
    const savedFavorites = loadFromStorage('miang_favorites');

    if (savedCart) APP_STATE.cart = savedCart;
    if (savedFavorites) APP_STATE.favorites = savedFavorites;

    updateCartUI();
    updateFavoritesUI();
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initApp);

// Manejar errores no capturados
window.addEventListener('error', (event) => {
    console.error('Error en la aplicación:', event.error);
    showToast('Ocurrió un error inesperado', 'error');
});