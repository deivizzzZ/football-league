<template>
  <h1>FOOTBALL LEAGUE</h1>
  <LeagueModal />
  <div id="nav">
    <router-link to="/">Partidos</router-link>
    <router-link to="/table">Clasificación</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import LeagueModal from "@/components/LeagueModal.vue";
export default {
  components: {
    LeagueModal
  }
};
</script>
