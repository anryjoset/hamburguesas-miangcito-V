<?php
session_start();
// Simulación de login (en un proyecto real usarías autenticación proper)
if (!isset($_SESSION['admin_logged_in'])) {
    header('Location: login.php');
    exit();
}

include_once '../config/database.php';
include_once '../models/Producto.php';

$database = new Database();
$db = $database->getConnection();

$producto = new Producto($db);
$stmt = $producto->leer();
$totalProductos = $stmt->rowCount();
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Panel Admin - Miang Burgers</title>
    <link rel="stylesheet" href="css/admin.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <div class="admin-container">
        <!-- Sidebar -->
        <div class="sidebar">
            <div class="logo">
                <i class="fas fa-hamburger"></i>
                <span>Miang Admin</span>
            </div>
            <nav class="sidebar-nav">
                <a href="index.php" class="nav-item active">
                    <i class="fas fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </a>
                <a href="productos/crear.php" class="nav-item">
                    <i class="fas fa-plus-circle"></i>
                    <span>Crear Producto</span>
                </a>
                <a href="productos/leer.php" class="nav-item">
                    <i class="fas fa-list"></i>
                    <span>Gestionar Productos</span>
                </a>
                <a href="../index.php" class="nav-item">
                    <i class="fas fa-home"></i>
                    <span>Ver Sitio Web</span>
                </a>
                <a href="logout.php" class="nav-item">
                    <i class="fas fa-sign-out-alt"></i>
                    <span>Cerrar Sesión</span>
                </a>
            </nav>
        </div>

        <!-- Main Content -->
        <div class="main-content">
            <div class="header">
                <h1>Dashboard Administrativo</h1>
                <div class="user-info">
                    <span>Bienvenido, Admin</span>
                </div>
            </div>

            <!-- Stats Cards -->
            <div class="stats-cards">
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-hamburger"></i>
                    </div>
                    <div class="stat-info">
                        <h3><?php echo $totalProductos; ?></h3>
                        <p>Productos Activos</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <div class="stat-info">
                        <h3>10K+</h3>
                        <p>Clientes Felices</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-store"></i>
                    </div>
                    <div class="stat-info">
                        <h3>2</h3>
                        <p>Sucursales</p>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-star"></i>
                    </div>
                    <div class="stat-info">
                        <h3>5.0</h3>
                        <p>Calificación</p>
                    </div>
                </div>
            </div>

            <!-- Quick Actions -->
            <div class="quick-actions">
                <h2>Acciones Rápidas</h2>
                <div class="action-buttons">
                    <a href="productos/crear.php" class="action-btn">
                        <i class="fas fa-plus"></i>
                        <span>Agregar Producto</span>
                    </a>
                    <a href="productos/leer.php" class="action-btn">
                        <i class="fas fa-edit"></i>
                        <span>Gestionar Productos</span>
                    </a>
                    <a href="../index.php" class="action-btn">
                        <i class="fas fa-eye"></i>
                        <span>Ver Sitio Web</span>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <script src="js/admin.js"></script>
</body>
</html>