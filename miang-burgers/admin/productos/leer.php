<?php
session_start();
if (!isset($_SESSION['admin_logged_in'])) {
    header('Location: ../login.php');
    exit();
}

include_once '../../config/database.php';
include_once '../../models/Producto.php';

$database = new Database();
$db = $database->getConnection();
$producto = new Producto($db);

$stmt = $producto->leer();
$productos = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Procesar eliminación
if (isset($_GET['eliminar_id'])) {
    $producto->id = $_GET['eliminar_id'];
    if ($producto->eliminar()) {
        header('Location: leer.php?message=Producto eliminado&type=success');
        exit();
    } else {
        header('Location: leer.php?message=Error al eliminar&type=error');
        exit();
    }
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestionar Productos - Miang Admin</title>
    <link rel="stylesheet" href="../css/admin.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <div class="admin-container">
        <?php include '../sidebar.php'; ?>

        <div class="main-content">
            <div class="header">
                <h1>Gestionar Productos</h1>
                <a href="crear.php" class="btn btn-primary">
                    <i class="fas fa-plus"></i> Nuevo Producto
                </a>
            </div>

            <?php if (isset($_GET['message'])): ?>
                <div class="message <?php echo $_GET['type']; ?>">
                    <?php echo $_GET['message']; ?>
                </div>
            <?php endif; ?>

            <div class="table-container">
                <table class="products-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Precio</th>
                            <th>Categoría</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php if (count($productos) > 0): ?>
                            <?php foreach ($productos as $producto): ?>
                                <tr>
                                    <td><?php echo $producto['id']; ?></td>
                                    <td><?php echo htmlspecialchars($producto['nombre']); ?></td>
                                    <td><?php echo htmlspecialchars($producto['descripcion']); ?></td>
                                    <td>$<?php echo number_format($producto['precio'], 2); ?></td>
                                    <td>
                                        <span class="category-badge <?php echo $producto['categoria']; ?>">
                                            <?php echo ucfirst($producto['categoria']); ?>
                                        </span>
                                    </td>
                                    <td class="actions">
                                        <a href="actualizar.php?id=<?php echo $producto['id']; ?>" class="btn btn-edit">
                                            <i class="fas fa-edit"></i> Editar
                                        </a>
                                        <a href="leer.php?eliminar_id=<?php echo $producto['id']; ?>" 
                                           class="btn btn-delete" 
                                           onclick="return confirm('¿Estás seguro de eliminar este producto?')">
                                            <i class="fas fa-trash"></i> Eliminar
                                        </a>
                                    </td>
                                </tr>
                            <?php endforeach; ?>
                        <?php else: ?>
                            <tr>
                                <td colspan="6" class="no-data">No hay productos registrados.</td>
                            </tr>
                        <?php endif; ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <script>
        function confirmDelete(productId, productName) {
            return confirm(`¿Estás seguro de que quieres eliminar "${productName}"?`);
        }
    </script>
</body>
</html>