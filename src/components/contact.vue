<template>
  <section id="contact" class="py-10 bg-white text-center">
    <h2 class="text-2xl font-bold mb-4">Contact Me</h2>
    <form class="contact-form w-full max-w-md mx-auto">
      <div class="form-group">
        <label for="name">Nama:</label>
        <input id="name" type="text" placeholder="Nama" class="input-field" />
      </div>

      <div class="form-group">
        <label for="email">E-mail:</label>
        <input id="email" type="email" placeholder="E-mail" class="input-field" />
      </div>

      <div class="form-group">
        <label for="message">Pesan:</label>
        <textarea id="message" placeholder="Apa yang mau anda sampaikan ?" class="input-field"></textarea>
      </div>

      <div class="form-group">
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
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: start;
}


.input-field {
  width: 50%;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: #ED8796;
  color: white;
}

.submit-button {
  width: 10%;
  margin-top: 10px;
  padding: 10px;
  background-color: #8E4585;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.submit-button:hover {
  background-color: darkviolet;
}
</style>