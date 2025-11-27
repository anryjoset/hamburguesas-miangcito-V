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

$message = '';
$message_type = '';

if ($_POST) {
    $producto->nombre = $_POST['nombre'];
    $producto->descripcion = $_POST['descripcion'];
    $producto->precio = $_POST['precio'];
    $producto->categoria = $_POST['categoria'];
    $producto->imagen = $_POST['imagen'];
    $producto->activo = 1;

    if ($producto->crear()) {
        $message = "Producto creado exitosamente!";
        $message_type = "success";
    } else {
        $message = "Error al crear el producto.";
        $message_type = "error";
    }
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crear Producto - Miang Admin</title>
    <link rel="stylesheet" href="../css/admin.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <div class="admin-container">
        <?php include '../sidebar.php'; ?>

        <div class="main-content">
            <div class="header">
                <h1>Crear Nuevo Producto</h1>
                <a href="leer.php" class="btn btn-secondary">
                    <i class="fas fa-arrow-left"></i> Volver
                </a>
            </div>

            <?php if ($message): ?>
                <div class="message <?php echo $message_type; ?>">
                    <?php echo $message; ?>
                </div>
            <?php endif; ?>

            <div class="form-container">
                <form method="POST" class="product-form">
                    <div class="form-group">
                        <label for="nombre">Nombre del Producto:</label>
                        <input type="text" id="nombre" name="nombre" required>
                    </div>

                    <div class="form-group">
                        <label for="descripcion">Descripción:</label>
                        <textarea id="descripcion" name="descripcion" rows="4" required></textarea>
                    </div>

                    <div class="form-group">
                        <label for="precio">Precio:</label>
                        <input type="number" id="precio" name="precio" step="0.01" min="0" required>
                    </div>

                    <div class="form-group">
                        <label for="categoria">Categoría:</label>
                        <select id="categoria" name="categoria" required>
                            <option value="">Selecciona una categoría</option>
                            <option value="hamburguesas">Hamburguesas</option>
                            <option value="desayunos">Desayunos</option>
                            <option value="combos">Combos</option>
                            <option value="acompanamientos">Acompañamientos</option>
                            <option value="bebidas">Bebidas</option>
                            <option value="postres">Postres</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="imagen">Imagen (URL o nombre de archivo):</label>
                        <input type="text" id="imagen" name="imagen" placeholder="ej: hamburguesa-clasica.jpg">
                    </div>

                    <div class="form-actions">
                        <button type="submit" class="btn btn-primary">
                            <i class="fas fa-save"></i> Crear Producto
                        </button>
                        <a href="leer.php" class="btn btn-secondary">Cancelar</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>
</html>