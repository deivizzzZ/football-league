<template>
  <button v-if="!this.$store.state.simulationStarted" @click="startSimulation">COMENZAR</button>
  <button v-if="this.$store.state.simulationStarted" @click="showWeek">SIGUIENTE</button>
</template>

<script>
export default {
  name: "WeekButton",
  methods: {
    startSimulation() {
      this.showWeek();
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
    }
  }
};
</script>

<style scoped></style>
