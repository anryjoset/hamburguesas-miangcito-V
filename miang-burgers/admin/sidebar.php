<?php
// Sidebar reusable para todas las páginas del admin
?>
<!-- Sidebar -->
<div class="sidebar">
    <div class="logo">
        <i class="fas fa-hamburger"></i>
        <span>Miang Admin</span>
    </div>
    <nav class="sidebar-nav">
        <a href="index.php" class="nav-item <?php echo basename($_SERVER['PHP_SELF']) == 'index.php' ? 'active' : ''; ?>">
            <i class="fas fa-tachometer-alt"></i>
            <span>Dashboard</span>
        </a>
        <a href="productos/crear.php" class="nav-item <?php echo basename($_SERVER['PHP_SELF']) == 'crear.php' ? 'active' : ''; ?>">
            <i class="fas fa-plus-circle"></i>
            <span>Crear Producto</span>
        </a>
        <a href="productos/leer.php" class="nav-item <?php echo basename($_SERVER['PHP_SELF']) == 'leer.php' ? 'active' : ''; ?>">
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