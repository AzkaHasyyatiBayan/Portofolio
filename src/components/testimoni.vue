<template>
  <section id="testimoni" class="testimoni-container">
    <h2 class="title">What People Say About Me?</h2>

    <div class="testimoni-content">
      <div class="percentage-container">
        <h1 class="percentage">{{ satisfactionPercentage }}%</h1>
        <p class="satisfaction-text">Klien Setuju Design Memuaskan</p>
      </div>

      <div class="testimoni-grid">
        <div v-for="(review, index) in testimonials" :key="index" class="testimoni-card">
          <p class="review-text">"{{ review.text }}"</p>
          <p class="review-author">— {{ review.author }}</p>
          <div class="stars">
            <span v-for="star in review.rating" :key="star" class="star">⭐</span>
          </div>
        </div>
        <button @click="showForm = true" class="add-testimoni-btn">Tambahkan Testimoni</button>
      </div>
    </div>

    <div v-if="showForm" class="modal-overlay">
      <div class="modal-content">
        <h3>Tambahkan Testimoni</h3>
        <input type="text" v-model="newTestimoni.author" placeholder="Nama" class="input-field" />
        <textarea v-model="newTestimoni.text" placeholder="Testimoni" class="input-field"></textarea>

        <div class="rating-input">
          <label>Rating:</label>
          <select v-model="newTestimoni.rating" class="input-field">
            <option v-for="num in 5" :key="num" :value="num">{{ num }} ⭐</option>
          </select>
        </div>

        <div class="modal-buttons">
          <button @click="addTestimoni" class="submit-btn">Tambah</button>
          <button @click="showForm = false" class="cancel-btn">Batal</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Testimoni",
  data() {
    return {
      testimonials: [
        { author: "John Doe, CEO XYZ", text: "Desain yang dibuat benar-benar sesuai dengan harapan kami! Sangat profesional dan komunikatif.", rating: 5 },
        { author: "Jane Smith, Product Manager ABC", text: "Kolaborasi yang luar biasa, desainnya modern dan fungsional. Sangat direkomendasikan!", rating: 4 }
      ],
      newTestimoni: { author: "", text: "", rating: 5 },
      showForm: false
    };
  },
  computed: {
    satisfactionPercentage() {
      if (this.testimonials.length === 0) return 0;
      const totalStars = this.testimonials.reduce((sum, review) => sum + review.rating, 0);
      const maxStars = this.testimonials.length * 5;
      return ((totalStars / maxStars) * 100).toFixed(0);
    }
  },
  methods: {
    addTestimoni() {
      if (this.newTestimoni.author && this.newTestimoni.text) {
        this.testimonials.push({ ...this.newTestimoni });
        this.newTestimoni = { author: "", text: "", rating: 5 };
        this.showForm = false;
      }
    }
  }
};
</script>

<style scoped>
.testimoni-container {
  padding: 50px;
  background-color: #FFFFFF;
  color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  color: #252257;
  text-align: center;
  margin-bottom: 40px;
}

.testimoni-content {
  display: flex;
  justify-content: space-between;
  width: 80%;
}

.percentage-container {
  flex: 1;
  text-align: left;
}

.percentage {
  font-size: 5rem;
  font-weight: bold;
  color: #000000;
}

.satisfaction-text {
  font-size: 1.5rem;
  margin-top: -10px;
}

.testimoni-grid {
  flex: 1.5;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.testimoni-card {
  background-color: #252257;
  color: #FFFFFF;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
}

.review-text {
  font-size: 1rem;
  font-style: italic;
}

.review-author {
  font-size: 0.9rem;
  font-weight: bold;
  margin-top: 10px;
}

.stars {
  margin-top: 5px;
}

.star {
  font-size: 1.2rem;
  color: gold;
}

.add-testimoni-btn {
  background: gold;
  color: #252257;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  align-self: flex-end;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: #FFFFFF;
  padding: 20px;
  border-radius: 10px;
  width: 50%;
  text-align: center;
  color: #252257;
}

.input-field {
  width: 50%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #252257;
  background-color: #FFFFFF;
  color: grey;
}

.rating-input {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-buttons {
  display: flex;
  justify-content: space-between;
}

.submit-btn {
  background: #252257;
  color: white;
  padding: 10px;
  width: 30%;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
}

.cancel-btn {
  background: #ccc;
  color: black;
  padding: 10px;
  width: 20%;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
}
</style>