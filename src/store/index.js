import { createStore } from "vuex";

export default createStore({
  state: {
    teamList: [],
    calendar: [],
    weeklyMatches: [],
    weekCounter: 0,
    simulationStarted: false
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
    },
    NEXT_WEEK(state) {
      state.weekCounter++;
    },
    START_SIMULATION(state) {
      state.simulationStarted = true;
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
    },
    nextWeek({ commit }) {
      commit("NEXT_WEEK");
    },
    startSimulation({ commit }) {
      commit("START_SIMULATION");
    }
  },
  modules: {
  }
});
