<?php
include_once 'config/database.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $database = new Database();
    $db = $database->getConnection();

    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $mensaje = $_POST['mensaje'];

    // Insertar en base de datos
    $query = "INSERT INTO contactos (nombre, email, telefono, mensaje) VALUES (?, ?, ?, ?)";
    $stmt = $db->prepare($query);
    
    if ($stmt->execute([$nombre, $email, $telefono, $mensaje])) {
        // Email de confirmación (simulado)
        $to = "info@miangburgers.com";
        $subject = "Nuevo mensaje de contacto - Miang Burgers";
        $body = "Nombre: $nombre\nEmail: $email\nTeléfono: $telefono\nMensaje: $mensaje";
        $headers = "From: $email";

        // En un entorno real, usarías mail() o una librería de email
        // mail($to, $subject, $body, $headers);

        header('Location: index.php?contacto=success#contacto');
    } else {
        header('Location: index.php?contacto=error#contacto');
    }
    exit();
} else {
    header('Location: index.php');
    exit();
}
?>