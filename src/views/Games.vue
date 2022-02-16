<template>
  <div class="games">
    <h1>Jornada 1</h1>
    <ScoreBoard />
  </div>
</template>

<script>
// @ is an alias to /src
import ScoreBoard from "@/components/ScoreBoard.vue";

export default {
  name: "Games",
  components: {
    ScoreBoard
  }
};
</script>

<style scoped>
.games {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
