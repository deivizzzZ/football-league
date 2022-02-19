<template>
  <div class="modal-container" v-if="this.$store.state.modalVisible">
    <div class="modal">
      <h2>Selecciona liga para jugar</h2>
      <div class="league-container">
        <div class="league-button" v-on:click="selectLeague('spain-one')">
          <img src="/img/spain1/laliga.png" alt="Escudo de La Liga" />
          <h3>Primera División de España</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SPAIN_ONE_TEAMS, SPAIN_ONE_CALENDAR } from "@/js/spainOne.js";
export default {
  name: "LeagueModal",
  methods: {
    selectLeague(league) {
      if (league === "spain-one") {
        this.$store.dispatch("addTeams", SPAIN_ONE_TEAMS);
        this.$store.dispatch("createCalendar", SPAIN_ONE_CALENDAR);
      }
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
  width: 150px;
  padding: 5px;
  border: 1px solid #000;
  cursor: pointer;
}
img {
  width: 100px;
  height: 100px;
}
</style>
