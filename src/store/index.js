import { createStore } from "vuex";

export default createStore({
  state: {
    teamList: [],
    matchList: []
  },
  mutations: {
    ADD_TEAMS(state, teams) {
      state.teamList = teams;
    },
    ADD_MATCHES(state, matches) {
      state.matchList = matches;
    }
  },
  actions: {
    addTeams({ commit }, teams) {
      commit("ADD_TEAMS", teams);
    },
    addMatches({ commit }, matches) {
      commit("ADD_MATCHES", matches);
    }
  },
  modules: {
  }
});
