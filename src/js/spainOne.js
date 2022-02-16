import Team from "./Team.js";
import Match from "./Match.js";

const SPAIN_ONE = [
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

const SPAIN_ONE_CALENDAR = [
  // Week 1
  [
    new Match(SPAIN_ONE[0], SPAIN_ONE[1]),
    new Match(SPAIN_ONE[2], SPAIN_ONE[3]),
    new Match(SPAIN_ONE[4], SPAIN_ONE[5]),
    new Match(SPAIN_ONE[6], SPAIN_ONE[7]),
    new Match(SPAIN_ONE[8], SPAIN_ONE[9]),
    new Match(SPAIN_ONE[10], SPAIN_ONE[11]),
    new Match(SPAIN_ONE[12], SPAIN_ONE[13]),
    new Match(SPAIN_ONE[14], SPAIN_ONE[15]),
    new Match(SPAIN_ONE[16], SPAIN_ONE[17]),
    new Match(SPAIN_ONE[18], SPAIN_ONE[19])
  ],
  // Week 2
  [
    new Match(SPAIN_ONE[5], SPAIN_ONE[16]),
    new Match(SPAIN_ONE[3], SPAIN_ONE[12]),
    new Match(SPAIN_ONE[13], SPAIN_ONE[0]),
    new Match(SPAIN_ONE[19], SPAIN_ONE[2]),
    new Match(SPAIN_ONE[15], SPAIN_ONE[4]),
    new Match(SPAIN_ONE[11], SPAIN_ONE[8]),
    new Match(SPAIN_ONE[7], SPAIN_ONE[14]),
    new Match(SPAIN_ONE[1], SPAIN_ONE[10]),
    new Match(SPAIN_ONE[9], SPAIN_ONE[18]),
    new Match(SPAIN_ONE[17], SPAIN_ONE[6])
  ],
  // Week 3
  [
    new Match(SPAIN_ONE[16], SPAIN_ONE[11]),
    new Match(SPAIN_ONE[2], SPAIN_ONE[5]),
    new Match(SPAIN_ONE[18], SPAIN_ONE[7]),
    new Match(SPAIN_ONE[14], SPAIN_ONE[1]),
    new Match(SPAIN_ONE[12], SPAIN_ONE[9]),
    new Match(SPAIN_ONE[10], SPAIN_ONE[3]),
    new Match(SPAIN_ONE[8], SPAIN_ONE[19]),
    new Match(SPAIN_ONE[6], SPAIN_ONE[15]),
    new Match(SPAIN_ONE[4], SPAIN_ONE[13]),
    new Match(SPAIN_ONE[0], SPAIN_ONE[17])
  ],
  // Week 4
  [
    new Match(SPAIN_ONE[15], SPAIN_ONE[16]),
    new Match(SPAIN_ONE[3], SPAIN_ONE[4]),
    new Match(SPAIN_ONE[5], SPAIN_ONE[8]),
    new Match(SPAIN_ONE[11], SPAIN_ONE[2]),
    new Match(SPAIN_ONE[7], SPAIN_ONE[10]),
    new Match(SPAIN_ONE[9], SPAIN_ONE[0]),
    new Match(SPAIN_ONE[17], SPAIN_ONE[18]),
    new Match(SPAIN_ONE[13], SPAIN_ONE[14]),
    new Match(SPAIN_ONE[1], SPAIN_ONE[6]),
    new Match(SPAIN_ONE[19], SPAIN_ONE[12])
  ],
  // Week 5
  [
    new Match(SPAIN_ONE[10], SPAIN_ONE[17]),
    new Match(SPAIN_ONE[6], SPAIN_ONE[5]),
    new Match(SPAIN_ONE[16], SPAIN_ONE[8]),
    new Match(SPAIN_ONE[13], SPAIN_ONE[3]),
    new Match(SPAIN_ONE[0], SPAIN_ONE[11]),
    new Match(SPAIN_ONE[12], SPAIN_ONE[7]),
    new Match(SPAIN_ONE[14], SPAIN_ONE[19]),
    new Match(SPAIN_ONE[2], SPAIN_ONE[9]),
    new Match(SPAIN_ONE[18], SPAIN_ONE[15]),
    new Match(SPAIN_ONE[4], SPAIN_ONE[1])
  ],
  // Week 6
  [
    new Match(SPAIN_ONE[3], SPAIN_ONE[7]),
    new Match(SPAIN_ONE[5], SPAIN_ONE[14]),
    new Match(SPAIN_ONE[15], SPAIN_ONE[19]),
    new Match(SPAIN_ONE[11], SPAIN_ONE[18]),
    new Match(SPAIN_ONE[8], SPAIN_ONE[2]),
    new Match(SPAIN_ONE[1], SPAIN_ONE[13]),
    new Match(SPAIN_ONE[9], SPAIN_ONE[6]),
    new Match(SPAIN_ONE[4], SPAIN_ONE[10]),
    new Match(SPAIN_ONE[17], SPAIN_ONE[12]),
    new Match(SPAIN_ONE[0], SPAIN_ONE[16])
  ],
  // Week 7
  [
    new Match(SPAIN_ONE[2], SPAIN_ONE[4]),
    new Match(SPAIN_ONE[18], SPAIN_ONE[0]),
    new Match(SPAIN_ONE[19], SPAIN_ONE[11]),
    new Match(SPAIN_ONE[14], SPAIN_ONE[9]),
    new Match(SPAIN_ONE[7], SPAIN_ONE[17]),
    new Match(SPAIN_ONE[12], SPAIN_ONE[5]),
    new Match(SPAIN_ONE[10], SPAIN_ONE[8]),
    new Match(SPAIN_ONE[1], SPAIN_ONE[3]),
    new Match(SPAIN_ONE[6], SPAIN_ONE[16]),
    new Match(SPAIN_ONE[13], SPAIN_ONE[15])
  ],
  // Week 8
  [
    new Match(SPAIN_ONE[2], SPAIN_ONE[18]),
    new Match(SPAIN_ONE[16], SPAIN_ONE[10]),
    new Match(SPAIN_ONE[5], SPAIN_ONE[13]),
    new Match(SPAIN_ONE[15], SPAIN_ONE[7]),
    new Match(SPAIN_ONE[8], SPAIN_ONE[12]),
    new Match(SPAIN_ONE[9], SPAIN_ONE[1]),
    new Match(SPAIN_ONE[6], SPAIN_ONE[3]),
    new Match(SPAIN_ONE[4], SPAIN_ONE[11]),
    new Match(SPAIN_ONE[17], SPAIN_ONE[19]),
    new Match(SPAIN_ONE[0], SPAIN_ONE[14])
  ],
  // Week 9
  [
    new Match(SPAIN_ONE[7], SPAIN_ONE[5]),
    new Match(SPAIN_ONE[3], SPAIN_ONE[17]),
    new Match(SPAIN_ONE[12], SPAIN_ONE[16]),
    new Match(SPAIN_ONE[10], SPAIN_ONE[15]),
    new Match(SPAIN_ONE[13], SPAIN_ONE[6]),
    new Match(SPAIN_ONE[19], SPAIN_ONE[0]),
    new Match(SPAIN_ONE[1], SPAIN_ONE[2]),
    new Match(SPAIN_ONE[18], SPAIN_ONE[4]),
    new Match(SPAIN_ONE[14], SPAIN_ONE[8]),
    new Match(SPAIN_ONE[11], SPAIN_ONE[9])
  ],
  // Week 10
  [
    new Match(SPAIN_ONE[2], SPAIN_ONE[10]),
    new Match(SPAIN_ONE[16], SPAIN_ONE[18]),
    new Match(SPAIN_ONE[5], SPAIN_ONE[11]),
    new Match(SPAIN_ONE[15], SPAIN_ONE[3]),
    new Match(SPAIN_ONE[7], SPAIN_ONE[13]),
    new Match(SPAIN_ONE[8], SPAIN_ONE[4]),
    new Match(SPAIN_ONE[9], SPAIN_ONE[19]),
    new Match(SPAIN_ONE[6], SPAIN_ONE[14]),
    new Match(SPAIN_ONE[17], SPAIN_ONE[1]),
    new Match(SPAIN_ONE[0], SPAIN_ONE[12])
  ],
  // Week 11
  [
    new Match(SPAIN_ONE[3], SPAIN_ONE[5]),
    new Match(SPAIN_ONE[19], SPAIN_ONE[7]),
    new Match(SPAIN_ONE[14], SPAIN_ONE[2]),
    new Match(SPAIN_ONE[11], SPAIN_ONE[13]),
    new Match(SPAIN_ONE[12], SPAIN_ONE[18]),
    new Match(SPAIN_ONE[10], SPAIN_ONE[6]),
    new Match(SPAIN_ONE[8], SPAIN_ONE[0]),
    new Match(SPAIN_ONE[1], SPAIN_ONE[15]),
    new Match(SPAIN_ONE[4], SPAIN_ONE[16]),
    new Match(SPAIN_ONE[17], SPAIN_ONE[9])
  ],
  // Week 12
  [
    new Match(SPAIN_ONE[3], SPAIN_ONE[14]),
    new Match(SPAIN_ONE[18], SPAIN_ONE[8]),
    new Match(SPAIN_ONE[16], SPAIN_ONE[2]),
    new Match(SPAIN_ONE[5], SPAIN_ONE[10]),
    new Match(SPAIN_ONE[15], SPAIN_ONE[9]),
    new Match(SPAIN_ONE[7], SPAIN_ONE[1]),
    new Match(SPAIN_ONE[12], SPAIN_ONE[11]),
    new Match(SPAIN_ONE[6], SPAIN_ONE[19]),
    new Match(SPAIN_ONE[0], SPAIN_ONE[4]),
    new Match(SPAIN_ONE[13], SPAIN_ONE[17])
  ],
  // Week 13
  [
    new Match(SPAIN_ONE[2], SPAIN_ONE[0]),
    new Match(SPAIN_ONE[19], SPAIN_ONE[1]),
    new Match(SPAIN_ONE[16], SPAIN_ONE[13]),
    new Match(SPAIN_ONE[5], SPAIN_ONE[18]),
    new Match(SPAIN_ONE[11], SPAIN_ONE[3]),
    new Match(SPAIN_ONE[10], SPAIN_ONE[12]),
    new Match(SPAIN_ONE[8], SPAIN_ONE[15]),
    new Match(SPAIN_ONE[9], SPAIN_ONE[7]),
    new Match(SPAIN_ONE[4], SPAIN_ONE[6]),
    new Match(SPAIN_ONE[17], SPAIN_ONE[14])
  ],
  // Week 14
  [
    new Match(SPAIN_ONE[3], SPAIN_ONE[19]),
    new Match(SPAIN_ONE[18], SPAIN_ONE[10]),
    new Match(SPAIN_ONE[14], SPAIN_ONE[11]),
    new Match(SPAIN_ONE[15], SPAIN_ONE[17]),
    new Match(SPAIN_ONE[7], SPAIN_ONE[16]),
    new Match(SPAIN_ONE[12], SPAIN_ONE[4]),
    new Match(SPAIN_ONE[1], SPAIN_ONE[8]),
    new Match(SPAIN_ONE[6], SPAIN_ONE[2]),
    new Match(SPAIN_ONE[0], SPAIN_ONE[5]),
    new Match(SPAIN_ONE[13], SPAIN_ONE[9])
  ],
  // Week 15
  [
    new Match(SPAIN_ONE[2], SPAIN_ONE[12]),
    new Match(SPAIN_ONE[9], SPAIN_ONE[3]),
    new Match(SPAIN_ONE[8], SPAIN_ONE[7]),
    new Match(SPAIN_ONE[10], SPAIN_ONE[0]),
    new Match(SPAIN_ONE[11], SPAIN_ONE[6]),
    new Match(SPAIN_ONE[5], SPAIN_ONE[15]),
    new Match(SPAIN_ONE[16], SPAIN_ONE[14]),
    new Match(SPAIN_ONE[19], SPAIN_ONE[13]),
    new Match(SPAIN_ONE[18], SPAIN_ONE[1]),
    new Match(SPAIN_ONE[4], SPAIN_ONE[17])
  ],
  // Week 16
  [
    new Match(SPAIN_ONE[3], SPAIN_ONE[0]),
    new Match(SPAIN_ONE[19], SPAIN_ONE[5]),
    new Match(SPAIN_ONE[14], SPAIN_ONE[10]),
    new Match(SPAIN_ONE[15], SPAIN_ONE[12]),
    new Match(SPAIN_ONE[7], SPAIN_ONE[11]),
    new Match(SPAIN_ONE[1], SPAIN_ONE[16]),
    new Match(SPAIN_ONE[9], SPAIN_ONE[4]),
    new Match(SPAIN_ONE[6], SPAIN_ONE[8]),
    new Match(SPAIN_ONE[17], SPAIN_ONE[2]),
    new Match(SPAIN_ONE[13], SPAIN_ONE[18])
  ],
  // Week 17
  [
    new Match(SPAIN_ONE[2], SPAIN_ONE[13]),
    new Match(SPAIN_ONE[18], SPAIN_ONE[14]),
    new Match(SPAIN_ONE[16], SPAIN_ONE[9]),
    new Match(SPAIN_ONE[5], SPAIN_ONE[17]),
    new Match(SPAIN_ONE[11], SPAIN_ONE[15]),
    new Match(SPAIN_ONE[12], SPAIN_ONE[1]),
    new Match(SPAIN_ONE[10], SPAIN_ONE[19]),
    new Match(SPAIN_ONE[8], SPAIN_ONE[3]),
    new Match(SPAIN_ONE[4], SPAIN_ONE[7]),
    new Match(SPAIN_ONE[0], SPAIN_ONE[6])
  ],
  // Week 18
  [
    new Match(SPAIN_ONE[3], SPAIN_ONE[16]),
    new Match(SPAIN_ONE[19], SPAIN_ONE[4]),
    new Match(SPAIN_ONE[14], SPAIN_ONE[12]),
    new Match(SPAIN_ONE[15], SPAIN_ONE[2]),
    new Match(SPAIN_ONE[7], SPAIN_ONE[0]),
    new Match(SPAIN_ONE[1], SPAIN_ONE[11]),
    new Match(SPAIN_ONE[9], SPAIN_ONE[5]),
    new Match(SPAIN_ONE[6], SPAIN_ONE[18]),
    new Match(SPAIN_ONE[17], SPAIN_ONE[8]),
    new Match(SPAIN_ONE[13], SPAIN_ONE[10])
  ],
  // Week 19
  [
    new Match(SPAIN_ONE[0], SPAIN_ONE[15]),
    new Match(SPAIN_ONE[18], SPAIN_ONE[3]),
    new Match(SPAIN_ONE[16], SPAIN_ONE[19]),
    new Match(SPAIN_ONE[5], SPAIN_ONE[1]),
    new Match(SPAIN_ONE[11], SPAIN_ONE[17]),
    new Match(SPAIN_ONE[12], SPAIN_ONE[6]),
    new Match(SPAIN_ONE[10], SPAIN_ONE[9]),
    new Match(SPAIN_ONE[8], SPAIN_ONE[13]),
    new Match(SPAIN_ONE[4], SPAIN_ONE[14]),
    new Match(SPAIN_ONE[2], SPAIN_ONE[7])
  ],
  // Week 20
  [
    new Match(SPAIN_ONE[1], SPAIN_ONE[0]),
    new Match(SPAIN_ONE[3], SPAIN_ONE[2]),
    new Match(SPAIN_ONE[5], SPAIN_ONE[4]),
    new Match(SPAIN_ONE[7], SPAIN_ONE[6]),
    new Match(SPAIN_ONE[9], SPAIN_ONE[8]),
    new Match(SPAIN_ONE[11], SPAIN_ONE[10]),
    new Match(SPAIN_ONE[13], SPAIN_ONE[12]),
    new Match(SPAIN_ONE[15], SPAIN_ONE[14]),
    new Match(SPAIN_ONE[17], SPAIN_ONE[16]),
    new Match(SPAIN_ONE[19], SPAIN_ONE[18])
  ],
  // Week 21
  [
    new Match(SPAIN_ONE[16], SPAIN_ONE[5]),
    new Match(SPAIN_ONE[12], SPAIN_ONE[3]),
    new Match(SPAIN_ONE[0], SPAIN_ONE[13]),
    new Match(SPAIN_ONE[2], SPAIN_ONE[19]),
    new Match(SPAIN_ONE[4], SPAIN_ONE[15]),
    new Match(SPAIN_ONE[8], SPAIN_ONE[11]),
    new Match(SPAIN_ONE[14], SPAIN_ONE[7]),
    new Match(SPAIN_ONE[10], SPAIN_ONE[1]),
    new Match(SPAIN_ONE[18], SPAIN_ONE[9]),
    new Match(SPAIN_ONE[6], SPAIN_ONE[17])
  ],
  // Week 22
  [
    new Match(SPAIN_ONE[11], SPAIN_ONE[16]),
    new Match(SPAIN_ONE[5], SPAIN_ONE[2]),
    new Match(SPAIN_ONE[7], SPAIN_ONE[18]),
    new Match(SPAIN_ONE[1], SPAIN_ONE[14]),
    new Match(SPAIN_ONE[9], SPAIN_ONE[12]),
    new Match(SPAIN_ONE[3], SPAIN_ONE[10]),
    new Match(SPAIN_ONE[19], SPAIN_ONE[8]),
    new Match(SPAIN_ONE[15], SPAIN_ONE[6]),
    new Match(SPAIN_ONE[13], SPAIN_ONE[4]),
    new Match(SPAIN_ONE[17], SPAIN_ONE[0])
  ],
  // Week 23
  [
    new Match(SPAIN_ONE[16], SPAIN_ONE[15]),
    new Match(SPAIN_ONE[4], SPAIN_ONE[3]),
    new Match(SPAIN_ONE[8], SPAIN_ONE[5]),
    new Match(SPAIN_ONE[2], SPAIN_ONE[11]),
    new Match(SPAIN_ONE[10], SPAIN_ONE[7]),
    new Match(SPAIN_ONE[0], SPAIN_ONE[9]),
    new Match(SPAIN_ONE[18], SPAIN_ONE[17]),
    new Match(SPAIN_ONE[14], SPAIN_ONE[13]),
    new Match(SPAIN_ONE[6], SPAIN_ONE[1]),
    new Match(SPAIN_ONE[12], SPAIN_ONE[19])
  ],
  // Week 24
  [
    new Match(SPAIN_ONE[17], SPAIN_ONE[10]),
    new Match(SPAIN_ONE[5], SPAIN_ONE[6]),
    new Match(SPAIN_ONE[8], SPAIN_ONE[16]),
    new Match(SPAIN_ONE[3], SPAIN_ONE[13]),
    new Match(SPAIN_ONE[11], SPAIN_ONE[0]),
    new Match(SPAIN_ONE[7], SPAIN_ONE[12]),
    new Match(SPAIN_ONE[19], SPAIN_ONE[14]),
    new Match(SPAIN_ONE[9], SPAIN_ONE[2]),
    new Match(SPAIN_ONE[15], SPAIN_ONE[18]),
    new Match(SPAIN_ONE[1], SPAIN_ONE[4])
  ],
  // Week 25
  [
    new Match(SPAIN_ONE[7], SPAIN_ONE[3]),
    new Match(SPAIN_ONE[14], SPAIN_ONE[5]),
    new Match(SPAIN_ONE[19], SPAIN_ONE[15]),
    new Match(SPAIN_ONE[18], SPAIN_ONE[11]),
    new Match(SPAIN_ONE[2], SPAIN_ONE[8]),
    new Match(SPAIN_ONE[13], SPAIN_ONE[1]),
    new Match(SPAIN_ONE[6], SPAIN_ONE[9]),
    new Match(SPAIN_ONE[10], SPAIN_ONE[4]),
    new Match(SPAIN_ONE[12], SPAIN_ONE[17]),
    new Match(SPAIN_ONE[16], SPAIN_ONE[0])
  ],
  // Week 26
  [
    new Match(SPAIN_ONE[4], SPAIN_ONE[2]),
    new Match(SPAIN_ONE[0], SPAIN_ONE[18]),
    new Match(SPAIN_ONE[11], SPAIN_ONE[19]),
    new Match(SPAIN_ONE[9], SPAIN_ONE[14]),
    new Match(SPAIN_ONE[17], SPAIN_ONE[7]),
    new Match(SPAIN_ONE[5], SPAIN_ONE[12]),
    new Match(SPAIN_ONE[8], SPAIN_ONE[10]),
    new Match(SPAIN_ONE[3], SPAIN_ONE[1]),
    new Match(SPAIN_ONE[16], SPAIN_ONE[6]),
    new Match(SPAIN_ONE[15], SPAIN_ONE[13])
  ],
  // Week 27
  [
    new Match(SPAIN_ONE[18], SPAIN_ONE[2]),
    new Match(SPAIN_ONE[10], SPAIN_ONE[16]),
    new Match(SPAIN_ONE[13], SPAIN_ONE[5]),
    new Match(SPAIN_ONE[7], SPAIN_ONE[15]),
    new Match(SPAIN_ONE[12], SPAIN_ONE[8]),
    new Match(SPAIN_ONE[1], SPAIN_ONE[9]),
    new Match(SPAIN_ONE[3], SPAIN_ONE[6]),
    new Match(SPAIN_ONE[11], SPAIN_ONE[4]),
    new Match(SPAIN_ONE[19], SPAIN_ONE[17]),
    new Match(SPAIN_ONE[14], SPAIN_ONE[0])
  ],
  // Week 28
  [
    new Match(SPAIN_ONE[5], SPAIN_ONE[7]),
    new Match(SPAIN_ONE[17], SPAIN_ONE[3]),
    new Match(SPAIN_ONE[16], SPAIN_ONE[12]),
    new Match(SPAIN_ONE[15], SPAIN_ONE[10]),
    new Match(SPAIN_ONE[6], SPAIN_ONE[13]),
    new Match(SPAIN_ONE[0], SPAIN_ONE[19]),
    new Match(SPAIN_ONE[2], SPAIN_ONE[1]),
    new Match(SPAIN_ONE[4], SPAIN_ONE[18]),
    new Match(SPAIN_ONE[8], SPAIN_ONE[14]),
    new Match(SPAIN_ONE[9], SPAIN_ONE[11])
  ],
  // Week 29
  [
    new Match(SPAIN_ONE[10], SPAIN_ONE[2]),
    new Match(SPAIN_ONE[18], SPAIN_ONE[16]),
    new Match(SPAIN_ONE[11], SPAIN_ONE[5]),
    new Match(SPAIN_ONE[3], SPAIN_ONE[15]),
    new Match(SPAIN_ONE[13], SPAIN_ONE[7]),
    new Match(SPAIN_ONE[4], SPAIN_ONE[8]),
    new Match(SPAIN_ONE[19], SPAIN_ONE[9]),
    new Match(SPAIN_ONE[14], SPAIN_ONE[6]),
    new Match(SPAIN_ONE[1], SPAIN_ONE[17]),
    new Match(SPAIN_ONE[12], SPAIN_ONE[0])
  ],
  // Week 30
  [
    new Match(SPAIN_ONE[5], SPAIN_ONE[3]),
    new Match(SPAIN_ONE[7], SPAIN_ONE[19]),
    new Match(SPAIN_ONE[2], SPAIN_ONE[14]),
    new Match(SPAIN_ONE[13], SPAIN_ONE[11]),
    new Match(SPAIN_ONE[18], SPAIN_ONE[12]),
    new Match(SPAIN_ONE[6], SPAIN_ONE[10]),
    new Match(SPAIN_ONE[0], SPAIN_ONE[8]),
    new Match(SPAIN_ONE[15], SPAIN_ONE[1]),
    new Match(SPAIN_ONE[16], SPAIN_ONE[4]),
    new Match(SPAIN_ONE[9], SPAIN_ONE[17])
  ],
  // Week 31
  [
    new Match(SPAIN_ONE[14], SPAIN_ONE[3]),
    new Match(SPAIN_ONE[8], SPAIN_ONE[18]),
    new Match(SPAIN_ONE[2], SPAIN_ONE[16]),
    new Match(SPAIN_ONE[10], SPAIN_ONE[5]),
    new Match(SPAIN_ONE[9], SPAIN_ONE[15]),
    new Match(SPAIN_ONE[1], SPAIN_ONE[7]),
    new Match(SPAIN_ONE[11], SPAIN_ONE[12]),
    new Match(SPAIN_ONE[19], SPAIN_ONE[6]),
    new Match(SPAIN_ONE[4], SPAIN_ONE[0]),
    new Match(SPAIN_ONE[17], SPAIN_ONE[13])
  ],
  // Week 32
  [
    new Match(SPAIN_ONE[0], SPAIN_ONE[2]),
    new Match(SPAIN_ONE[1], SPAIN_ONE[19]),
    new Match(SPAIN_ONE[13], SPAIN_ONE[16]),
    new Match(SPAIN_ONE[18], SPAIN_ONE[5]),
    new Match(SPAIN_ONE[3], SPAIN_ONE[11]),
    new Match(SPAIN_ONE[12], SPAIN_ONE[10]),
    new Match(SPAIN_ONE[15], SPAIN_ONE[8]),
    new Match(SPAIN_ONE[7], SPAIN_ONE[9]),
    new Match(SPAIN_ONE[6], SPAIN_ONE[4]),
    new Match(SPAIN_ONE[14], SPAIN_ONE[17])
  ],
  // Week 33
  [
    new Match(SPAIN_ONE[19], SPAIN_ONE[3]),
    new Match(SPAIN_ONE[10], SPAIN_ONE[18]),
    new Match(SPAIN_ONE[11], SPAIN_ONE[14]),
    new Match(SPAIN_ONE[17], SPAIN_ONE[15]),
    new Match(SPAIN_ONE[16], SPAIN_ONE[7]),
    new Match(SPAIN_ONE[4], SPAIN_ONE[12]),
    new Match(SPAIN_ONE[8], SPAIN_ONE[1]),
    new Match(SPAIN_ONE[2], SPAIN_ONE[6]),
    new Match(SPAIN_ONE[5], SPAIN_ONE[0]),
    new Match(SPAIN_ONE[9], SPAIN_ONE[13])
  ],
  // Week 34
  [
    new Match(SPAIN_ONE[12], SPAIN_ONE[2]),
    new Match(SPAIN_ONE[3], SPAIN_ONE[9]),
    new Match(SPAIN_ONE[7], SPAIN_ONE[8]),
    new Match(SPAIN_ONE[0], SPAIN_ONE[10]),
    new Match(SPAIN_ONE[6], SPAIN_ONE[11]),
    new Match(SPAIN_ONE[15], SPAIN_ONE[5]),
    new Match(SPAIN_ONE[14], SPAIN_ONE[16]),
    new Match(SPAIN_ONE[13], SPAIN_ONE[19]),
    new Match(SPAIN_ONE[1], SPAIN_ONE[18]),
    new Match(SPAIN_ONE[17], SPAIN_ONE[4])
  ],
  // Week 35
  [
    new Match(SPAIN_ONE[0], SPAIN_ONE[3]),
    new Match(SPAIN_ONE[5], SPAIN_ONE[19]),
    new Match(SPAIN_ONE[10], SPAIN_ONE[14]),
    new Match(SPAIN_ONE[12], SPAIN_ONE[15]),
    new Match(SPAIN_ONE[11], SPAIN_ONE[7]),
    new Match(SPAIN_ONE[16], SPAIN_ONE[1]),
    new Match(SPAIN_ONE[4], SPAIN_ONE[9]),
    new Match(SPAIN_ONE[8], SPAIN_ONE[6]),
    new Match(SPAIN_ONE[2], SPAIN_ONE[17]),
    new Match(SPAIN_ONE[18], SPAIN_ONE[13])
  ],
  // Week 36
  [
    new Match(SPAIN_ONE[13], SPAIN_ONE[2]),
    new Match(SPAIN_ONE[14], SPAIN_ONE[18]),
    new Match(SPAIN_ONE[9], SPAIN_ONE[16]),
    new Match(SPAIN_ONE[17], SPAIN_ONE[5]),
    new Match(SPAIN_ONE[15], SPAIN_ONE[11]),
    new Match(SPAIN_ONE[1], SPAIN_ONE[12]),
    new Match(SPAIN_ONE[19], SPAIN_ONE[10]),
    new Match(SPAIN_ONE[3], SPAIN_ONE[8]),
    new Match(SPAIN_ONE[7], SPAIN_ONE[4]),
    new Match(SPAIN_ONE[6], SPAIN_ONE[0])
  ],
  // Week 37
  [
    new Match(SPAIN_ONE[16], SPAIN_ONE[3]),
    new Match(SPAIN_ONE[4], SPAIN_ONE[19]),
    new Match(SPAIN_ONE[12], SPAIN_ONE[14]),
    new Match(SPAIN_ONE[2], SPAIN_ONE[15]),
    new Match(SPAIN_ONE[0], SPAIN_ONE[7]),
    new Match(SPAIN_ONE[11], SPAIN_ONE[1]),
    new Match(SPAIN_ONE[5], SPAIN_ONE[9]),
    new Match(SPAIN_ONE[18], SPAIN_ONE[6]),
    new Match(SPAIN_ONE[8], SPAIN_ONE[17]),
    new Match(SPAIN_ONE[10], SPAIN_ONE[13])
  ],
  // Week 38
  [
    new Match(SPAIN_ONE[15], SPAIN_ONE[0]),
    new Match(SPAIN_ONE[3], SPAIN_ONE[18]),
    new Match(SPAIN_ONE[19], SPAIN_ONE[16]),
    new Match(SPAIN_ONE[1], SPAIN_ONE[5]),
    new Match(SPAIN_ONE[17], SPAIN_ONE[11]),
    new Match(SPAIN_ONE[6], SPAIN_ONE[12]),
    new Match(SPAIN_ONE[9], SPAIN_ONE[10]),
    new Match(SPAIN_ONE[13], SPAIN_ONE[8]),
    new Match(SPAIN_ONE[14], SPAIN_ONE[4]),
    new Match(SPAIN_ONE[7], SPAIN_ONE[2])
  ]
];

export { SPAIN_ONE, SPAIN_ONE_CALENDAR };
