import Team from "./Team.js";
import Match from "./Match.js";

const TITLE = "Primera División (España)";

const TEAMS = [
  new Team("Alavés", "/img/spain1/alaves.png"),
  new Team("Athletic", "/img/spain1/athletic.png"),
  new Team("Atlético Madrid", "/img/spain1/atletico.png"),
  new Team("Barcelona", "/img/spain1/barcelona.png"),
  new Team("Betis", "/img/spain1/betis.png"),
  new Team("Cádiz", "/img/spain1/cadiz.png"),
  new Team("Celta de Vigo", "/img/spain1/celta.png"),
  new Team("Elche C.F.", "/img/spain1/elche.png"),
  new Team("RCD Espanyol", "/img/spain1/espanyol.png"),
  new Team("Getafe", "/img/spain1/getafe.png"),
  new Team("Granada", "/img/spain1/granada.png"),
  new Team("Levante", "/img/spain1/levante.png"),
  new Team("Real Madrid", "/img/spain1/madrid.png"),
  new Team("R.C.D. Mallorca", "/img/spain1/mallorca.png"),
  new Team("Osasuna", "/img/spain1/osasuna.png"),
  new Team("Rayo Vallecano", "/img/spain1/rayo.png"),
  new Team("Real Sociedad", "/img/spain1/real.png"),
  new Team("Sevilla", "/img/spain1/sevilla.png"),
  new Team("Valencia C.F.", "/img/spain1/valencia.png"),
  new Team("Villarreal", "/img/spain1/villarreal.png")
];

const CALENDAR = [
  // Week 1
  [
    new Match(TEAMS[0], TEAMS[1]),
    new Match(TEAMS[2], TEAMS[3]),
    new Match(TEAMS[4], TEAMS[5]),
    new Match(TEAMS[6], TEAMS[7]),
    new Match(TEAMS[8], TEAMS[9]),
    new Match(TEAMS[10], TEAMS[11]),
    new Match(TEAMS[12], TEAMS[13]),
    new Match(TEAMS[14], TEAMS[15]),
    new Match(TEAMS[16], TEAMS[17]),
    new Match(TEAMS[18], TEAMS[19])
  ],
  // Week 2
  [
    new Match(TEAMS[5], TEAMS[16]),
    new Match(TEAMS[3], TEAMS[12]),
    new Match(TEAMS[13], TEAMS[0]),
    new Match(TEAMS[19], TEAMS[2]),
    new Match(TEAMS[15], TEAMS[4]),
    new Match(TEAMS[11], TEAMS[8]),
    new Match(TEAMS[7], TEAMS[14]),
    new Match(TEAMS[1], TEAMS[10]),
    new Match(TEAMS[9], TEAMS[18]),
    new Match(TEAMS[17], TEAMS[6])
  ],
  // Week 3
  [
    new Match(TEAMS[16], TEAMS[11]),
    new Match(TEAMS[2], TEAMS[5]),
    new Match(TEAMS[18], TEAMS[7]),
    new Match(TEAMS[14], TEAMS[1]),
    new Match(TEAMS[12], TEAMS[9]),
    new Match(TEAMS[10], TEAMS[3]),
    new Match(TEAMS[8], TEAMS[19]),
    new Match(TEAMS[6], TEAMS[15]),
    new Match(TEAMS[4], TEAMS[13]),
    new Match(TEAMS[0], TEAMS[17])
  ],
  // Week 4
  [
    new Match(TEAMS[15], TEAMS[16]),
    new Match(TEAMS[3], TEAMS[4]),
    new Match(TEAMS[5], TEAMS[8]),
    new Match(TEAMS[11], TEAMS[2]),
    new Match(TEAMS[7], TEAMS[10]),
    new Match(TEAMS[9], TEAMS[0]),
    new Match(TEAMS[17], TEAMS[18]),
    new Match(TEAMS[13], TEAMS[14]),
    new Match(TEAMS[1], TEAMS[6]),
    new Match(TEAMS[19], TEAMS[12])
  ],
  // Week 5
  [
    new Match(TEAMS[10], TEAMS[17]),
    new Match(TEAMS[6], TEAMS[5]),
    new Match(TEAMS[16], TEAMS[8]),
    new Match(TEAMS[13], TEAMS[3]),
    new Match(TEAMS[0], TEAMS[11]),
    new Match(TEAMS[12], TEAMS[7]),
    new Match(TEAMS[14], TEAMS[19]),
    new Match(TEAMS[2], TEAMS[9]),
    new Match(TEAMS[18], TEAMS[15]),
    new Match(TEAMS[4], TEAMS[1])
  ],
  // Week 6
  [
    new Match(TEAMS[3], TEAMS[7]),
    new Match(TEAMS[5], TEAMS[14]),
    new Match(TEAMS[15], TEAMS[19]),
    new Match(TEAMS[11], TEAMS[18]),
    new Match(TEAMS[8], TEAMS[2]),
    new Match(TEAMS[1], TEAMS[13]),
    new Match(TEAMS[9], TEAMS[6]),
    new Match(TEAMS[4], TEAMS[10]),
    new Match(TEAMS[17], TEAMS[12]),
    new Match(TEAMS[0], TEAMS[16])
  ],
  // Week 7
  [
    new Match(TEAMS[2], TEAMS[4]),
    new Match(TEAMS[18], TEAMS[0]),
    new Match(TEAMS[19], TEAMS[11]),
    new Match(TEAMS[14], TEAMS[9]),
    new Match(TEAMS[7], TEAMS[17]),
    new Match(TEAMS[12], TEAMS[5]),
    new Match(TEAMS[10], TEAMS[8]),
    new Match(TEAMS[1], TEAMS[3]),
    new Match(TEAMS[6], TEAMS[16]),
    new Match(TEAMS[13], TEAMS[15])
  ],
  // Week 8
  [
    new Match(TEAMS[2], TEAMS[18]),
    new Match(TEAMS[16], TEAMS[10]),
    new Match(TEAMS[5], TEAMS[13]),
    new Match(TEAMS[15], TEAMS[7]),
    new Match(TEAMS[8], TEAMS[12]),
    new Match(TEAMS[9], TEAMS[1]),
    new Match(TEAMS[6], TEAMS[3]),
    new Match(TEAMS[4], TEAMS[11]),
    new Match(TEAMS[17], TEAMS[19]),
    new Match(TEAMS[0], TEAMS[14])
  ],
  // Week 9
  [
    new Match(TEAMS[7], TEAMS[5]),
    new Match(TEAMS[3], TEAMS[17]),
    new Match(TEAMS[12], TEAMS[16]),
    new Match(TEAMS[10], TEAMS[15]),
    new Match(TEAMS[13], TEAMS[6]),
    new Match(TEAMS[19], TEAMS[0]),
    new Match(TEAMS[1], TEAMS[2]),
    new Match(TEAMS[18], TEAMS[4]),
    new Match(TEAMS[14], TEAMS[8]),
    new Match(TEAMS[11], TEAMS[9])
  ],
  // Week 10
  [
    new Match(TEAMS[2], TEAMS[10]),
    new Match(TEAMS[16], TEAMS[18]),
    new Match(TEAMS[5], TEAMS[11]),
    new Match(TEAMS[15], TEAMS[3]),
    new Match(TEAMS[7], TEAMS[13]),
    new Match(TEAMS[8], TEAMS[4]),
    new Match(TEAMS[9], TEAMS[19]),
    new Match(TEAMS[6], TEAMS[14]),
    new Match(TEAMS[17], TEAMS[1]),
    new Match(TEAMS[0], TEAMS[12])
  ],
  // Week 11
  [
    new Match(TEAMS[3], TEAMS[5]),
    new Match(TEAMS[19], TEAMS[7]),
    new Match(TEAMS[14], TEAMS[2]),
    new Match(TEAMS[11], TEAMS[13]),
    new Match(TEAMS[12], TEAMS[18]),
    new Match(TEAMS[10], TEAMS[6]),
    new Match(TEAMS[8], TEAMS[0]),
    new Match(TEAMS[1], TEAMS[15]),
    new Match(TEAMS[4], TEAMS[16]),
    new Match(TEAMS[17], TEAMS[9])
  ],
  // Week 12
  [
    new Match(TEAMS[3], TEAMS[14]),
    new Match(TEAMS[18], TEAMS[8]),
    new Match(TEAMS[16], TEAMS[2]),
    new Match(TEAMS[5], TEAMS[10]),
    new Match(TEAMS[15], TEAMS[9]),
    new Match(TEAMS[7], TEAMS[1]),
    new Match(TEAMS[12], TEAMS[11]),
    new Match(TEAMS[6], TEAMS[19]),
    new Match(TEAMS[0], TEAMS[4]),
    new Match(TEAMS[13], TEAMS[17])
  ],
  // Week 13
  [
    new Match(TEAMS[2], TEAMS[0]),
    new Match(TEAMS[19], TEAMS[1]),
    new Match(TEAMS[16], TEAMS[13]),
    new Match(TEAMS[5], TEAMS[18]),
    new Match(TEAMS[11], TEAMS[3]),
    new Match(TEAMS[10], TEAMS[12]),
    new Match(TEAMS[8], TEAMS[15]),
    new Match(TEAMS[9], TEAMS[7]),
    new Match(TEAMS[4], TEAMS[6]),
    new Match(TEAMS[17], TEAMS[14])
  ],
  // Week 14
  [
    new Match(TEAMS[3], TEAMS[19]),
    new Match(TEAMS[18], TEAMS[10]),
    new Match(TEAMS[14], TEAMS[11]),
    new Match(TEAMS[15], TEAMS[17]),
    new Match(TEAMS[7], TEAMS[16]),
    new Match(TEAMS[12], TEAMS[4]),
    new Match(TEAMS[1], TEAMS[8]),
    new Match(TEAMS[6], TEAMS[2]),
    new Match(TEAMS[0], TEAMS[5]),
    new Match(TEAMS[13], TEAMS[9])
  ],
  // Week 15
  [
    new Match(TEAMS[2], TEAMS[12]),
    new Match(TEAMS[9], TEAMS[3]),
    new Match(TEAMS[8], TEAMS[7]),
    new Match(TEAMS[10], TEAMS[0]),
    new Match(TEAMS[11], TEAMS[6]),
    new Match(TEAMS[5], TEAMS[15]),
    new Match(TEAMS[16], TEAMS[14]),
    new Match(TEAMS[19], TEAMS[13]),
    new Match(TEAMS[18], TEAMS[1]),
    new Match(TEAMS[4], TEAMS[17])
  ],
  // Week 16
  [
    new Match(TEAMS[3], TEAMS[0]),
    new Match(TEAMS[19], TEAMS[5]),
    new Match(TEAMS[14], TEAMS[10]),
    new Match(TEAMS[15], TEAMS[12]),
    new Match(TEAMS[7], TEAMS[11]),
    new Match(TEAMS[1], TEAMS[16]),
    new Match(TEAMS[9], TEAMS[4]),
    new Match(TEAMS[6], TEAMS[8]),
    new Match(TEAMS[17], TEAMS[2]),
    new Match(TEAMS[13], TEAMS[18])
  ],
  // Week 17
  [
    new Match(TEAMS[2], TEAMS[13]),
    new Match(TEAMS[18], TEAMS[14]),
    new Match(TEAMS[16], TEAMS[9]),
    new Match(TEAMS[5], TEAMS[17]),
    new Match(TEAMS[11], TEAMS[15]),
    new Match(TEAMS[12], TEAMS[1]),
    new Match(TEAMS[10], TEAMS[19]),
    new Match(TEAMS[8], TEAMS[3]),
    new Match(TEAMS[4], TEAMS[7]),
    new Match(TEAMS[0], TEAMS[6])
  ],
  // Week 18
  [
    new Match(TEAMS[3], TEAMS[16]),
    new Match(TEAMS[19], TEAMS[4]),
    new Match(TEAMS[14], TEAMS[12]),
    new Match(TEAMS[15], TEAMS[2]),
    new Match(TEAMS[7], TEAMS[0]),
    new Match(TEAMS[1], TEAMS[11]),
    new Match(TEAMS[9], TEAMS[5]),
    new Match(TEAMS[6], TEAMS[18]),
    new Match(TEAMS[17], TEAMS[8]),
    new Match(TEAMS[13], TEAMS[10])
  ],
  // Week 19
  [
    new Match(TEAMS[0], TEAMS[15]),
    new Match(TEAMS[18], TEAMS[3]),
    new Match(TEAMS[16], TEAMS[19]),
    new Match(TEAMS[5], TEAMS[1]),
    new Match(TEAMS[11], TEAMS[17]),
    new Match(TEAMS[12], TEAMS[6]),
    new Match(TEAMS[10], TEAMS[9]),
    new Match(TEAMS[8], TEAMS[13]),
    new Match(TEAMS[4], TEAMS[14]),
    new Match(TEAMS[2], TEAMS[7])
  ],
  // Week 20
  [
    new Match(TEAMS[1], TEAMS[0]),
    new Match(TEAMS[3], TEAMS[2]),
    new Match(TEAMS[5], TEAMS[4]),
    new Match(TEAMS[7], TEAMS[6]),
    new Match(TEAMS[9], TEAMS[8]),
    new Match(TEAMS[11], TEAMS[10]),
    new Match(TEAMS[13], TEAMS[12]),
    new Match(TEAMS[15], TEAMS[14]),
    new Match(TEAMS[17], TEAMS[16]),
    new Match(TEAMS[19], TEAMS[18])
  ],
  // Week 21
  [
    new Match(TEAMS[16], TEAMS[5]),
    new Match(TEAMS[12], TEAMS[3]),
    new Match(TEAMS[0], TEAMS[13]),
    new Match(TEAMS[2], TEAMS[19]),
    new Match(TEAMS[4], TEAMS[15]),
    new Match(TEAMS[8], TEAMS[11]),
    new Match(TEAMS[14], TEAMS[7]),
    new Match(TEAMS[10], TEAMS[1]),
    new Match(TEAMS[18], TEAMS[9]),
    new Match(TEAMS[6], TEAMS[17])
  ],
  // Week 22
  [
    new Match(TEAMS[11], TEAMS[16]),
    new Match(TEAMS[5], TEAMS[2]),
    new Match(TEAMS[7], TEAMS[18]),
    new Match(TEAMS[1], TEAMS[14]),
    new Match(TEAMS[9], TEAMS[12]),
    new Match(TEAMS[3], TEAMS[10]),
    new Match(TEAMS[19], TEAMS[8]),
    new Match(TEAMS[15], TEAMS[6]),
    new Match(TEAMS[13], TEAMS[4]),
    new Match(TEAMS[17], TEAMS[0])
  ],
  // Week 23
  [
    new Match(TEAMS[16], TEAMS[15]),
    new Match(TEAMS[4], TEAMS[3]),
    new Match(TEAMS[8], TEAMS[5]),
    new Match(TEAMS[2], TEAMS[11]),
    new Match(TEAMS[10], TEAMS[7]),
    new Match(TEAMS[0], TEAMS[9]),
    new Match(TEAMS[18], TEAMS[17]),
    new Match(TEAMS[14], TEAMS[13]),
    new Match(TEAMS[6], TEAMS[1]),
    new Match(TEAMS[12], TEAMS[19])
  ],
  // Week 24
  [
    new Match(TEAMS[17], TEAMS[10]),
    new Match(TEAMS[5], TEAMS[6]),
    new Match(TEAMS[8], TEAMS[16]),
    new Match(TEAMS[3], TEAMS[13]),
    new Match(TEAMS[11], TEAMS[0]),
    new Match(TEAMS[7], TEAMS[12]),
    new Match(TEAMS[19], TEAMS[14]),
    new Match(TEAMS[9], TEAMS[2]),
    new Match(TEAMS[15], TEAMS[18]),
    new Match(TEAMS[1], TEAMS[4])
  ],
  // Week 25
  [
    new Match(TEAMS[7], TEAMS[3]),
    new Match(TEAMS[14], TEAMS[5]),
    new Match(TEAMS[19], TEAMS[15]),
    new Match(TEAMS[18], TEAMS[11]),
    new Match(TEAMS[2], TEAMS[8]),
    new Match(TEAMS[13], TEAMS[1]),
    new Match(TEAMS[6], TEAMS[9]),
    new Match(TEAMS[10], TEAMS[4]),
    new Match(TEAMS[12], TEAMS[17]),
    new Match(TEAMS[16], TEAMS[0])
  ],
  // Week 26
  [
    new Match(TEAMS[4], TEAMS[2]),
    new Match(TEAMS[0], TEAMS[18]),
    new Match(TEAMS[11], TEAMS[19]),
    new Match(TEAMS[9], TEAMS[14]),
    new Match(TEAMS[17], TEAMS[7]),
    new Match(TEAMS[5], TEAMS[12]),
    new Match(TEAMS[8], TEAMS[10]),
    new Match(TEAMS[3], TEAMS[1]),
    new Match(TEAMS[16], TEAMS[6]),
    new Match(TEAMS[15], TEAMS[13])
  ],
  // Week 27
  [
    new Match(TEAMS[18], TEAMS[2]),
    new Match(TEAMS[10], TEAMS[16]),
    new Match(TEAMS[13], TEAMS[5]),
    new Match(TEAMS[7], TEAMS[15]),
    new Match(TEAMS[12], TEAMS[8]),
    new Match(TEAMS[1], TEAMS[9]),
    new Match(TEAMS[3], TEAMS[6]),
    new Match(TEAMS[11], TEAMS[4]),
    new Match(TEAMS[19], TEAMS[17]),
    new Match(TEAMS[14], TEAMS[0])
  ],
  // Week 28
  [
    new Match(TEAMS[5], TEAMS[7]),
    new Match(TEAMS[17], TEAMS[3]),
    new Match(TEAMS[16], TEAMS[12]),
    new Match(TEAMS[15], TEAMS[10]),
    new Match(TEAMS[6], TEAMS[13]),
    new Match(TEAMS[0], TEAMS[19]),
    new Match(TEAMS[2], TEAMS[1]),
    new Match(TEAMS[4], TEAMS[18]),
    new Match(TEAMS[8], TEAMS[14]),
    new Match(TEAMS[9], TEAMS[11])
  ],
  // Week 29
  [
    new Match(TEAMS[10], TEAMS[2]),
    new Match(TEAMS[18], TEAMS[16]),
    new Match(TEAMS[11], TEAMS[5]),
    new Match(TEAMS[3], TEAMS[15]),
    new Match(TEAMS[13], TEAMS[7]),
    new Match(TEAMS[4], TEAMS[8]),
    new Match(TEAMS[19], TEAMS[9]),
    new Match(TEAMS[14], TEAMS[6]),
    new Match(TEAMS[1], TEAMS[17]),
    new Match(TEAMS[12], TEAMS[0])
  ],
  // Week 30
  [
    new Match(TEAMS[5], TEAMS[3]),
    new Match(TEAMS[7], TEAMS[19]),
    new Match(TEAMS[2], TEAMS[14]),
    new Match(TEAMS[13], TEAMS[11]),
    new Match(TEAMS[18], TEAMS[12]),
    new Match(TEAMS[6], TEAMS[10]),
    new Match(TEAMS[0], TEAMS[8]),
    new Match(TEAMS[15], TEAMS[1]),
    new Match(TEAMS[16], TEAMS[4]),
    new Match(TEAMS[9], TEAMS[17])
  ],
  // Week 31
  [
    new Match(TEAMS[14], TEAMS[3]),
    new Match(TEAMS[8], TEAMS[18]),
    new Match(TEAMS[2], TEAMS[16]),
    new Match(TEAMS[10], TEAMS[5]),
    new Match(TEAMS[9], TEAMS[15]),
    new Match(TEAMS[1], TEAMS[7]),
    new Match(TEAMS[11], TEAMS[12]),
    new Match(TEAMS[19], TEAMS[6]),
    new Match(TEAMS[4], TEAMS[0]),
    new Match(TEAMS[17], TEAMS[13])
  ],
  // Week 32
  [
    new Match(TEAMS[0], TEAMS[2]),
    new Match(TEAMS[1], TEAMS[19]),
    new Match(TEAMS[13], TEAMS[16]),
    new Match(TEAMS[18], TEAMS[5]),
    new Match(TEAMS[3], TEAMS[11]),
    new Match(TEAMS[12], TEAMS[10]),
    new Match(TEAMS[15], TEAMS[8]),
    new Match(TEAMS[7], TEAMS[9]),
    new Match(TEAMS[6], TEAMS[4]),
    new Match(TEAMS[14], TEAMS[17])
  ],
  // Week 33
  [
    new Match(TEAMS[19], TEAMS[3]),
    new Match(TEAMS[10], TEAMS[18]),
    new Match(TEAMS[11], TEAMS[14]),
    new Match(TEAMS[17], TEAMS[15]),
    new Match(TEAMS[16], TEAMS[7]),
    new Match(TEAMS[4], TEAMS[12]),
    new Match(TEAMS[8], TEAMS[1]),
    new Match(TEAMS[2], TEAMS[6]),
    new Match(TEAMS[5], TEAMS[0]),
    new Match(TEAMS[9], TEAMS[13])
  ],
  // Week 34
  [
    new Match(TEAMS[12], TEAMS[2]),
    new Match(TEAMS[3], TEAMS[9]),
    new Match(TEAMS[7], TEAMS[8]),
    new Match(TEAMS[0], TEAMS[10]),
    new Match(TEAMS[6], TEAMS[11]),
    new Match(TEAMS[15], TEAMS[5]),
    new Match(TEAMS[14], TEAMS[16]),
    new Match(TEAMS[13], TEAMS[19]),
    new Match(TEAMS[1], TEAMS[18]),
    new Match(TEAMS[17], TEAMS[4])
  ],
  // Week 35
  [
    new Match(TEAMS[0], TEAMS[3]),
    new Match(TEAMS[5], TEAMS[19]),
    new Match(TEAMS[10], TEAMS[14]),
    new Match(TEAMS[12], TEAMS[15]),
    new Match(TEAMS[11], TEAMS[7]),
    new Match(TEAMS[16], TEAMS[1]),
    new Match(TEAMS[4], TEAMS[9]),
    new Match(TEAMS[8], TEAMS[6]),
    new Match(TEAMS[2], TEAMS[17]),
    new Match(TEAMS[18], TEAMS[13])
  ],
  // Week 36
  [
    new Match(TEAMS[13], TEAMS[2]),
    new Match(TEAMS[14], TEAMS[18]),
    new Match(TEAMS[9], TEAMS[16]),
    new Match(TEAMS[17], TEAMS[5]),
    new Match(TEAMS[15], TEAMS[11]),
    new Match(TEAMS[1], TEAMS[12]),
    new Match(TEAMS[19], TEAMS[10]),
    new Match(TEAMS[3], TEAMS[8]),
    new Match(TEAMS[7], TEAMS[4]),
    new Match(TEAMS[6], TEAMS[0])
  ],
  // Week 37
  [
    new Match(TEAMS[16], TEAMS[3]),
    new Match(TEAMS[4], TEAMS[19]),
    new Match(TEAMS[12], TEAMS[14]),
    new Match(TEAMS[2], TEAMS[15]),
    new Match(TEAMS[0], TEAMS[7]),
    new Match(TEAMS[11], TEAMS[1]),
    new Match(TEAMS[5], TEAMS[9]),
    new Match(TEAMS[18], TEAMS[6]),
    new Match(TEAMS[8], TEAMS[17]),
    new Match(TEAMS[10], TEAMS[13])
  ],
  // Week 38
  [
    new Match(TEAMS[15], TEAMS[0]),
    new Match(TEAMS[3], TEAMS[18]),
    new Match(TEAMS[19], TEAMS[16]),
    new Match(TEAMS[1], TEAMS[5]),
    new Match(TEAMS[17], TEAMS[11]),
    new Match(TEAMS[6], TEAMS[12]),
    new Match(TEAMS[9], TEAMS[10]),
    new Match(TEAMS[13], TEAMS[8]),
    new Match(TEAMS[14], TEAMS[4]),
    new Match(TEAMS[7], TEAMS[2])
  ]
];

export { TITLE, TEAMS, CALENDAR };
