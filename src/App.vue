<template>
  <div id="app">
    <header>
      <div class="container">
        <h1>Navita</h1>
      </div>
    </header>
    
    <CarsList />

    <footer>
      <div class="container">
        <p>Copyright © Navita 2020</p>
      </div>
    </footer>
  </div>
</template>

<script>
import CarsList from './components/CarsList.vue'

export default {
  name: 'App',
  components: {
    CarsList
  }
}
</script>

<style lang="scss">
@import './styles/reset.css';

#app {
  font-family: 'Nunito', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #5A5C69;
}

body {
  background: #F7F8FB;
}

.container {
  width: 1140px;
  margin: 0 auto;
}

header {
  width: 100%;
  background-color:#FFFFFF;
  padding: 20px 0;
  box-shadow: 0 4px 2px -2px rgba(58, 59, 69, .15);
  
  h1 {
    color: #1CC88A;
    font-weight: bold;
    font-size: 26px;
  }
}

footer {
  width: 100%;
  background-color:#FFFFFF;
  padding: 40px 0;
  text-align: center;
  margin-top: 50px;
}

/* ================= Responsive ================= */
@media screen and (max-width: 768px) {
  .container {
    width: 100%;
  }

  header {
    h1 {
      padding-left: 12px;
    }
  }
}
</style>
