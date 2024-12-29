<template>
    <div class="admin-page">
      <div class="admin-container">
        <!-- Barre de navigation -->
        <nav>
          <router-link to="/">🏠 Accueil</router-link> |
          <router-link to="/menu">🍴 Menu</router-link> |
          <router-link to="/cart">🛒 Panier</router-link>
        </nav>
  
        <!-- Titre Principal -->
        <header class="admin-header">
          <h1>📊 Administration des Commandes</h1>
        </header>
  
        <!-- Commandes Finalisées -->
        <section class="orders-section">
          <h2>📦 Commandes Finalisées</h2>
          <div v-for="(order, index) in finalizedOrders" :key="order.timestamp" class="order-card">
            <h3>
              Commande {{ index + 1 }} - {{ order.clientName }} - {{ new Date(order.timestamp).toLocaleString() }}
            </h3>
            <ul>
              <li v-for="(item, i) in order.details" :key="i">
                {{ item.name }} - {{ item.quantity }} x {{ item.price }}€
              </li>
            </ul>
            <button @click="markAsReady(order.timestamp)" class="btn-ready">✅ Marquer comme prête</button>
          </div>
        </section>
  
        <!-- Commandes Prêtes -->
        <section class="orders-section ready-orders">
          <h2>✅ Commandes Prêtes</h2>
          <div v-for="(order, index) in readyOrders" :key="order.timestamp" class="order-card ready">
            <h3>
              Commande {{ index + 1 }} - {{ order.clientName }} - {{ new Date(order.timestamp).toLocaleString() }}
            </h3>
            <ul>
              <li v-for="(item, i) in order.details" :key="i">
                {{ item.name }} - {{ item.quantity }} x {{ item.price }}€
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      finalizedOrders() {
        return this.$store.getters.finalizedOrders;
      },
      readyOrders() {
        return this.$store.getters.readyOrders;
      }
    },
    methods: {
      markAsReady(timestamp) {
        const index = this.$store.state.orders.findIndex(order => order.timestamp === timestamp);
        if (index !== -1) {
          this.$store.commit('markOrderReady', index);
          this.$forceUpdate(); // Force la mise à jour de l'affichage
        }
      }
    }
  };
  </script>
  
  <style scoped>
 /* Page principale */
.admin-page {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #f9fafc;
  min-height: 100vh;
  margin: 0;
  padding: 20px 0;
}

/* Conteneur centré */
.admin-container {
  width: 80%;
  max-width: 1200px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 20px;
}

/* Barre de navigation */
nav {
  background: #2c3e50;
  color: white;
  padding: 10px;
  text-align: center;
  margin-bottom: 20px;
  border-radius: 5px;
}

nav a {
  color: white;
  margin: 0 10px;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}

/* Titre principal */
.admin-header {
  text-align: center;
  margin-bottom: 30px;
}

.admin-header h1 {
  font-size: 2.5rem;
  color: #333;
}

/* Sections de commandes */
.orders-section {
  margin-bottom: 30px;
}

.orders-section h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
  color: #555;
  border-bottom: 2px solid #ddd;
  padding-bottom: 10px;
}

/* Carte de commande */
.order-card {
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.order-card:hover {
  transform: translateY(-5px);
}

.order-card h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #333;
}

.order-card ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.order-card li {
  font-size: 1rem;
  color: #555;
  margin-bottom: 5px;
}

/* Bouton pour marquer comme prête */
.btn-ready {
  margin-top: 10px;
  background: #27ae60;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-ready:hover {
  background: #1e8449;
}

/* Commandes Prêtes - Carte spécifique */
.ready-orders .order-card {
  background: #e8f5e9;
  border-left: 5px solid #2ecc71;
}

.ready-orders .order-card h3 {
  color: #2c3e50;
}

/* Responsive Design */
@media (max-width: 768px) {
  .admin-container {
    width: 95%;
  }

  .order-card {
    padding: 10px;
  }

  .admin-header h1 {
    font-size: 2rem;
  }

  .orders-section h2 {
    font-size: 1.5rem;
  }
}

  </style>
  