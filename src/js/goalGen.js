export default function goalGen() {
  let rndomGoal;
  let statsCheck;
  let supportParam;

  do {
    supportParam = Math.floor(Math.random() * 10);
    statsCheck = Math.floor(Math.random() * 1000) + 1;

    if (
      supportParam >= 0 &&
      supportParam <= 3 &&
      supportParam !== 300 &&
      supportParam !== 600 &&
      statsCheck <= 900
    ) {
      rndomGoal = supportParam;
    } else if (
      supportParam > 3 &&
      supportParam <= 10 &&
      statsCheck > 990 &&
      statsCheck <= 999
    ) {
      rndomGoal = supportParam;
    } else if (supportParam > 10 && supportParam <= 20 && statsCheck > 999) {
      rndomGoal = supportParam;
    }
  } while (typeof rndomGoal !== typeof supportParam);

  return rndomGoal;
}
