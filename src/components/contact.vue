<template> 
  <section id="contact" class="contact-container">
    <h2 class="title">Contact Me</h2>
    <form class="contact-form">
      <div class="form-group">
        <label for="name" class="form-label">Nama:</label>
        <input id="name" type="text" placeholder="Nama" class="input-field" />
      </div>

      <div class="form-group">
        <label for="email" class="form-label">E-mail:</label>
        <input id="email" type="email" placeholder="E-mail" class="input-field" />
      </div>

      <div class="form-group">
        <label for="message" class="form-label">Pesan:</label>
        <textarea id="message" placeholder="Apa yang mau anda sampaikan?" class="input-field"></textarea>
      </div>

      <div class="form-group form-submit">
        <button type="submit" class="submit-button">Kirim</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
.contact-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; 
  background-color: white;
  padding: 50px;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  color:#252257;
  margin-bottom: 20px;
}

.contact-form {
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.form-label {
  width: 30%;
  text-align: left;
  font-weight: bold;
}

.input-field {
  width: 65%;
  padding: 10px;
  border: 1px solid #252257;
  border-radius: 5px;
  background-color: #FFFFFF;
  color: grey;
}

textarea.input-field {
  resize: vertical;
  min-height: 80px;
}

.form-submit {
  justify-content: center;
}

.submit-button {
  width: 30%;
  padding: 10px;
  background-color: #252257;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.submit-button:hover {
  background-color: blue;
}

@media (max-width: 600px) {
  .form-group {
    flex-direction: column;
    align-items: flex-start;
  }

  .form-label {
    width: 100%;
    margin-bottom: 5px;
  }

  .input-field {
    width: 100%;
  }

  .submit-button {
    width: 100%;
  }
}
</style>