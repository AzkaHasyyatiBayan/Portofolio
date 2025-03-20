<template>
  <section id="about" class="about">
    <div class="about-content">

      <div class="about-text">
        <h2 class="text-2xl font-bold">Who Am I?</h2>
        <p>
          Halo! Saya Azka, seorang web developer yang suka membangun pengalaman digital yang menarik dan inovatif.
          Saya memiliki ketertarikan dalam UI/UX dan pengembangan web modern.
        </p>
      </div>

      <div class="about-animation">
        <span class="question large" style="top: 10%; left: 30%; animation-delay: 0s;">?</span>
        <span class="question medium" style="top: 50%; left: 60%; animation-delay: 0.2s;">?</span>
        <span class="question small" style="top: 20%; left: 70%; animation-delay: 0.4s;">?</span>
        <span class="question small" style="top: 70%; left: 40%; animation-delay: 0.6s;">?</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@700&family=Electrolize&display=swap');

.about {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 32px;
  width: 100%;
  background-color: #FFFFFF;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  max-width: 1000px;
  width: 100%;
  align-items: center;
}

.about-text {
  text-align: left;
}

.about-text h2 {
  color: #252257;
  font-size: 2rem;
  margin-bottom: 16px;
}

.about-text p {
  font-size: 1.2rem;
  color: #444;
  line-height: 1.6;
}

.about-animation {
  position: relative;
  width: 100%;
  height: 300px;
}

.question {
  position: absolute;
  font-family: 'Chakra Petch', sans-serif;
  font-weight: bold;
  color: #252257;
  animation: wiperMove 3s infinite alternate ease-in-out;
}

.large {
  font-size: 6rem;
}

.medium {
  font-size: 4rem;
  color: pink;
}

.small {
  font-size: 2rem;
}

@keyframes wiperMove {
  0% {
    transform: rotate(0deg) translateX(0) translateY(0);
  }
  50% {
    transform: rotate(5deg) translateX(-10px) translateY(5px);
  }
  100% {
    transform: rotate(-5deg) translateX(10px) translateY(-5px);
  }
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 20px;
  }

  .about-text {
    text-align: center;
  }

  .about-animation {
    height: 200px;
  }

  .large {
    font-size: 6rem;
  }

  .medium {
    font-size: 4rem;
  }

  .small {
    font-size: 1.5rem;
  }
}
</style>
