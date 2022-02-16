import goalGen from "./goalGen.js";

export default class Match {
  constructor(local, visitor) {
    this.local = local;
    this.visitor = visitor;
    this.localGoals = 0;
    this.visitorGoals = 0;
  }

  get showLocal() {
    return this.local;
  }

  get showVisitor() {
    return this.visitor;
  }

  get addLocalGoals() {
    const goals = goalGen();
    this.localGoals = goals;
    this.local.addGoalsFor(goals);
    this.visitor.addGoalsAgainst(goals);
    return this.localGoals;
  }

  get addVisitorGoals() {
    const goals = goalGen();
    this.visitorGoals = goals;
    this.visitor.addGoalsFor(goals);
    this.local.addGoalsAgainst(goals);
    return this.visitorGoals;
  }

  checkWinner() {
    if (this.localGoals > this.visitorGoals) {
      this.local.addWin();
      this.local.addPoints(3);
      this.visitor.addLose();
    } else if (this.localGoals < this.visitorGoals) {
      this.local.addLose();
      this.visitor.addWin();
      this.visitor.addPoints(3);
    } else {
      this.local.addTie();
      this.local.addPoints(1);
      this.visitor.addTie();
      this.visitor.addPoints(1);
    }
    this.local.addGoalsDiff();
    this.visitor.addGoalsDiff();
  }
}
