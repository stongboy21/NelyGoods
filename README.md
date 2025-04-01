<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="acceuil.css">
    <title>NelyGoods</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    
</head>
<body>
    <!-- Header -->
    <header>
        <h1>bienvenue chez NelyGoods</h1>
        <p>Faites vos achats en ligne facilement et rapidement</p>
    </header>

    <!-- Navigation -->
    <nav>
        <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Produits</a></li>
            <li><a href="/Apropos/index.html">À propos</a></li>
            <li><a href="/contact/index.html">Contact</a></li>
            <li class="dropdown">
                <a href="#" class="dropbtn">Mon Compte</a>
                <div class="dropdown-content">
                    <a href="#">Profil</a>
                    <a href="#">Paramètres</a>
                    <a href="/inscription/connexion/index.html">Inscription/Connexion</a>
                    <a href="#">Historique d'achat</a>
                </div>
            </li>
        </ul>
    </nav>

    <!-- Filtre de recherche -->
    <div class="search-filter">
        <div class="search-bar">
            <input type="text" id="searchInput" placeholder="Rechercher des produits...">
            <button onclick="searchProducts()">Rechercher</button>
        </div>
        <div class="filter">
            <label for="departement">Sélectionner le département :</label>
            <select id="departement">
                <option value="pointe-noire">pointe-noire</option>
                <option value="Brazzaville">Brazzaville</option>
                <option value="Pool">Pool</option>
                <option value="Cuvette">Cuvette</option>
                <option value="Cuvette-Ouest">Cuvette-Ouest</option>
                <option value="Kouilou">Kouilou</option>
                <option value="Lekoumou">Lekoumou</option>
                <option value="Niari">Niari</option>
                <option value="Plateaux">Plateaux</option>
                <option value="Sangha">Sangha</option>
                <option value="Likouala">Likouala</option>
            </select>
        </div>
    </div>

    <!-- Section Hero -->
    <div class="hero-section">
        <h2>Découvrez les meilleures offres</h2>
        <p>Choisissez parmi une large gamme de produits de qualité</p>
    </div>

    <!-- Produits -->
    <div class="products" id="products">
        <div class="product-card" data-category="electronique">
            <img src="product1.jpg" alt="Produit 1">
            <h3>Produit 1</h3>
            <p>Catégorie : Électronique</p>
            <button>Acheter</button>
        </div>
        <div class="product-card" data-category="vetement">
            <img src="" alt="Produit 2">
            <h3>Produit 2</h3>
            <p>Catégorie : Vêtements</p>
            <p>PRIX : 1500fcfa</p>
            <button>Acheter</button>
        </div>
        <div class="product-card" data-category="boisson">
            <img src="img2.jpg" alt="Produit 3">
            <h3>Produit 3</h3>
            <p>Catégorie : Rafraîchissements</p>
            <button>Acheter</button>
        </div>
        <div class="product-card" data-category="electronique">
            <img src="product1.jpg" alt="Produit 1">
            <h3>Produit 1</h3>
            <p>Catégorie : Électronique</p>
            <button>Acheter</button>
        </div>
        <div class="product-card" data-category="vetement">
            <img src="" alt="Produit 2">
            <h3>Produit 2</h3>
            <p>Catégorie : Vêtements</p>
            <p>PRIX : 1500fcfa</p>
            <button>Acheter</button>
        </div>
        <div class="product-card" data-category="boisson">
            <img src="img2.jpg" alt="Produit 3">
            <h3>Produit 3</h3>
            <p>Catégorie : Rafraîchissements</p>
            <button>Acheter</button>
        </div>
    </div>

    <!-- Footer -->
    <footer>
        <section class="social-links">
            <h2>Suivez-nous sur nos réseaux sociaux :</h2>
            <div class="social-icons">
                <a href="https://www.facebook.com/NelyGoods échange" target="_blank" class="social-icon">
                    <i class="fab fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/lamontmavoungou" target="_blank" class="social-icon">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com/tonprofil" target="_blank" class="social-icon">
                    <i class="fab fa-twitter"></i>
                <a href="https://wa.me/+242064747755" target="_blank" class="social-icon">
                    <i class="fab fa-whatsapp"></i>
                </a>
                <!-- Ajoute d'autres réseaux si nécessaire -->
            </div>
        </section>
        <p>&copy; 2025 Site Web. Tous droits réservés.</p>
    </footer>

    <script src="acceuil.js"></script>
</body>
</html>
