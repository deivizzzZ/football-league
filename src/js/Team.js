export default class Team {
  constructor(name, logo) {
    this.name = name;
    this.logo = logo;
    this.points = 0;
    this.wins = 0;
    this.ties = 0;
    this.loses = 0;
    this.goalsFor = 0;
    this.goalsAgainst = 0;
    this.goalsDiff = 0;
  }

  get showName() {
    return this.name;
  }

  get showLogo() {
    return this.logo;
  }

  get showPoints() {
    return this.points;
  }

  get showWins() {
    return this.wins;
  }

  get showTies() {
    return this.ties;
  }

  get showLoses() {
    return this.loses;
  }

  get showGoalsFor() {
    return this.goalsFor;
  }

  get showGoalsAgainst() {
    return this.goalsAgainst;
  }

  addWin() {
    this.wins++;
  }

  addTie() {
    this.ties++;
  }

  addLose() {
    this.loses++;
  }

  addGoalsFor(goals) {
    this.goalsFor += goals;
  }

  addGoalsAgainst(goals) {
    this.goalsAgainst += goals;
  }

  addGoalsDiff() {
    this.goalsDiff = this.goalsFor - this.goalsAgainst;
  }

  addPoints(points) {
    this.points += points;
  }
}
