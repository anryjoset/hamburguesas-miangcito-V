// ==================== SISTEMA DE CARRITO ====================

// Inicializar sistema de carrito
function initCart() {
    updateCartUI();
}

// Abrir carrito
function openCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    if (cartSidebar) {
        cartSidebar.classList.add('active');

        // Agregar overlay
        const overlay = document.createElement('div');
        overlay.id = 'cart-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 1050;
        `;
        overlay.onclick = closeCart;
        document.body.appendChild(overlay);
        document.body.style.overflow = 'hidden';
    }
}

// Cerrar carrito
function closeCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('cart-overlay');

    if (cartSidebar) {
        cartSidebar.classList.remove('active');
    }

    if (overlay) {
        overlay.remove();
    }

    document.body.style.overflow = 'auto';
}

// Agregar producto al carrito
function addToCart(productId) {
    // Buscar producto en todas las categorías
    let product = null;
    for (const category in MENU_DATA) {
        if (category !== 'todos') {
            const found = MENU_DATA[category].find(p => p.id === productId);
            if (found) {
                product = found;
                break;
            }
        }
    }

    if (!product) {
        console.error('Producto no encontrado:', productId);
        return;
    }

    const existingItem = APP_STATE.cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        APP_STATE.cart.push({
            ...product,
            quantity: 1
        });
    }

    // Guardar en localStorage
    saveToStorage('miang_cart', APP_STATE.cart);

    // Actualizar UI
    updateCartUI();

    // Mostrar confirmación
    showToast(`✅ ${product.name} agregado al carrito`);

    // Abrir carrito automáticamente si tiene más de 2 items
    if (APP_STATE.cart.length >= 2) {
        openCart();
    }
}

// Remover producto del carrito
function removeFromCart(productId) {
    APP_STATE.cart = APP_STATE.cart.filter(item => item.id !== productId);

    // Guardar en localStorage
    saveToStorage('miang_cart', APP_STATE.cart);

    // Actualizar UI
    updateCartUI();

    showToast('Producto removido del carrito');
}

// Actualizar cantidad de producto en carrito
function updateQuantity(productId, change) {
    const item = APP_STATE.cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;

        if (item.quantity <= 0) {
            removeFromCart(productId);
            return;
        }

        // Guardar en localStorage
        saveToStorage('miang_cart', APP_STATE.cart);

        // Actualizar UI
        updateCartUI();
    }
}

// Actualizar interfaz del carrito
function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.querySelector('.cart-count');

    if (!cartItems) {
        console.error('No se encontró el elemento cart-items');
        return;
    }

    // Actualizar contador
    if (cartCount) {
        const totalItems = APP_STATE.cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }

    // Limpiar items
    cartItems.innerHTML = '';

    if (APP_STATE.cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart" style="text-align: center; padding: 40px 20px;">
                <i class="fas fa-shopping-cart" style="font-size: 3rem; color: var(--text-light); margin-bottom: 15px;"></i>
                <p style="color: var(--text-light); margin-bottom: 20px;">Tu carrito está vacío</p>
                <button class="btn btn-primary" onclick="closeCart(); scrollToSection('menu')">
                    Ver Menú
                </button>
            </div>
        `;
        if (cartTotal) cartTotal.textContent = '$0';
        return;
    }

    // Calcular total
    let total = 0;

    // Renderizar items
    APP_STATE.cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${formatPrice(item.price)} c/u</div>
                <div class="cart-item-controls">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="qty-display">${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            <div class="cart-item-total">${formatPrice(itemTotal)}</div>
        `;
        cartItems.appendChild(cartItem);
    });

    // Actualizar total
    if (cartTotal) {
        cartTotal.textContent = formatPrice(total);
    }
}

// Finalizar pedido
function checkout() {
    if (APP_STATE.cart.length === 0) {
        showToast('Tu carrito está vacío', 'error');
        return;
    }

    const total = APP_STATE.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemCount = APP_STATE.cart.reduce((sum, item) => sum + item.quantity, 0);

    // Crear mensaje para WhatsApp
    let message = "¡Hola Miang Burgers! 👋\n\nMe gustaría ordenar:\n\n";

    APP_STATE.cart.forEach(item => {
        message += `• ${item.quantity}x ${item.name} - ${formatPrice(item.price * item.quantity)}\n`;
    });

    message += `\nTotal: ${formatPrice(total)}\n`;
    message += `\nPor favor confirmen mi pedido. ¡Gracias! 🍔`;

    const phone = "525613294301";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;


    // Abrir WhatsApp
    window.open(url, '_blank');

    // Opcional: Limpiar carrito después de ordenar
    // APP_STATE.cart = [];
    // saveToStorage('miang_cart', APP_STATE.cart);
    // updateCartUI();
    // closeCart();

    showToast('¡Pedido enviado por WhatsApp!');
}