<template>
  <div class="modal-container" v-if="this.$store.state.modalVisible">
    <div class="modal">
      <h2>Selecciona liga para jugar</h2>
      <div class="league-container">
        <!-- Primera División -->
        <div class="league-button" v-on:click="selectLeague(this.leagues[0])">
          <img src="/img/spain1/logo.png" alt="Escudo de Primera División" />
          <h3>{{ spainOneLeague }}</h3>
        </div>
        <!-- Segunda División -->
        <div class="league-button" v-on:click="selectLeague(this.leagues[1])">
          <img src="/img/spain2/logo.png" alt="Escudo de Segunda División" />
          <h3>{{ spainTwoLeague }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as SPAIN_ONE from "@/js/spainOne.js";
import * as SPAIN_TWO from "@/js/spainTwo.js";
export default {
  name: "LeagueModal",
  data() {
    return {
      leagues: [SPAIN_ONE, SPAIN_TWO],
      spainOneLeague: SPAIN_ONE.TITLE,
      spainTwoLeague: SPAIN_TWO.TITLE
    };
  },
  methods: {
    selectLeague(leagueIndex) {
      this.$store.dispatch("leagueName", leagueIndex.TITLE);
      this.$store.dispatch("addTeams", leagueIndex.TEAMS);
      this.$store.dispatch("createCalendar", leagueIndex.CALENDAR);
      this.$store.dispatch("hideModal");
    }
  }
};
</script>

<style scoped>
.modal-container {
  display: flex;
  background-color: rgba(0, 0, 0, 0.3);
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
}
.modal {
  background-color: #fff;
  width: 600px;
  max-width: 100%;
  padding: 30px 50px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
.league-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.league-button {
  width: 160px;
  padding: 5px;
  border: 1px solid #000;
  cursor: pointer;
}
img {
  width: 100px;
  height: 100px;
}

@media screen and (max-width: 768px) {
  .modal {
    width: 200px;
  }
  .league-container {
    flex-direction: column;
    gap: 20px;
  }
}
</style>
