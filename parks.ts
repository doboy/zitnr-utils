import { Court, CourtWithParkId, Park } from "./types";

export const MillerPark: Park = {
  id: 1373,
  name: "Miller Playfield",
  courts: [{
    id: 1373,
    courtNo: "Court 1",
    canReserve: false,
  }, {
    id: 1374,
    courtNo: "Court 2",
    canReserve: true,
  }],
  startTime: "07:00:00",
  endTime: "22:00:00",
  location: {
    latitude: 47.6207559,
    longitude: -122.3095551,
  },
};

export const MountBakerPark: Park = {
  id: 1377,
  name: "Mount Baker Park",
  courts: [{
    id: 1377,
    courtNo: "Court 1",
    canReserve: false,
  }, {
    id: 1378,
    courtNo: "Court 2",
    canReserve: true,
  }],
  startTime: "06:00:00",
  endTime: "22:00:00",
  location: {
    latitude: 47.5795238,
    longitude: -122.2910945,
  },
};

export const BeaconHillPlayfield: Park = {
  id: 1319,
  name: "Beacon Hill Playfield",
  courts: [{
    id: 1319,
    courtNo: "Court 1",
    canReserve: true,
  }, {
    id: 1320,
    courtNo: "Court 2",
    canReserve: false,
  }],
  startTime: "07:00:00",
  endTime: "21:00:00",
  location: {
    latitude: 47.9794797,
    longitude: -123.4847369,
  },
};

export const BitterLakePlayfield: Park = {
  id: 1315,
  name: "Bitter Lake Playfield",
  courts: [{
    id: 1315,
    courtNo: "Court 1",
    canReserve: true,
  }, {
    id: 1316,
    courtNo: "Court 2",
    canReserve: true,
  }, {
    id: 1317,
    courtNo: "Court 3",
    canReserve: true,
  }],
  startTime: "07:00:00",
  endTime: "21:45:00",
  location: {
    latitude: 47.7242562,
    longitude: -122.3536593,
  },
};

export const RainierBeachPlayfield: Park = {
  id: 1379,
  name: "Rainier Beach Playfield",
  courts: [{
    id: 1379,
    courtNo: "Court 1",
    canReserve: true,
  }, {
    id: 1380,
    courtNo: "Court 2",
    canReserve: true,
  }, {
    id: 1381,
    courtNo: "Court 3",
    canReserve: true,
  }],
  startTime: "08:30:00",
  endTime: "23:00:00",
  location: {
    latitude: 47.5255442,
    longitude: -122.2757479,
  },
};

export const MagnoliaPark: Park = {
  id: 1361,
  name: "Magnolia Park",
  courts: [{
    id: 1361,
    courtNo: "Court 1",
    canReserve: false,
  }, {
    id: 1362,
    courtNo: "Court 2",
    canReserve: true,
  }],
  startTime: "04:00:00",
  endTime: "23:30:00",
  location: {
    latitude: 47.6414913,
    longitude: -122.402598,
  },
};

export const GreenLakeParkWest: Park = {
  id: 181,
  name: "Green Lake Park West",
  courts: [{
    id: 181,
    courtNo: "Court 1",
    canReserve: true,
  }, {
    id: 183,
    courtNo: "Court 2",
    canReserve: false,
  }],
  startTime: "00:00:00",
  endTime: "00:00:00",
  location: {
    latitude: 47.6813315,
    longitude: -122.3617288,
  },
};

export const GreenLakeParkEast: Park = {
  id: 2906,
  name: "Green Lake Park East",
  courts: [{
    id: 2906,
    courtNo: "Court 1",
    canReserve: true,
  }, {
    id: 2907,
    courtNo: "Court 2",
    canReserve: true,
  }, {
    id: 2908,
    courtNo: "Court 3",
    canReserve: true,
  }],
  startTime: "07:00:00",
  endTime: "21:00:00",
  location: {
    latitude: 47.6799735,
    longitude: -122.3498842,
  },
};

export const LowerWoodlandPlayfieldUpper: Park = {
  id: 369,
  name: "Lower Woodland Playfield Upper",
  courts: [{
    id: 369,
    courtNo: "Court 1",
    canReserve: true,
  }, {
    id: 370,
    courtNo: "Court 2",
    canReserve: true,
  }, {
    id: 371,
    courtNo: "Court 3",
    canReserve: true,
  }],
  startTime: "07:00:00",
  endTime: "21:00:00",
  location: {
    latitude: 47.6673973,
    longitude: -122.3459778,
  },
};

export const IngrahamHS: Park = {
  id: 1095,
  name: "Ingraham HS",
  courts: [{
    id: 1095,
    courtNo: "Court 1",
    canReserve: true,
  }, {
    id: 1096,
    courtNo: "Court 2",
    canReserve: true,
  }, {
    id: 1097,
    courtNo: "Court 3",
    canReserve: true,
  }, {
    id: 1098,
    courtNo: "Court 4",
    canReserve: true,
  }, {
    id: 2695,
    courtNo: "Court 5",
    canReserve: true,
  }, {
    id: 2696,
    courtNo: "Court 6",
    canReserve: true,
  }],
  startTime: "08:30:00",
  endTime: "23:15:00",
  location: {
    latitude: 47.726163,
    longitude: -122.3405642,
  },
};

export const GarfieldPlayfield: Park = {
  id: 1341,
  name: "Garfield Playfield",
  courts: [{
    id: 1341,
    courtNo: "Court 1",
    canReserve: false,
  }, {
    id: 1342,
    courtNo: "Court 2",
    canReserve: true,
  }],
  startTime: "06:00:00",
  endTime: "23:00:00",
};

export const VolunteerPark: Park = {
  id: 363,
  name: "Volunteer Park",
  courts: [{
    id: 363,
    courtNo: "Court 3 - Lower",
    canReserve: true,
  }, {
    id: 364,
    courtNo: "Court 4 - Lower",
    canReserve: true,
  }, {
    id: 365,
    courtNo: "Court 1 - Upper",
    canReserve: true,
  }, {
    id: 366,
    courtNo: "Court 2 - Upper",
    canReserve: false,
  }],
  startTime: "06:00:00",
  endTime: "22:00:00",
};

export const MadronaPlayground: Park = {
  id: 2279,
  name: "Madrona Playground",
  courts: [{
    id: 2279,
    courtNo: "Court 1",
    canReserve: false,
  }, {
    id: 2280,
    courtNo: "Court 2",
    canReserve: true,
  }],
  startTime: "06:00:00",
  endTime: "22:00:00",
};

export const SamSmithPark: Park = {
  id: 1391,
  name: "Sam Smith (I90 Lid) Park",
  courts: [{
    id: 1391,
    courtNo: "Court 1",
    canReserve: true,
  }, {
    id: 1392,
    courtNo: "Court 2",
    canReserve: false,
  }],
  startTime: "04:00:00",
  endTime: "23:30:00",
};

export const MontlakePlayfield: Park = {
  id: 1375,
  name: "Montlake Playfield",
  courts: [{
    id: 1375,
    courtNo: "Court 1",
    canReserve: false,
  }, {
    id: 1376,
    courtNo: "Court 2",
    canReserve: true,
  }],
  startTime: "04:00:00",
  endTime: "23:30:00",
};

export const RogersPlayfield: Park = {
  id: 1389,
  name: "Rogers Playfield",
  courts: [{
    id: 1389,
    courtNo: "Court 1",
    canReserve: true,
  }, {
    id: 1390,
    courtNo: "Court 2",
    canReserve: false,
  }],
  startTime: "08:30:00",
  endTime: "23:00:00",
};

export const AYTCOutdoor: Park = {
  id: 279,
  name: "AYTC Outdoor",
  courts: [{
    id: 279,
    courtNo: "Court 1",
    canReserve: true,
  }, {
    id: 280,
    courtNo: "Court 2",
    canReserve: true,
  }, {
    id: 281,
    courtNo: "Court 3",
    canReserve: true,
  }, {
    id: 282,
    courtNo: "Court 4",
    canReserve: true,
  }, {
    id: 283,
    courtNo: "Court 5",
    canReserve: true,
  }, {
    id: 284,
    courtNo: "Court 6",
    canReserve: true,
  }],
  startTime: "07:00:00",
  endTime: "21:00:00",
};

export const MadisonPark: Park = {
  id: 1359,
  name: "Madison Park",
  courts: [{
    id: 1359,
    courtNo: "Court 1",
    canReserve: true,
  }, {
    id: 1360,
    courtNo: "Court 2",
    canReserve: false,
  }],
  startTime: "04:00:00",
  endTime: "23:30:00",
};

export const ObservatoryPark: Park = {
  id: 1119,
  name: "Observatory Park",
  courts: [{
    id: 1119,
    courtNo: "Court 1",
    canReserve: false,
  }, {
    id: 1120,
    courtNo: "Court 2",
    canReserve: true,
  }],
  startTime: "08:30:00",
  endTime: "23:00:00",
};

export const DavidRodgersPark: Park = {
  id: 1330,
  name: "David Rodgers Park",
  courts: [{
    id: 1330,
    courtNo: "Court 1",
    canReserve: true,
  }, {
    id: 1331,
    courtNo: "Court 2",
    canReserve: true,
  }, {
    id: 1332,
    courtNo: "Court 3",
    canReserve: false,
  }],
  startTime: "04:00:00",
  endTime: "23:30:00",
};

export const JeffersonParkLid: Park = {
  id: 777,
  name: "Jefferson Park Lid",
  courts: [{
    id: 777,
    courtNo: "Court Upper 1",
    canReserve: true,
  }, {
    id: 778,
    courtNo: "Court Upper 2",
    canReserve: false,
  }, {
    id: 2277,
    courtNo: "Court Lower 1",
    canReserve: true,
  }, {
    id: 2278,
    courtNo: "Court Lower 2",
    canReserve: true,
  }],
  startTime: "07:00:00",
  endTime: "22:00:00",
};

export const WallingfordPlayfield: Park = {
  id: 1408,
  name: "Wallingford Playfield",
  courts: [{
    id: 1408,
    courtNo: "Court 1",
    canReserve: true,
  }, {
    id: 1409,
    courtNo: "Court 2",
    canReserve: false,
  }],
  startTime: "08:30:00",
  endTime: "23:00:00",
};

export const LaurelhurstPlayfield: Park = {
  id: 1353,
  name: "Laurelhurst Playfield",
  courts: [{
    id: 1353,
    courtNo: "Court 1",
    canReserve: true,
  }, {
    id: 1354,
    courtNo: "Court 2",
    canReserve: true,
  }, {
    id: 1355,
    courtNo: "Court 3",
    canReserve: true,
  }, {
    id: 1356,
    courtNo: "Court 4",
    canReserve: false,
  }],
  startTime: "07:00:00",
  endTime: "22:00:00",
};

export const RainierPlayfield: Park = {
  id: 1383,
  name: "Rainier Playfield",
  courts: [{
    id: 1383,
    courtNo: "Court 1",
    canReserve: true,
  }, {
    id: 1384,
    courtNo: "Court 2",
    canReserve: true,
  }, {
    id: 1385,
    courtNo: "Court 3",
    canReserve: true,
  }, {
    id: 1386,
    courtNo: "Court 4",
    canReserve: false,
  }],
  startTime: "07:00:00",
  endTime: "22:00:00",
};

export const SolsticePark: Park = {
  id: 1393,
  name: "Solstice Park",
  courts: [{
    id: 1393,
    courtNo: "Court 1",
    canReserve: true,
  }, {
    id: 1394,
    courtNo: "Court 2",
    canReserve: true,
  }, {
    id: 1395,
    courtNo: "Court 3",
    canReserve: true,
  }, {
    id: 1396,
    courtNo: "Court 4",
    canReserve: false,
  }, {
    id: 1397,
    courtNo: "Court 5",
    canReserve: false,
  }, {
    id: 1398,
    courtNo: "Court 6",
    canReserve: false,
  }],
  startTime: "07:00:00",
  endTime: "22:00:00",
};

export const PARKS: Park[] = [
  // Parks to show to in zitnr
  MillerPark,
  MountBakerPark,
  BeaconHillPlayfield,
  BitterLakePlayfield,
  RainierBeachPlayfield,
  MagnoliaPark,
  GreenLakeParkWest,
  GreenLakeParkEast,
  LowerWoodlandPlayfieldUpper,
  IngrahamHS,

  // Other Seattle parks
  GarfieldPlayfield,
  VolunteerPark,
  MadronaPlayground,
  SamSmithPark,
  MontlakePlayfield,
  RogersPlayfield,
  AYTCOutdoor,
  MadisonPark,
  ObservatoryPark,
  DavidRodgersPark,
  JeffersonParkLid,
  WallingfordPlayfield,
  LaurelhurstPlayfield,
  RainierPlayfield,
];

export const parksById: Record<number, Park> = PARKS.reduce((acc, park) => {
  acc[park.id] = park;
  return acc;
}, {});

export const courtsById : Record<number, CourtWithParkId> = PARKS.reduce((acc, park) => {
  park.courts.forEach((court) => {
    acc[court.id] = { ...court, parkId: park.id } as CourtWithParkId;
  });

  return acc;
}, {});
