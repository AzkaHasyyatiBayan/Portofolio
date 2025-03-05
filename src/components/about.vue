<template>
    <section id="about">
      <h2 class="text-2xl font-bold mb-4">Who Am I ?</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis risus eget urna sollicitudin sodales. Nulla facilisi. Fusce sed urna quis libero tincidunt scelerisque. Integer ac sapien ac mauris sodales vestibulum non nec turpis</p>
      <p>(still in progress)</p>
    </section>
  </template>
  
  <script>
  export default {
    name: "About",
  };
  </script>  

  <style scooped>
  .about {
    background-size: 100%;
    animation: gradientFlow 8s ease infinite;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 32px;
    width: 100%;
  }

  h2 {
    color: #8E4585;
  }

  p {
    text-align: left;
  }
  </style>