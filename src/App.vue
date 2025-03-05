<template>
  <div>
    <Navbar />
    <Home />
    <About />
    <Skill />
    <Portofolio />
    <Whyme />
    <Testimoni />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/navbar.vue";
import Home from "./components/home.vue";
import About from "./components/about.vue";
import Skill from "./components/skill.vue";
import Portofolio from "./components/portofolio.vue";
import Whyme from "./components/whyme.vue";
import Testimoni from "./components/testimoni.vue";
import Contact from "./components/contact.vue";
import Footer from "./components/footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Home,
    About,
    Skill,
    Portofolio,
    Whyme,
    Testimoni,
    Contact,
    Footer,
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
}
</style>