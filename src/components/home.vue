<template>
  <section class="home">
    <div class="paint-effect"></div>

    <div class="home-content">
      <div class="text-content">
        <h1>Hi I'am Azka Hasyyati, a passionate ...</h1>
        <p>Lihat karya saya dan temukan bagaimana saya dapat membantu design anda</p>
        <button class="cta-button">Cari Tahu</button>
      </div>
      <div class="image-content">
        <div class="hexagon">
          <img src="/apalah.jpeg" alt="Profile Picture" class="profile-image" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

.home {
  position: relative;
  background: #FFFFFF;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  padding: 40px;
}

.paint-effect {
  position: absolute;
  top: 15%;
  right: 0;
  width: 380px;
  height: 400px;
  background: linear-gradient(135deg, pink, #252257, purple);
  clip-path: polygon(70% 0%, 100% 30%, 85% 60%, 100% 85%, 60% 100%, 30% 85%, 10% 60%, 20% 30%);
  opacity: 0.9;
  animation: paintMove 6s infinite alternate ease-in-out;
}

@keyframes paintMove {
  0% { transform: scale(1) translate(0, 0) rotate(0deg); }
  50% { transform: scale(1.1) translate(-10px, 10px) rotate(3deg); }
  100% { transform: scale(1) translate(0, 0) rotate(-3deg); }
}

.home-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  width: 100%;
  align-items: center;
  z-index: 1;
}

.text-content {
  text-align: left;
}

.text-content h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 16px;
  color: #252257;
}

.text-content p {
  font-size: 1.25rem;
  margin-bottom: 24px;
  color: #000000;
}

.cta-button {
  background-color: #252257;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: blue;
}

.image-content {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.hexagon {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #252257, pink);
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid pink;
}

@media (max-width: 768px) {
  .home-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 30px;
  }

  .text-content {
    text-align: center;
  }

  .image-content {
    justify-content: center;
  }
}
</style>