// ==================== SISTEMA DE MENÚ ====================

// Datos del menú - 6 opciones por categoría
const MENU_DATA = {
    // LO MÁS RECOMENDADO (6 productos)
    todos: [
        {
            id: 1,
            name: "Miang Clásica",
            description: "Carne de res, lechuga fresca, tomate, cebolla y nuestra salsa especial Miang",
            price: 120,
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            category: "hamburguesas",
            badge: "MÁS VENDIDA",
            isFavorite: true
        },
        {
            id: 2,
            name: "Miang BBQ",
            description: "Carne a la parrilla, queso cheddar, cebolla caramelizada y nuestra salsa BBQ casera",
            price: 140,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-yuQFTwqpMsXeA0aHH5cHuRS6Jc_QnyZrBQ&s",
            category: "hamburguesas",
            badge: "RECOMENDADO",
            isFavorite: true
        },
        {
            id: 7,
            name: "Desayuno Miang Clásico",
            description: "Huevos al gusto, tocino, frijoles, pan tostado y jugo de naranja natural",
            price: 90,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZjVcEZWAnCQ2zANx3EOWq_p2jvteF_jnuAA&s",
            category: "desayunos",
            badge: "FAVORITO",
            isFavorite: true
        },
        {
            id: 10,
            name: "Combo Miang Familiar",
            description: "4 hamburguesas clásicas, 4 papas grandes, 4 refrescos y postre familiar",
            price: 450,
            image: "https://i5.walmartimages.com.mx/samsmx/images/product-images/img_large/000760701l.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
            category: "combos",
            badge: "POPULAR",
            isFavorite: true
        },
        {
            id: 14,
            name: "Malteada Chocolate",
            description: "Malteada cremosa de chocolate con topping de nuez",
            price: 45,
            image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            category: "bebidas",
            badge: "RECOMENDADO",
            isFavorite: true
        },
        {
            id: 16,
            name: "Pay de Queso Miang",
            description: "Delicioso pay de queso con base de galleta y topping de frutos rojos",
            price: 60,
            image: "https://comedera.com/wp-content/uploads/sites/9/2023/08/Wf_V1WP8.jpeg?fit=720,480&crop=0px,38px,720px,404px",
            category: "postres",
            badge: "ESPECIAL",
            isFavorite: true
        }
    ],

    // HAMBURGUESAS (6 productos)
    hamburguesas: [
        {
            id: 1,
            name: "Miang Clásica",
            description: "Carne de res, lechuga fresca, tomate, cebolla y nuestra salsa especial Miang",
            price: 120,
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            category: "hamburguesas",
            badge: "MÁS VENDIDA",
            isFavorite: true
        },
        {
            id: 2,
            name: "Miang BBQ",
            description: "Carne a la parrilla, queso cheddar, cebolla caramelizada y nuestra salsa BBQ casera",
            price: 140,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-yuQFTwqpMsXeA0aHH5cHuRS6Jc_QnyZrBQ&s",
            category: "hamburguesas",
            badge: "NUEVO",
            isFavorite: false
        },
        {
            id: 3,
            name: "Miang Doble Carne",
            description: "Doble carne de res, doble queso, tocino, pepinillos y salsa especial",
            price: 180,
            image: "https://bambuleburger.com/wp-content/uploads/2024/05/hamburguesa-doble-carne-1.jpg",
            category: "hamburguesas",
            badge: "ESPECIAL",
            isFavorite: false
        },
        {
            id: 4,
            name: "Miang Picante",
            description: "Carne sazonada, jalapeños, queso pepper jack y nuestra salsa picante especial",
            price: 150,
            image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            category: "hamburguesas",
            badge: "PICANTE",
            isFavorite: false
        },
        {
            id: 5,
            name: "Miang Vegetariana",
            description: "Hamburguesa de lentejas y champiñones, con aguacate y vegetales frescos",
            price: 130,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ghCZJXeTpWQBa_RFaBTRvcYWU9QJVVT2KA&s",
            category: "hamburguesas",
            badge: "SALUDABLE",
            isFavorite: false
        },
        {
            id: 6,
            name: "Miang Hawaiana",
            description: "Carne de res, piña asada, jamón, queso suizo y salsa teriyaki",
            price: 145,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHM1A2z2FSLhnNNlBPWipnUSAJGv25E2esNA&s",
            category: "hamburguesas",
            badge: "TROPICAL",
            isFavorite: false
        }
    ],

    // DESAYUNOS (6 productos)
    desayunos: [
        {
            id: 7,
            name: "Desayuno Miang Clásico",
            description: "Huevos al gusto, tocino, frijoles, pan tostado y jugo de naranja natural",
            price: 90,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZjVcEZWAnCQ2zANx3EOWq_p2jvteF_jnuAA&s",
            category: "desayunos",
            badge: "POPULAR",
            isFavorite: true
        },
        {
            id: 8,
            name: "Huevos Rancheros Miang",
            description: "Huevos sobre tortilla, bañados en salsa ranchera, con frijoles y aguacate",
            price: 85,
            image: "https://cdn-ilddihb.nitrocdn.com/MgqZCGPEMHvMRLsisMUCAIMWvgGMxqaj/assets/images/optimized/rev-e5c3642/www.goya.com/wp-content/uploads/2023/10/huevos-rancheros.jpg",
            category: "desayunos",
            badge: "ESPECIAL",
            isFavorite: false
        },
        {
            id: 9,
            name: "Pancakes Miang",
            description: "Tres pancakes esponjosos con miel, mantequilla y frutos rojos",
            price: 75,
            image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            category: "desayunos",
            badge: "DULCE",
            isFavorite: false
        },
        {
            id: 17,
            name: "Omelette Miang",
            description: "Omelette con jamón, queso, champiñones y pimientos",
            price: 95,
            image: "https://www.recetasnestle.com.mx/sites/default/files/srh_recipes/0f478620c69766a34072a00f54cf39c4.jpg",
            category: "desayunos",
            badge: "SALUDABLE",
            isFavorite: false
        },
        {
            id: 18,
            name: "Chilaquiles Rojos",
            description: "Chilaquiles en salsa roja con pollo, crema, queso y cebolla",
            price: 100,
            image: "https://www.vvsupremo.com/wp-content/uploads/2019/08/Chilaquiles-with-Salsa-Roja.jpg",
            category: "desayunos",
            badge: "TRADICIONAL",
            isFavorite: false
        },
        {
            id: 19,
            name: "Waffles Miang",
            description: "Waffles crujientes con fruta fresca, miel y crema batida",
            price: 80,
            image: "https://tvazteca.brightspotcdn.com/3c/e6/0fbf2a1e4a5c973835765058c9e9/receta-waffles-frutos-rojos-dia-internacional-del-waffle.jpg",
            category: "desayunos",
            badge: "DELICIOSO",
            isFavorite: false
        }
    ],

    // COMBOS (6 productos)
    combos: [
        {
            id: 10,
            name: "Combo Miang Familiar",
            description: "4 hamburguesas clásicas, 4 papas grandes, 4 refrescos y postre familiar",
            price: 450,
            image: "https://i5.walmartimages.com.mx/samsmx/images/product-images/img_large/000760701l.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
            category: "combos",
            badge: "AHORRA 20%",
            isFavorite: false
        },
        {
            id: 11,
            name: "Combo Pareja Miang",
            description: "2 hamburguesas especiales, 2 papas medianas, 2 malteadas",
            price: 280,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxUsla3nF0yR6QKpRwPrXWO4a5m2rou3_2Cw&s",
            category: "combos",
            badge: "ROMÁNTICO",
            isFavorite: false
        },
        {
            id: 20,
            name: "Combo Desayuno Ejecutivo",
            description: "Huevos rancheros, café, jugo y pan tostado - Perfecto para reuniones",
            price: 120,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsWWyXACp628sJrNuUvOk9cPZrdukPT8QbgA&s",
            category: "combos",
            badge: "EJECUTIVO",
            isFavorite: false
        },
        {
            id: 21,
            name: "Combo Estudiante",
            description: "1 hamburguesa clásica, papas regulares, refresco y postre pequeño",
            price: 70,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTF9sHqYjpPzxwvw16zfnnVG2-OrSuCHwfQw&s",
            category: "combos",
            badge: "ECONÓMICO",
            isFavorite: false
        },
        {
            id: 22,
            name: "Combo Amigos",
            description: "3 hamburguesas BBQ, 3 papas grandes, 3 refrescos y aros de cebolla",
            price: 380,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDUE_Gg5gyPAWqydWhbzY8xX-KkdrEklEN3Q&s",
            category: "combos",
            badge: "SOCIAL",
            isFavorite: false
        },
        {
            id: 23,
            name: "Combo Miang Supreme",
            description: "2 hamburguesas doble carne, papas gigantes, 2 malteadas y postre",
            price: 320,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGuCz5cbpTggOpn7QAkxrtmpaLhNkdevWZyzEZrbZUvTbQaaxVrR0Tdwm84WMZ8f62o0M&usqp=CAU",
            category: "combos",
            badge: "PREMIUM",
            isFavorite: false
        }
    ],

    // ACOMPAÑAMIENTOS (6 productos)
    acompanamientos: [
        {
            id: 12,
            name: "Papas a la Francesa",
            description: "Papas a la francesa crujientes con nuestra salsa especial",
            price: 45,
            image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            category: "acompanamientos",
            badge: "CLÁSICO",
            isFavorite: false
        },
        {
            id: 13,
            name: "Aros de Cebolla",
            description: "Aros de cebolla empanizados, crujientes por fuera y suaves por dentro",
            price: 40,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1_tJE-S4aRnHqdAkNxlbYL6EUwZ6aAHFisQ&s",
            category: "acompanamientos",
            badge: "CRUJIENTE",
            isFavorite: false
        },
        {
            id: 24,
            name: "Alitas Buffalo",
            description: "8 piezas de alitas bañadas en salsa buffalo picante, con apio y aderezo",
            price: 120,
            image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            category: "acompanamientos",
            badge: "PICANTE",
            isFavorite: false
        },
        {
            id: 25,
            name: "Nuggets de Pollo",
            description: "8 piezas de nuggets de pollo crujientes, con salsa BBQ o mostaza-miel",
            price: 55,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH2Ze9_7AnNscQyT1DcE1WsBXmpVvqtWvBKw&s",
            category: "acompanamientos",
            badge: "CRUJIENTE",
            isFavorite: false
        },
        {
            id: 26,
            name: "Papas con Chorizo",
            description: "Papas a la francesa con chorizo, queso derretido y crema",
            price: 65,
            image: "https://comedera.com/wp-content/uploads/sites/9/2022/11/papas-fritas-con-queso-cheddar-PG_PFCQCY30320002.jpg?w=4096",
            category: "acompanamientos",
            badge: "ESPECIAL",
            isFavorite: false
        },
        {
            id: 27,
            name: "Elote Preparado",
            description: "Elote asado con mayonesa, queso, chile en polvo y limón",
            price: 35,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOy7FFv6199SCWi2kc5-uZ9UVZherBiTtAlw&s",
            category: "acompanamientos",
            badge: "MEXICANO",
            isFavorite: false
        }
    ],

    // BEBIDAS (6 productos)
    bebidas: [
        {
            id: 14,
            name: "Malteada Chocolate",
            description: "Malteada cremosa de chocolate con topping de nuez",
            price: 45,
            image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            category: "bebidas",
            badge: "CREMOSA",
            isFavorite: true
        },
        {
            id: 15,
            name: "Limonada Natural",
            description: "Limonada fresca preparada al momento con hierbabuena",
            price: 30,
            image: "https://i.ytimg.com/vi/9qvc3hCeVsg/maxresdefault.jpg",
            category: "bebidas",
            badge: "REFRESCANTE",
            isFavorite: false
        },
        {
            id: 28,
            name: "Malteada Vainilla",
            description: "Malteada suave de vainilla con chispas de chocolate",
            price: 45,
            image: "https://dgari.com/wp-content/uploads/2024/04/malteada-de-vainilla-y-caramelo.jpg",
            category: "bebidas",
            badge: "CLÁSICA",
            isFavorite: false
        },
        {
            id: 29,
            name: "Malteada Fresa",
            description: "Malteada de fresa natural con fresas frescas",
            price: 45,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO4nhBsGnQ6xDQOKFTCwUaHq6k22o0bRGv1Q&s",
            category: "bebidas",
            badge: "FRUTAL",
            isFavorite: false
        },
        {
            id: 30,
            name: "Refresco Miang",
            description: "Coca-Cola (500ml)",
            price: 25,
            image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            category: "bebidas",
            badge: "FRÍA",
            isFavorite: false
        },
        {
            id: 31,
            name: "Agua de Horchata",
            description: "Refrescante agua de horchata con canela y vainilla",
            price: 28,
            image: "https://images.aws.nestle.recipes/original/8eaf50148ed521383df5d9793cba995f_whatsapp_image_2022-04-28_at_1.00.26_pm_(2).jpeg",
            category: "bebidas",
            badge: "TRADICIONAL",
            isFavorite: false
        }
    ],

    // POSTRES (6 productos)
    postres: [
        {
            id: 16,
            name: "Pay de Queso Miang",
            description: "Delicioso pay de queso con base de galleta y topping de frutos rojos",
            price: 60,
            image: "https://comedera.com/wp-content/uploads/sites/9/2023/08/Wf_V1WP8.jpeg?fit=720,480&crop=0px,38px,720px,404px",
            category: "postres",
            badge: "CLÁSICO",
            isFavorite: true
        },
        {
            id: 32,
            name: "Brownie con Helado",
            description: "Brownie caliente de chocolate con bola de helado de vainilla",
            price: 65,
            image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            category: "postres",
            badge: "DELICIOSO",
            isFavorite: false
        },
        {
            id: 33,
            name: "Cheesecake de Fresa",
            description: "Suave cheesecake con cubierta de fresas naturales",
            price: 70,
            image: "https://recetas.encolombia.com/wp-content/uploads/2025/07/Cheesecake-de-Vainilla-con-Fresas.jpg",
            category: "postres",
            badge: "FRUTAL",
            isFavorite: false
        },
        {
            id: 34,
            name: "Flan Napolitano",
            description: "Tradicional flan napolitano con caramelo",
            price: 45,
            image: "https://www.pastelesdlulu.com/wp-content/uploads/2012/09/flan4.png",
            category: "postres",
            badge: "TRADICIONAL",
            isFavorite: false
        },
        {
            id: 35,
            name: "Pastel de Chocolate",
            description: "Rebanada de pastel de chocolate triple con frosting",
            price: 55,
            image: "https://tekla-cbg.s3.eu-west-3.amazonaws.com/images/large/2816012_CBG_RECETA_6b81ea900a.jpg",
            category: "postres",
            badge: "CHOCOLATOSO",
            isFavorite: false
        },
        {
            id: 36,
            name: "Helado Sundae",
            description: "Helado de vainilla con chocolate, nuez y cereza",
            price: 50,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROR2fgmnlt5A0ULJvy-Sar3bgzPHJGRJs4IEIHibBH03uCL_VcIhhUhUVV_6L07NZdPdU&usqp=CAU",
            category: "postres",
            badge: "CLÁSICO",
            isFavorite: false
        }
    ]
};

// Inicializar sistema de menú
function initMenu() {
    renderMenu('todos');
}

// Renderizar menú
function renderMenu(category = 'todos') {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) {
        console.error('No se encontró el elemento products-grid');
        return;
    }

    let productsToShow = [];

    if (category === 'todos') {
        productsToShow = MENU_DATA.todos;
    } else if (category === 'favoritos') {
        // Filtrar productos favoritos de todas las categorías
        productsToShow = [];
        for (const cat in MENU_DATA) {
            if (cat !== 'todos') {
                productsToShow = productsToShow.concat(
                    MENU_DATA[cat].filter(product => APP_STATE.favorites.includes(product.id))
                );
            }
        }
    } else {
        productsToShow = MENU_DATA[category] || [];
    }

    productsGrid.innerHTML = '';

    if (productsToShow.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products" style="grid-column: 1 / -1; text-align: center; padding: 40px;">
                <i class="fas fa-utensils" style="font-size: 3rem; color: var(--text-light); margin-bottom: 15px;"></i>
                <h3 style="color: var(--text-light); margin-bottom: 10px;">No hay productos disponibles</h3>
                <p style="color: var(--text-light);">Prueba con otra categoría</p>
            </div>
        `;
        return;
    }

    productsToShow.forEach(product => {
        const isFavorite = APP_STATE.favorites.includes(product.id);

        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            <div class="product-image" style="background-image: url('${product.image}')"></div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${formatPrice(product.price)}</div>
                <div class="product-actions">
                    <button class="btn btn-primary btn-small" onclick="addToCart(${product.id})">
                        Agregar
                    </button>
                    <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${product.id})">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Filtrar menú por categoría
function filterMenu(category) {
    // Actualizar botones activos
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Activar botón clickeado
    event.target.classList.add('active');

    // Renderizar menú filtrado
    renderMenu(category);
}

// Alternar favorito
function toggleFavorite(productId) {
    const index = APP_STATE.favorites.indexOf(productId);

    if (index > -1) {
        // Remover de favoritos
        APP_STATE.favorites.splice(index, 1);
        showToast('Removido de favoritos');
    } else {
        // Agregar a favoritos
        APP_STATE.favorites.push(productId);
        showToast('Agregado a favoritos');
    }

    // Guardar en localStorage
    saveToStorage('miang_favorites', APP_STATE.favorites);

    // Actualizar UI
    updateFavoritesUI();

    // Si estamos en vista de favoritos, actualizar la vista
    const activeBtn = document.querySelector('.category-btn.active');
    if (activeBtn && activeBtn.textContent.includes('Recomendado')) {
        renderMenu('todos');
    }
}

// Actualizar contador de favoritos
function updateFavoritesUI() {
    const favoritesCount = document.querySelector('.favorites-count');
    if (favoritesCount) {
        favoritesCount.textContent = APP_STATE.favorites.length;
    }
}