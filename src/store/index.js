import { createStore } from "vuex";

export default createStore({
  state: {
    teamList: [],
    calendar: [],
    weeklyMatches: []
  },
  mutations: {
    ADD_TEAMS(state, teams) {
      state.teamList = teams;
    },
    CREATE_CALENDAR(state, calendar) {
      state.calendar = calendar;
    },
    SHOW_MATCHES(state, matches) {
      state.weeklyMatches = matches;
    }
  },
  actions: {
    addTeams({ commit }, teams) {
      commit("ADD_TEAMS", teams);
    },
    createCalendar({ commit }, calendar) {
      commit("CREATE_CALENDAR", calendar);
    },
    showMatches({ commit }, matches) {
      commit("SHOW_MATCHES", matches);
    }
  },
  modules: {
  }
});
