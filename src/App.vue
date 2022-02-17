<template>
  <div id="nav">
    <router-link to="/">Partidos</router-link>|
    <router-link to="/classification">Clasificación</router-link>
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
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import { SPAIN_ONE, SPAIN_ONE_CALENDAR } from "@/js/spainOne.js";
export default {
  created() {
    this.$store.dispatch("addTeams", SPAIN_ONE);
    this.$store.dispatch("createCalendar", SPAIN_ONE_CALENDAR);
  }
};
</script>
