<template>
  <div class="games">
    <WeekButton />
    <ScoreBoard />
  </div>
</template>

<script>
// @ is an alias to /src
import ScoreBoard from "@/components/ScoreBoard.vue";
import WeekButton from "@/components/WeekButton.vue";

export default {
  name: "Games",
  components: {
    ScoreBoard,
    WeekButton
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
