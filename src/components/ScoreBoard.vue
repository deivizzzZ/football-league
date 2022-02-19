<template>
  <div v-if="!this.$store.state.showWinner">
    <div v-if="this.$store.state.simulationStarted">
      <h2>{{ "Jornada " + this.$store.state.weekCounter }}</h2>
      <div class="scoreboard">
        <div class="score" v-for="(match, key) in this.$store.state.weeklyMatches" :key="key">
          <div class="local">
            <div class="local-info">
              <img :src="match.showLocal.showLogo" :alt="'Escudo de ' + match.showLocal.showName" />
              {{ match.showLocal.showName }}
            </div>
            <div class="local-goals">{{ match.showLocalGoals }}</div>
          </div>
          <div class="visitor">
            <div class="visitor-info">
              {{ match.showVisitor.showName }}
              <img
                :src="match.showVisitor.showLogo"
                :alt="'Escudo de ' + match.showLocal.showName"
              />
            </div>
            <div class="visitor-goals">{{ match.showVisitorGoals }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ScoreBoard"
};
</script>

<style scoped>
img {
  width: 30px;
  height: 30px;
}
.scoreboard {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.score {
  width: 370px;
  background-color: black;
  color: white;
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.local {
  margin-right: 15px;
  padding: 10px 0;
}
.visitor {
  margin-left: 15px;
  padding: 10px 0;
}
.local,
.visitor {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.local-info,
.visitor-info {
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}
</style>
