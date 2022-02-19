<template>
  <div class="winner-info" v-if="this.$store.state.showWinner">
    <img
      :src="this.$store.state.teamList[0].showLogo"
      :alt="'Escudo de ' + this.$store.state.teamList[0].showName"
      class="winner-logo"
    />
    <p
      class="winner-description"
    >{{ "¡¡" + this.$store.state.teamList[0].showName + " ha ganado!!" }}</p>
  </div>
</template>

<script>
</script>

<style scoped>
.winner-info {
  padding: 20px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
}

.winner-logo {
  width: 100px;
  height: 100px;
}

.winner-description {
  text-align: center;
  font-weight: bold;
}
</style>
