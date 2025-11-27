<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Miang Hamburguesas | Auténtico Sabor</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <!-- Header -->
    <header>
        <div class="container header-container">
            <a href="index.php" class="logo">
                <i class="fas fa-hamburger"></i>
                Miang<span>Burgers</span>
            </a>

            <nav>
                <ul>
                    <li><a href="index.php#inicio">Inicio</a></li>
                    <li><a href="index.php#menu">Menú</a></li>
                    <li><a href="index.php#sucursales">Sucursales</a></li>
                    <li><a href="index.php#nosotros">Nosotros</a></li>
                    <li><a href="index.php#contacto">Contacto</a></li>
                    <li><a href="admin/index.php" class="admin-link">Admin</a></li>
                </ul>
            </nav>

            <div class="nav-actions">
                <div class="favorites" id="favorites-btn">
                    <i class="fas fa-heart"></i>
                    <span class="favorites-count">0</span>
                </div>
                <div class="cart-icon" id="cart-btn">
                    <i class="fas fa-shopping-cart"></i>
                    <span class="cart-count">0</span>
                </div>
                <button class="btn btn-primary" onclick="scrollToSection('menu')">
                    <i class="fas fa-utensils"></i> Ordenar Ahora
                </button>
            </div>
        </div>
    </header>