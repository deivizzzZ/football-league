<template>
  <div class="games">
    <WeekButton />
    <ScoreBoard />
    <LeagueWinner />
  </div>
</template>

<script>
// @ is an alias to /src
import ScoreBoard from "@/components/ScoreBoard.vue";
import WeekButton from "@/components/WeekButton.vue";
import LeagueWinner from "@/components/LeagueWinner.vue";

export default {
  name: "Games",
  components: {
    ScoreBoard,
    WeekButton,
    LeagueWinner
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
