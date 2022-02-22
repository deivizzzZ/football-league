<template>
  <table>
    <tr>
      <th colspan="3">Club</th>
      <th class="wins">V</th>
      <th class="ties">E</th>
      <th class="loses">D</th>
      <th class="goals-for">GF</th>
      <th class="goals-against">GC</th>
      <th>Pts</th>
    </tr>
    <tr v-for="(team, key) in this.$store.state.teamList" :key="key">
      <td>
        <img :src="team.showLogo" :alt="'Escudo de ' + team.showName" />
      </td>
      <td colspan="2">{{ team.showName }}</td>
      <td class="wins">{{ team.showWins }}</td>
      <td class="ties">{{ team.showTies }}</td>
      <td class="loses">{{ team.showLoses }}</td>
      <td class="goals-for">{{ team.showGoalsFor }}</td>
      <td class="goals-against">{{ team.showGoalsAgainst }}</td>
      <td>{{ team.showPoints }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "ScoreTable"
};
</script>

<style scoped>
table {
  width: 500px;
  height: 800px;
  text-align: center;
  border: 1px solid black;
  border-collapse: collapse;
}
th {
  border-bottom: 1px solid black;
}
img {
  width: 30px;
  height: 30px;
}

@media screen and (max-width: 768px) {
  table {
    width: 350px;
  }
  .wins,
  .ties,
  .loses,
  .goals-for,
  .goals-against {
    display: none;
  }
}
</style>
