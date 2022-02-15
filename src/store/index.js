import { createStore } from "vuex";

export default createStore({
  state: {
    teamList: []
  },
  mutations: {
    ADD_TEAMS(state, teams) {
      state.teamList = teams;
    }
  },
  actions: {
    addTeams({ commit }, teams) {
      commit("ADD_TEAMS", teams);
    }
  },
  modules: {
  }
});
