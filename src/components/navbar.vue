<template>
  <nav class="navbar">
    <div class="container">

      <div class="logo">
        <div class="logo-icon">A</div>
        <span class="logo-text">Mypage</span>
      </div>

      <button class="menu-toggle" @click="toggleMenu">
        ☰
      </button>

      <ul :class="['nav-menu', { 'active': isMenuOpen }]">
        <li><a href="#home" class="nav-item" @click="closeMenu">Home</a></li>
        <li><a href="#about" class="nav-item" @click="closeMenu">About</a></li>
        <li><a href="#skill" class="nav-item" @click="closeMenu">Skill</a></li>
        <li><a href="#portofolio" class="nav-item" @click="closeMenu">Portofolio</a></li>
        <li><a href="#whyme" class="nav-item" @click="closeMenu">Whyme</a></li>
        <li><a href="#testimoni" class="nav-item" @click="closeMenu">Testimoni</a></li>
        <li><a href="#contact" class="nav-item" @click="closeMenu">Contact</a></li>
      </ul>

      <div class="settings">
        <button class="language-button">IDN</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>

<style scoped>
.navbar {
  width: 100%;
  background-color: #FFFFFF;
  color: #252257;
  padding: 16px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between; 
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-icon {
  background-color: #252257;
  color: #FFFFFF;
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
}

.menu-toggle {
  display: none;
  font-size: 24px;
  background: none;
  cursor: pointer;
}

.nav-menu {
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 32px;
  margin: 0 auto;
  padding: 0;
}

.nav-menu li {
  display: inline-block;
}

.nav-item {
  text-decoration: none;
  color: #252257;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-item:hover {
  color: blue;
}

.settings {
  display: flex;
  align-items: center;
}

.language-button {
  background-color: transparent;
  color: #252257;
  border: 1px solid #252257;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
    margin-left: auto;
    color: #252257; 
  }

  .nav-menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .nav-menu.active {
    display: flex;
    background-color: #FFFFFF;
  }

  .nav-menu li {
    width: 100%;
    padding: 12px 0;
  }

}
</style>