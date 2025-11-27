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

$producto->id = isset($_GET['id']) ? $_GET['id'] : die('ERROR: ID no especificado.');

if ($producto->leerUno()) {
    $nombre = $producto->nombre;
    $descripcion = $producto->descripcion;
    $precio = $producto->precio;
    $categoria = $producto->categoria;
    $imagen = $producto->imagen;
} else {
    die('ERROR: Producto no encontrado.');
}

$message = '';
$message_type = '';

if ($_POST) {
    $producto->nombre = $_POST['nombre'];
    $producto->descripcion = $_POST['descripcion'];
    $producto->precio = $_POST['precio'];
    $producto->categoria = $_POST['categoria'];
    $producto->imagen = $_POST['imagen'];

    if ($producto->actualizar()) {
        $message = "Producto actualizado exitosamente!";
        $message_type = "success";
        // Recargar datos
        $producto->leerUno();
        $nombre = $producto->nombre;
        $descripcion = $producto->descripcion;
        $precio = $producto->precio;
        $categoria = $producto->categoria;
        $imagen = $producto->imagen;
    } else {
        $message = "Error al actualizar el producto.";
        $message_type = "error";
    }
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Editar Producto - Miang Admin</title>
    <link rel="stylesheet" href="../css/admin.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <div class="admin-container">
        <?php include '../sidebar.php'; ?>

        <div class="main-content">
            <div class="header">
                <h1>Editar Producto</h1>
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
                        <input type="text" id="nombre" name="nombre" value="<?php echo htmlspecialchars($nombre); ?>" required>
                    </div>

                    <div class="form-group">
                        <label for="descripcion">Descripción:</label>
                        <textarea id="descripcion" name="descripcion" rows="4" required><?php echo htmlspecialchars($descripcion); ?></textarea>
                    </div>

                    <div class="form-group">
                        <label for="precio">Precio:</label>
                        <input type="number" id="precio" name="precio" step="0.01" min="0" value="<?php echo $precio; ?>" required>
                    </div>

                    <div class="form-group">
                        <label for="categoria">Categoría:</label>
                        <select id="categoria" name="categoria" required>
                            <option value="hamburguesas" <?php echo $categoria == 'hamburguesas' ? 'selected' : ''; ?>>Hamburguesas</option>
                            <option value="desayunos" <?php echo $categoria == 'desayunos' ? 'selected' : ''; ?>>Desayunos</option>
                            <option value="combos" <?php echo $categoria == 'combos' ? 'selected' : ''; ?>>Combos</option>
                            <option value="acompanamientos" <?php echo $categoria == 'acompanamientos' ? 'selected' : ''; ?>>Acompañamientos</option>
                            <option value="bebidas" <?php echo $categoria == 'bebidas' ? 'selected' : ''; ?>>Bebidas</option>
                            <option value="postres" <?php echo $categoria == 'postres' ? 'selected' : ''; ?>>Postres</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="imagen">Imagen (URL o nombre de archivo):</label>
                        <input type="text" id="imagen" name="imagen" value="<?php echo htmlspecialchars($imagen); ?>" placeholder="ej: hamburguesa-clasica.jpg">
                    </div>

                    <div class="form-actions">
                        <button type="submit" class="btn btn-primary">
                            <i class="fas fa-save"></i> Actualizar Producto
                        </button>
                        <a href="leer.php" class="btn btn-secondary">Cancelar</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>
</html>