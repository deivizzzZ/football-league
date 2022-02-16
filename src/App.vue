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
import Match from "@/js/Match.js";
import SPAIN_ONE from "@/js/spainOne.js";
export default {
  created() {
    const TEAMS = SPAIN_ONE;
    this.$store.dispatch("addTeams", TEAMS);

    const MATCHES = [];
    for (let i = 0; i < this.$store.state.teamList.length; i += 2) {
      const match = new Match(this.$store.state.teamList[i], this.$store.state.teamList[i + 1]);
      MATCHES.push(match);
    }
    MATCHES.forEach(match => {
      match.addLocalGoals();
      match.addVisitorGoals();
      match.checkWinner();
    });
    this.$store.dispatch("addMatches", MATCHES);
  }
};
</script>
