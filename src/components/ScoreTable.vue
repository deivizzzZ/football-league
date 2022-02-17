<template>
  <table>
    <tr>
      <th colspan="3">Club</th>
      <th>V</th>
      <th>E</th>
      <th>D</th>
      <th>GF</th>
      <th>GC</th>
      <th>Pts</th>
    </tr>
    <tr v-for="(team, key) in this.$store.state.teamList" :key="key">
      <td>
        <img :src="team.showLogo" :alt="'Escudo de ' + team.showName" />
      </td>
      <td colspan="2">{{ team.showName }}</td>
      <td>{{ team.showWins }}</td>
      <td>{{ team.showTies }}</td>
      <td>{{ team.showLoses }}</td>
      <td>{{ team.showGoalsFor }}</td>
      <td>{{ team.showGoalsAgainst }}</td>
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
</style>
