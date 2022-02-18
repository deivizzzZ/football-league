<template>
  <button v-if="!this.$store.state.simulationStarted" @click="startSimulation">COMENZAR</button>
  <button v-if="running" @click="showWeek">SIGUIENTE</button>
  <button v-if="finished">FINALIZAR</button>
</template>

<script>
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
      if (this.$store.state.weekCounter === this.$store.state.calendar.length) {
        this.running = false;
        this.finished = true;
      }
    }
  }
};
</script>

<style scoped></style>
