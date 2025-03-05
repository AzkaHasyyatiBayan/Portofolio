<template>
  <nav class="navbar">
    <div class="container">
      <!-- Logo -->
      <div class="logo">
        <div class="logo-icon">A</div>
        <span class="logo-text">Mypage</span>
      </div>
      
      <!-- Navbar Menu -->
      <ul class="nav-menu">
        <li><a href="#home" class="nav-item">Home</a></li>
        <li><a href="#about" class="nav-item">About</a></li>
        <li><a href="#skill" class="nav-item">Skill</a></li>
        <li><a href="#portofolio" class="nav-item">Portofolio</a></li>
        <li><a href="#whyme" class="nav-item">Whyme</a></li>
        <li><a href="#testimoni" class="nav-item">Testimoni</a></li>
        <li><a href="#contact" class="nav-item">Contact</a></li>
      </ul>
      
      <!-- Mode & Language Buttons -->
      <div class="settings">
        <button class="language-button">IDN</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
/* Navbar Full Width */
.navbar {
  width: 100%;
  background-color: #252257;
  color: #E5E7EB;
  padding: 16px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

/* Container Tengah */
.container {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-icon {
  background-color: #e2e8f0;
  color: #333333;
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: bold;
}

.logo-text {
  font-size: 18px;
  font-weight: bold;
  margin-right: auto;
}

/* Navbar Menu */
.nav-menu {
  display: flex;
  justify-content: center;
  list-style: none;
  gap: 32px;
  margin: 0;
  padding: 0;
  margin-right: auto;
  margin-left: 32px;
  flex: 1;
   /* Biar menu tetap sejajar & IDN lebih ke kiri */
}

.nav-menu li {
  display: inline-block;
}

.nav-item {
  text-decoration: none;
  color: #E5E7EB;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-item:hover {
  text-decoration: underline;
  color: #f1f5f9;
}

/* Settings */
.settings {
  display: flex;
  align-items: center;
  margin-left: auto; /* Dorong tombol IDN lebih ke kiri */
}

/* Tombol IDN */
.language-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: #E5E7EB;
  border: 1px solid #E5E7EB;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  min-width: 50px;
}

.language-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>