<template>
    <div class="home-page">
      <div class="home-container">
        <!-- En-tête avec image de fond -->
        <header class="hero">
          <div class="hero-overlay">
            <h1>Bienvenue au Restaurant Exquis</h1>
            <p>Une expérience culinaire inoubliable vous attend.</p>
            <router-link to="/menu" class="btn">Découvrir le Menu</router-link>
          </div>
        </header>
  
        <!-- Section Présentation -->
        <section class="intro">
          <h2>Pourquoi choisir notre restaurant ?</h2>
          <p>
            Nous offrons une cuisine d'exception, préparée avec passion par des chefs expérimentés,
            dans une ambiance chaleureuse et élégante.
          </p>
        </section>
  
        <!-- Section Typologie -->
        <section class="features">
          <div class="feature-card">
            <img src="/images/restaurant4.jpg" alt="Chef">
            <h3>Chefs Passionnés</h3>
            <p>Nos chefs mettent leur cœur dans chaque plat pour une expérience unique.</p>
          </div>
          <div class="feature-card">
            <img src="/images/restaurant5.jpg" alt="Ingrédients Frais">
            <h3>Ingrédients Frais</h3>
            <p>Des produits locaux et frais soigneusement sélectionnés.</p>
          </div>
          <div class="feature-card">
            <img src="/images/restaurant6jpg.jpg" alt="Ambiance">
            <h3>Ambiance Élégante</h3>
            <p>Un cadre raffiné pour vos moments privilégiés.</p>
          </div>
        </section>
  
        <!-- Section CTA -->
        <section class="cta">
          <h2>Prêt à réserver une commande ?</h2>
          <router-link to="/menu" class="btn">Réserver Maintenant</router-link>
        </section>
      </div>
    </div>
  </template>
  
  <style>
  .home-page {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-color: #f9fafc;
    min-height: 100vh;
    margin: 0;
  }
  
  /* Conteneur principal centré avec marges */
  .home-container {
    width: calc(100% - 80px); /* Retire 40px à gauche et à droite */
    max-width: 1200px;
    margin: 0 40px; /* Ajoute les 40px d'espace à gauche et à droite */
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  
  /* En-tête avec image de fond */
  .hero {
    background: url('../../public/images/test12.jpg') no-repeat center center/cover;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    position: relative;
    margin-bottom: 30px;
  }
  
  .hero-overlay {
    background: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 10px;
  }
  
  .hero h1 {
    font-size: 3rem;
    margin-bottom: 10px;
  }
  
  .hero p {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
  
  .btn {
    background-color: #d4a373;
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background 0.3s;
  }
  
  .btn:hover {
    background-color: #bc8a5a;
  }
  
  /* Section Présentation */
  .intro {
    text-align: center;
    padding: 50px 20px;
    background: #fdf7e3;
    margin-bottom: 30px;
  }
  
  .intro h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  
  .intro p {
    font-size: 1.2rem;
    color: #555;
  }
  
  /* Section Typologie */
  .features {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin: 30px 20px;
  }
  
  .feature-card {
    text-align: center;
    background: #ffffff;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    width: 250px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
  }
  
  .feature-card:hover {
    transform: translateY(-5px);
  }
  
  .feature-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
  }
  
  .feature-card h3 {
    margin-top: 15px;
    font-size: 1.5rem;
  }
  
  .feature-card p {
    font-size: 0.9rem;
    margin-top: 10px;
    color: #555;
  }
  
  /* Section CTA */
  .cta {
    text-align: center;
    padding: 50px 20px;
    background: #d4a373;
    color: white;
    margin-top: 30px;
  }
  
  .cta h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .cta .btn {
    background-color: #7a4b26;
  }
  
  .cta .btn:hover {
    background-color: #5a3520;
  }
  
  /* Suppression de l'espace bas */
  body, html {
    margin: 0;
    padding: 0;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .hero h1 {
      font-size: 2rem;
    }
  
    .intro h2 {
      font-size: 2rem;
    }
  
    .features {
      flex-direction: column;
      align-items: center;
    }
  
    .home-container {
      width: calc(100% - 20px);
      margin: 0 10px;
    }
  }
    </style>

  