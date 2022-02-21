import { createStore } from "vuex";

export default createStore({
  state: {
    leagueName: "",
    teamList: [],
    calendar: [],
    weeklyMatches: [],
    weekCounter: 0,
    simulationStarted: false,
    start: true,
    running: false,
    finished: false,
    showWinner: false,
    modalVisible: true
  },
  mutations: {
    LEAGUE_NAME(state, name) {
      state.leagueName = name;
    },
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
    },
    START(state) {
      state.start = false;
    },
    RUNNING(state, boolean) {
      state.running = boolean;
    },
    FINISHED(state, boolean) {
      state.finished = boolean;
    },
    SHOW_WINNER(state) {
      state.showWinner = true;
    },
    HIDE_MODAL(state) {
      state.modalVisible = false;
    }
  },
  actions: {
    leagueName({ commit }, name) {
      commit("LEAGUE_NAME", name);
    },
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
    },
    updateTable({ commit }, list) {
      commit("ADD_TEAMS", list);
    },
    start({ commit }) {
      commit("START");
    },
    running({ commit }, boolean) {
      commit("RUNNING", boolean);
    },
    finished({ commit }, boolean) {
      commit("FINISHED", boolean);
    },
    showWinner({ commit }) {
      commit("SHOW_WINNER");
    },
    hideModal({ commit }) {
      commit("HIDE_MODAL");
    }
  },
  modules: {
  }
});
