<template> 
  <section id="skill" class="skills-container">
    <h2 class="title">What Could I Do ?</h2>
    <p class="description">Berikut adalah beberapa keahlian utama yang saya miliki dalam desain digital</p>
    <div class="skills-grid">
      <div class="skill-item">
        <img src="/e1.jpg" alt="UI/UX Design" class="skill-icon"/>
        <p>UI/UX Design</p>
      </div>
      <div class="skill-item">
        <img src="/e2.jpg" alt="Web Dev" class="skill-icon"/>
        <p>Web Dev</p>
      </div>
      <div class="skill-item">
        <img src="/e3.jpg" alt="System Analyst" class="skill-icon"/>
        <p>System Analyst</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Skill" 
};
</script>

<style scoped>
.skills-container {
  text-align: center;
  padding: 50px;
  background-color: #FFFFFF;
  color: #000000;
}

.title {
  font-size: 1.8rem;
  font-weight: bold;
  color: #252257;
  margin-bottom: 10px;
}

.description {
  margin-bottom: 30px;
  font-size: 1rem;
}

.skills-grid {
  display: flex;
  justify-content: center;
  gap: 50px;
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;
}

.skill-icon {
  width: 100px;
  height: 100px;
  object-fit: contain;
  background: transparent;
}

.skill-item:hover {
  transform: scale(0.9);
}
</style>