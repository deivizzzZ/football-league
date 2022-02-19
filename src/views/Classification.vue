<template>
  <div class="classification">
    <h1>{{ title }}</h1>
    <ScoreTable />
  </div>
</template>

<script>
import ScoreTable from "@/components/ScoreTable.vue";
import { SPAIN_ONE_TITLE } from "@/js/spainOne.js";

export default {
  name: "Classification",
  components: {
    ScoreTable
  },
  data() {
    return {
      title: SPAIN_ONE_TITLE
    };
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
