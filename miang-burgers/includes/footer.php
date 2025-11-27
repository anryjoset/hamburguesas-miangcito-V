    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Miang Burgers</h3>
                    <p>Donde cada hamburguesa es una experiencia única.</p>
                    <div class="social-links">
                        <a href="https://www.facebook.com/share/19ivnAvKDm/" target="_blank"><i class="fab fa-facebook"></i></a>
                        <a href="https://www.instagram.com/d3rek.vega00?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div class="footer-section">
                    <h3>Enlaces Rápidos</h3>
                    <a href="index.php#menu">Menú</a>
                    <a href="index.php#sucursales">Sucursales</a>
                    <a href="index.php#contacto">Contacto</a>
                    <a href="admin/index.php">Panel Admin</a>
                </div>
                <div class="footer-section">
                    <h3>Horarios</h3>
                    <p>Lunes a Domingo</p>
                    <p>8:00 AM - 11:00 PM</p>
                </div>
                <div class="footer-section">
                    <h3>Contacto</h3>
                    <p><i class="fas fa-phone"></i> 525613294301</p>
                    <p><i class="fas fa-envelope"></i> .com</p>
                </div>
            </div>
            <div class="copyright">
                &copy; 2025 Miang Burgers. Todos los derechos reservados.
            </div>
        </div>
    </footer>

    <!-- Cart Sidebar -->
    <div class="cart-sidebar" id="cart-sidebar">
        <div class="cart-header">
            <h3>Tu Pedido</h3>
            <button class="close-cart" onclick="closeCart()">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="cart-items" id="cart-items">
            <!-- Los items del carrito se cargan aquí -->
        </div>
        <div class="cart-footer">
            <div class="cart-total">
                <span>Total:</span>
                <span id="cart-total">$0</span>
            </div>
            <button class="btn btn-primary checkout-btn" onclick="checkout()">
                Finalizar Pedido
            </button>
        </div>
    </div>

    <!-- JavaScript Files -->
    <script src="js/utils.js"></script>
    <script src="js/main.js"></script>
    <script src="js/menu.js"></script>
    <script src="js/cart.js"></script>
    <script src="js/navigation.js"></script>
    <script src="js/contact.js"></script>
</body>
</html>