<template>
  <div class="classification">
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
  justify-content: center;
  align-items: center;
}
</style>
