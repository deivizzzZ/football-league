<template>
  <div class="classification">
    <h1>Primera División de España</h1>
    <ScoreTable />
  </div>
</template>

<script>
import ScoreTable from "@/components/ScoreTable.vue";

export default {
  name: "Classification",
  components: {
    ScoreTable
  }
};
</script>

<style scoped>
.classification {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
