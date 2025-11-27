// ==================== SISTEMA DE CONTACTO ====================

// Inicializar sistema de contacto
function initContact() {
    setupContactForm();
}

// Configurar formulario de contacto
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value.trim();
        const email = this.querySelector('input[type="email"]').value.trim();
        const phone = this.querySelector('input[type="tel"]').value.trim();
        const message = this.querySelector('textarea').value.trim();

        // Validaciones básicas
        if (!name || !email || !message) {
            showToast('Por favor completa todos los campos obligatorios', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showToast('Por favor ingresa un email válido', 'error');
            return;
        }

        // Simular envío (en producción, enviarías a un backend)
        simulateContactSubmission({ name, email, phone, message });
    });
}

// Simular envío de formulario de contacto
function simulateContactSubmission(data) {
    showToast('Enviando mensaje...', 'info');

    setTimeout(() => {
        // Aquí normalmente enviarías los datos a tu backend
        console.log('Datos de contacto:', data);

        showToast('¡Mensaje enviado! Te contactaremos pronto.');

        // Limpiar formulario
        const form = document.getElementById('contact-form');
        if (form) form.reset();

    }, 2000);
}