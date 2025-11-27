<?php
// Incluir configuración de base de datos
include_once 'config/database.php';
include_once 'models/Producto.php';

// Obtener conexión a la base de datos
$database = new Database();
$db = $database->getConnection();

// Obtener productos
$producto = new Producto($db);
$stmt = $producto->leer();
$productos = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<?php include_once 'includes/header.php'; ?>

    <!-- Hero Section -->
    <section class="hero" id="inicio">
        <div class="container">
            <h1>DESCUBRE EL AUTÉNTICO SABOR MIANG</h1>
            <p>Donde cada hamburguesa es una experiencia única. Ingredientes 100% frescos, preparación artesanal y ese
                toque secreto que te hará volver por más.</p>
            <div class="hero-buttons">
                <button class="btn btn-primary" onclick="scrollToSection('menu')">Ver Menú Completo</button>
                <button class="btn btn-outline" onclick="openWhatsApp()">Pedir Express</button>
            </div>
        </div>
    </section>

    <!-- Stats Section -->
    <section class="stats">
        <div class="container stats-container">
            <div class="stat-item">
                <div class="stat-number">10K+</div>
                <div class="stat-text">Clientes Felices</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">50+</div>
                <div class="stat-text">Tipos de Hamburguesas</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">5★</div>
                <div class="stat-text">Calificación</div>
            </div>
        </div>
    </section>

    <!-- Menu Section -->
    <section class="menu" id="menu">
        <div class="container">
            <div class="section-title">
                <h2>NUESTRO MENÚ</h2>
                <p>Los favoritos de nuestros clientes</p>
            </div>

            <!-- Navegación de Categorías -->
            <div class="menu-categories">
                <button class="category-btn active" onclick="filterMenu('todos')">
                    <i class="fas fa-star"></i> Lo Más Recomendado
                </button>
                <button class="category-btn" onclick="filterMenu('hamburguesas')">
                    <i class="fas fa-hamburger"></i> Hamburguesas
                </button>
                <button class="category-btn" onclick="filterMenu('desayunos')">
                    <i class="fas fa-egg"></i> Desayunos
                </button>
                <button class="category-btn" onclick="filterMenu('combos')">
                    <i class="fas fa-box"></i> Combos
                </button>
                <button class="category-btn" onclick="filterMenu('acompanamientos')">
                    <i class="fas fa-utensils"></i> Acompañamientos
                </button>
                <button class="category-btn" onclick="filterMenu('bebidas')">
                    <i class="fas fa-glass-whiskey"></i> Bebidas
                </button>
                <button class="category-btn" onclick="filterMenu('postres')">
                    <i class="fas fa-ice-cream"></i> Postres
                </button>
            </div>

            <!-- Grid de Productos desde Base de Datos -->
            <div class="products-grid" id="products-grid">
                <?php if(count($productos) > 0): ?>
                    <?php foreach($productos as $producto): ?>
                        <div class="product-card" data-category="<?php echo $producto['categoria']; ?>">
                            <div class="product-image">
                                <img src="images/<?php echo $producto['imagen'] ?: 'default.jpg'; ?>" alt="<?php echo $producto['nombre']; ?>">
                                <button class="favorite-btn" onclick="toggleFavorite(this)">
                                    <i class="far fa-heart"></i>
                                </button>
                            </div>
                            <div class="product-info">
                                <h3><?php echo htmlspecialchars($producto['nombre']); ?></h3>
                                <p><?php echo htmlspecialchars($producto['descripcion']); ?></p>
                                <div class="product-price">
                                    <span class="price">$<?php echo number_format($producto['precio'], 2); ?></span>
                                    <button class="btn btn-primary add-to-cart" 
                                            onclick="addToCart(<?php echo $producto['id']; ?>, '<?php echo htmlspecialchars($producto['nombre']); ?>', <?php echo $producto['precio']; ?>)">
                                        <i class="fas fa-plus"></i> Agregar
                                    </button>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                <?php else: ?>
                    <div class="no-products">
                        <p>No hay productos disponibles en este momento.</p>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </section>

    <!-- Resto de tus secciones (Sucursales, Nosotros, Contacto) se mantienen igual -->
    <!-- Sucursales Section -->
    <section class="branches" id="sucursales">
        <div class="container">
            <div class="section-title">
                <h2>NUESTRAS SUCURSALES</h2>
                <p>Encuentra el Miang más cercano a ti</p>
            </div>
            <div class="branches-grid">
                <div class="branch-card">
                    <h3>Miang Centro</h3>
                    <p><i class="fas fa-map-marker-alt"></i> Av. Principal #123</p>
                    <p><i class="fas fa-phone"></i> 525613294301</p>
                    <p><i class="fas fa-clock"></i> 8:00 AM - 11:00 PM</p>
                    <button class="btn btn-outline" onclick="openMap('Centro')">Ver en Mapa</button>
                </div>
                <div class="branch-card">
                    <h3>Miang Plaza</h3>
                    <p><i class="fas fa-map-marker-alt"></i> Plaza Comercial #456</p>
                    <p><i class="fas fa-phone"></i> 525613294301</p>
                    <p><i class="fas fa-clock"></i> 9:00 AM - 10:00 PM</p>
                    <button class="btn btn-outline" onclick="openMap('Plaza')">Ver en Mapa</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Nosotros Section -->
    <section class="about" id="nosotros">
        <div class="container">
            <div class="section-title">
                <h2>SOBRE NOSOTROS</h2>
                <p>La historia detrás del auténtico sabor Miang</p>
            </div>
            <div class="about-content">
                <div class="about-text">
                    <p>Desde 2010, Miang Burgers ha sido el destino preferido para los amantes de las hamburguesas
                        artesanales. Todo comenzó como un pequeño local familiar con una receta secreta que ha pasado de
                        generación en generación.</p>
                    <p>Hoy mantenemos esa misma pasión y dedicación, usando solo ingredientes 100% frescos y preparando
                        cada hamburguesa con el mismo amor que nos caracteriza.</p>
                </div>
                <div class="about-values">
                    <div class="value-item">
                        <i class="fas fa-heart"></i>
                        <h4>Pasión</h4>
                    </div>
                    <div class="value-item">
                        <i class="fas fa-award"></i>
                        <h4>Calidad</h4>
                    </div>
                    <div class="value-item">
                        <i class="fas fa-users"></i>
                        <h4>Familia</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contacto Section -->
    <section class="contact" id="contacto">
        <div class="container">
            <div class="section-title">
                <h2>CONTÁCTANOS</h2>
                <p>Estamos aquí para servirte</p>
            </div>
            <div class="contact-content">
                <div class="contact-info">
                    <div class="contact-item">
                        <i class="fas fa-phone"></i>
                        <h4>Teléfono</h4>
                        <p>525613294301</p>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i>
                        <h4>Email</h4>
                        <p>anryjoset52@gmail.com</p>
                    </div>
                    <div class="contact-item">
                        <i class="fab fa-whatsapp"></i>
                        <h4>WhatsApp</h4>
                        <p>525613294301</p>
                        <button class="btn btn-primary" onclick="openWhatsApp()">
                            <i class="fab fa-whatsapp"></i> Escribir
                        </button>
                    </div>
                </div>
                <form class="contact-form" action="procesar-contacto.php" method="POST">
                    <h3>Envíanos un Mensaje</h3>
                    <input type="text" name="nombre" placeholder="Nombre Completo" required>
                    <input type="email" name="email" placeholder="Email" required>
                    <input type="tel" name="telefono" placeholder="Teléfono">
                    <textarea name="mensaje" placeholder="Mensaje" rows="5" required></textarea>
                    <button type="submit" class="btn btn-primary">Enviar Mensaje</button>
                </form>
            </div>
        </div>
    </section>

<?php include_once 'includes/footer.php'; ?>