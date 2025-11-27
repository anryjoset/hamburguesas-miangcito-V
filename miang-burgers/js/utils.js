// ==================== UTILIDADES GENERALES ====================

// Mostrar notificación toast
function showToast(message, type = 'success') {
    // Crear elemento toast si no existe
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: ${type === 'error' ? '#E74C3C' : '#27AE60'};
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 1200;
            display: flex;
            align-items: center;
            gap: 10px;
            opacity: 0;
            transition: opacity 0.3s;
        `;
        document.body.appendChild(toast);
    }

    toast.innerHTML = `
        <i class="fas fa-${type === 'error' ? 'exclamation-circle' : 'check-circle'}"></i>
        <span>${message}</span>
    `;
    toast.style.backgroundColor = type === 'error' ? '#E74C3C' : '#27AE60';
    toast.style.opacity = '1';

    setTimeout(() => {
        toast.style.opacity = '0';
    }, 3000);
}

// Scroll suave a sección
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const sectionPosition = section.offsetTop - headerHeight - 20;

        window.scrollTo({
            top: sectionPosition,
            behavior: 'smooth'
        });
    }
}

// Abrir WhatsApp
function openWhatsApp() {
    const phoneNumber = "525613294301";
    const message = "¡Hola! Me interesa hacer un pedido en Miang Burgers";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Abrir Instagram
function openInstagram() {
    window.open('https://www.instagram.com/d3rek.vega00?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank');
}

// Abrir Fcebook
function openFacebook() {
    window.open('https://www.facebook.com/share/19ivnAvKDm/', '_blank');
}
// Abrir mapa (simulación)
function openMap(branchName) {
    showToast(`Abriendo ubicación de ${branchName} en Google Maps`);
    // En una implementación real, aquí se integraría Google Maps API
}

// Formatear precio
function formatPrice(price) {
    return `$${parseFloat(price).toFixed(2)}`;
}

// Validar email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Cargar desde LocalStorage
function loadFromStorage(key) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (error) {
        console.error('Error loading from storage:', error);
        return null;
    }
}

// Guardar en LocalStorage
function saveToStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (error) {
        console.error('Error saving to storage:', error);
        return false;
    }
}