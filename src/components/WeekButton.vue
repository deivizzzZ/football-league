<template>
  <div v-if="!this.$store.state.showWinner">
    <button v-if="this.$store.state.start" @click="startSimulation">COMENZAR</button>
    <button v-if="this.$store.state.running" @click="showWeek">SIGUIENTE</button>
    <button v-if="this.$store.state.finished" @click="showWinner">FINALIZAR</button>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "WeekButton",
  methods: {
    startSimulation() {
      this.showWeek();
      this.$store.dispatch("start");
      this.$store.dispatch("running", true);
      this.$store.dispatch("startSimulation");
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
        this.$store.dispatch("running", false);
        this.$store.dispatch("finished", true);
      }
      // update classification
      const updatedTable = _.orderBy(this.$store.state.teamList, ["points", "wins", "loses", "goalsFor", "goalsAgainst"], ["desc", "desc", "asc", "desc", "asc"]);
      this.$store.dispatch("updateTable", updatedTable);
    },
    showWinner() {
      this.$store.dispatch("finished", false);
      this.$store.dispatch("showWinner");
    }
  }
};
</script>

<style scoped></style>
