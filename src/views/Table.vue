<template>
  <div class="league-table">
    <h2>{{ this.$store.state.leagueName }}</h2>
    <ScoreTable />
  </div>
</template>

<script>
import ScoreTable from "@/components/ScoreTable.vue";

export default {
  name: "Table",
  components: {
    ScoreTable
  }
};
</script>

<style scoped>
.league-table {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
