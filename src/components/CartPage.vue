<template>
    <div class="cart-page">
      <div class="cart-container">
        <!-- Barre de navigation -->
        <nav>
          <router-link to="/">🏠 Accueil</router-link> |
          <router-link to="/menu">🍴 Menu</router-link>
        </nav>
  
        <!-- Titre principal -->
        <header class="cart-header">
          <h1>🛒 Votre Panier</h1>
        </header>
  
        <!-- Liste des articles du panier -->
        <section class="cart-items">
          <div v-for="(item, index) in cart" :key="index" class="cart-item">
            <div class="item-details">
              <h3>{{ item.name }}</h3>
              <p>{{ item.price }}€ x {{ item.quantity }}</p>
              <div class="item-actions">
                <input 
                  type="number" 
                  v-model="item.quantity" 
                  min="1" 
                  @change="updateQuantity"
                />
                <button @click="removeFromCart(index)" class="btn-remove">❌ Supprimer</button>
              </div>
            </div>
          </div>
        </section>
  
        <!-- Total et Finalisation -->
        <section class="cart-summary">
          <h3>Total : <span>{{ total }}€</span></h3>
          <input 
            type="text" 
            v-model="clientName" 
            placeholder="Nom du client"
          />
          <button @click="finalizeOrder" class="btn-finalize">✅ Finaliser la commande</button>
        </section>
      </div>
    </div>
  </template>
  
  
  <script>
  import { useToast } from 'vue-toastification';
  
  export default {
    data() {
      return {
        clientName: ''
      };
    },
    computed: {
      cart() {
        return this.$store.state.cart;
      },
      total() {
        return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      }
    },
    setup() {
      const toast = useToast();
      return { toast };
    },
    methods: {
      removeFromCart(index) {
        this.$store.commit('removeFromCart', index);
      },
      updateQuantity() {
        this.$store.commit('updateCart');
      },
      finalizeOrder() {
        if (this.clientName.trim() === '') {
          this.toast.error('Veuillez entrer le nom du client avant de finaliser la commande.');
          return;
        }
        this.$store.commit('finalizeOrder', this.clientName);
        this.toast.success('Commande finalisée!');
        this.clientName = '';
      }
    }
  };
  </script>
  
  <style>
  .cart-page {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: #f9fafc;
    min-height: 100vh;
    margin: 0;
    padding: 20px 0;
  }
  
  /* Conteneur centré */
  .cart-container {
    width: 80%;
    max-width: 1000px;
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
  .cart-header {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .cart-header h1 {
    font-size: 2.5rem;
    color: #333;
  }
  
  /* Liste des articles du panier */
  .cart-items {
    margin: 20px 0;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    padding: 20px 0;
  }
  
  .cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #eee;
  }
  
  .cart-item:last-child {
    border-bottom: none;
  }
  
  .item-details h3 {
    margin: 0;
    font-size: 1.2rem;
  }
  
  .item-details p {
    color: #777;
    margin: 5px 0;
  }
  
  .item-actions {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .item-actions input {
    width: 60px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
  }
  
  .item-actions .btn-remove {
    background: #e74c3c;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .item-actions .btn-remove:hover {
    background: #c0392b;
  }
  
  /* Total et Finalisation */
  .cart-summary {
    text-align: center;
    margin-top: 20px;
    padding: 20px;
    background: #fdf7e3;
    border-radius: 5px;
  }
  
  .cart-summary h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  
  .cart-summary span {
    font-weight: bold;
    color: #2c3e50;
  }
  
  .cart-summary input {
    width: 60%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
  }
  
  .btn-finalize {
    background: #27ae60;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .btn-finalize:hover {
    background: #1e8449;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .cart-container {
      width: 95%;
    }
  
    .cart-item {
      flex-direction: column;
      align-items: flex-start;
    }
  
    .item-actions {
      margin-top: 10px;
    }
  
    .cart-summary input {
      width: 80%;
    }
  }
  </style>