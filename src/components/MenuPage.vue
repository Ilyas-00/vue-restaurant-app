<template>
  <div class="menu-page">
    <div class="menu-container">
      <!-- Barre de navigation -->
      <nav>
        <router-link to="/">🏠 Accueil</router-link> |
        <router-link to="/cart">🛒 Voir le Panier</router-link>
      </nav>

      <!-- Titre principal -->
      <header class="menu-header">
        <h1>🍴 Notre Menu</h1>
        <p>Découvrez notre sélection de plats, desserts et boissons soigneusement préparés.</p>
      </header>

      <!-- Catégories -->
      <section class="menu-section">
        <h2>🥘 Plats Principaux</h2>
        <div class="menu-grid">
          <div v-for="(dish, index) in dishes" :key="index" class="menu-item">
            <img :src="dish.image" :alt="dish.name" />
            <h3>{{ dish.name }}</h3>
            <p>{{ dish.price }}€</p>
            <button @click="addToCart(dish)">Ajouter au panier</button>
          </div>
        </div>

        <h2>🍰 Desserts</h2>
        <div class="menu-grid">
          <div v-for="(dessert, index) in desserts" :key="index" class="menu-item">
            <img :src="dessert.image" :alt="dessert.name" />
            <h3>{{ dessert.name }}</h3>
            <p>{{ dessert.price }}€</p>
            <button @click="addToCart(dessert)">Ajouter au panier</button>
          </div>
        </div>

        <h2>🥤 Boissons</h2>
        <div class="menu-grid">
          <div v-for="(drink, index) in drinks" :key="index" class="menu-item">
            <img :src="drink.image" :alt="drink.name" />
            <h3>{{ drink.name }}</h3>
            <p>{{ drink.price }}€</p>
            <button @click="addToCart(drink)">Ajouter au panier</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { useToast } from 'vue-toastification';

export default {
  data() {
    return {
      dishes: [
        { name: 'Pizza Margherita', price: 12, image: 'images/pizza.jpg' },
        { name: 'Pâtes Carbonara', price: 10, image: 'images/image1.png' },
        { name: 'Steak Grillé', price: 18, image: 'images/image.png' }
      ],
      desserts: [
        { name: 'Tiramisu', price: 6, image: 'images/tiramisu.jpg' },
        { name: 'Cheesecake', price: 5, image: 'images/cheese.jpg' },
        { name: 'Mousse au Chocolat', price: 5, image: 'images/chocolat..jpg' }
      ],
      drinks: [
        { name: 'Coca-Cola', price: 3, image: 'images/cocacola.jpg' },
        { name: 'Jus d’Orange', price: 4, image: 'images/jus.jpg' },
        { name: 'Eau Minérale', price: 2, image: 'images/waterhhh.jpg' }
      ]
    };
  },
  setup() {
    const toast = useToast();
    return { toast };
  },
  methods: {
    addToCart(item) {
      this.$store.commit('addToCart', item);
      this.toast.success(`${item.name} ajouté au panier!`);
    }
  }
};
</script>

<style scoped>
/* Page entière centrée */
.menu-page {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #f9fafc;
  min-height: 100vh; /* Prend toute la hauteur de l'écran */
  margin: 0;
}

/* Conteneur principal centré */
.menu-container {
  width: 80%;
  max-width: 1200px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

/* Barre de navigation */
nav {
  background: #333;
  color: white;
  padding: 10px;
  text-align: center;
}

nav a {
  color: white;
  margin: 0 10px;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}

/* En-tête de la page */
.menu-header {
  text-align: center;
  padding: 30px 10px;
  background: #fdf7e3;
  margin-bottom: 30px;
}

.menu-header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.menu-header p {
  font-size: 1.2rem;
  color: #555;
}

/* Sections du menu */
.menu-section {
  margin: 0 5%;
}

.menu-section h2 {
  font-size: 2rem;
  margin: 30px 0 20px;
  text-align: center;
}

/* Grille des éléments */
.menu-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

/* Élément individuel */
.menu-item {
  text-align: center;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  width: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.menu-item:hover {
  transform: translateY(-5px);
}

.menu-item img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
}

.menu-item h3 {
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.menu-item p {
  font-size: 1rem;
  margin-bottom: 10px;
  color: #777;
}

.menu-item button {
  background: #d4a373;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.menu-item button:hover {
  background: #bc8a5a;
}

/* Responsivité */
@media (max-width: 768px) {
  .menu-grid {
    flex-direction: column;
    align-items: center;
  }

  .menu-container {
    width: 95%;
  }

  .menu-header h1 {
    font-size: 2rem;
  }
}
</style>
