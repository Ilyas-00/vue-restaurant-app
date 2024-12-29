import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  state: {
    cart: [],
    orders: []
  },
  mutations: {
    addToCart(state, dish) {
      const existing = state.cart.find(item => item.name === dish.name);
      if (existing) {
        existing.quantity++;
      } else {
        state.cart.push({ ...dish, quantity: 1 });
      }
    },
    removeFromCart(state, index) {
      state.cart.splice(index, 1);
    },
    updateCart(state) {
      console.log('Mise à jour du panier:', state.cart);
    },
    clearCart(state) {
      state.cart = [];
    },
    finalizeOrder(state, clientName) {
      if (state.cart.length > 0 && clientName) {
        state.orders.push({
          clientName: clientName,
          details: [...state.cart],
          status: 'finalized',
          timestamp: Date.now()
        });
        console.log('Commande finalisée par:', clientName);
        state.cart = [];
      }
    },
    markOrderReady(state, index) {
      if (state.orders[index]) {
        state.orders[index].status = 'ready';
        console.log(`Commande ${index + 1} marquée comme prête.`);
      }
    }
  },
  getters: {
    allOrders(state) {
      return state.orders;
    },
    finalizedOrders(state) {
      return state.orders.filter(order => order.status === 'finalized');
    },
    readyOrders(state) {
      return state.orders.filter(order => order.status === 'ready');
    }
  },
  plugins: [
    createPersistedState({
      storage: window.localStorage,
      paths: ['orders']
    })
  ]
});
