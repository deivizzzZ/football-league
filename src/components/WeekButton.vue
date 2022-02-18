<template>
  <button v-if="!this.$store.state.simulationStarted" @click="startSimulation">COMENZAR</button>
  <button v-if="running" @click="showWeek">SIGUIENTE</button>
  <button v-if="finished">FINALIZAR</button>
</template>

<script>
import _ from "lodash";
export default {
  name: "WeekButton",
  data() {
    return {
      running: this.$store.state.simulationStarted,
      finished: false
    };
  },
  methods: {
    startSimulation() {
      this.showWeek();
      this.$store.dispatch("startSimulation");
      this.running = true;
    },
    showWeek() {
      const matches = this.$store.state.calendar[this.$store.state.weekCounter];
      matches.forEach(match => {
        match.addLocalGoals();
        match.addVisitorGoals();
        match.checkWinner();
      });
      this.$store.dispatch("showMatches", matches);
      this.$store.dispatch("nextWeek");
      // stop simulation
      if (this.$store.state.weekCounter === this.$store.state.calendar.length) {
        this.running = false;
        this.finished = true;
      }
      // update classification
      const updatedTable = _.orderBy(this.$store.state.teamList, ["points", "wins", "loses", "goalsFor", "goalsAgainst"], ["desc", "desc", "asc", "desc", "asc"]);
      this.$store.dispatch("updateTable", updatedTable);
    }
  }
};
</script>

<style scoped></style>
