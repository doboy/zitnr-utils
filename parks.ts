import { CourtWithParkId, Park } from "./types";

export const MillerPark: Park = {
  id: 1373,
  name: "Miller Playfield",
  slug: "miller-playfield",
  courts: [
    {
      id: 1373,
      courtNo: "1",
      canReserve: false,
    },
    {
      id: 1374,
      courtNo: "2",
      canReserve: true,
    },
  ],
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
  slug: "mount-baker-park",
  courts: [
    {
      id: 1377,
      courtNo: "1",
      canReserve: false,
    },
    {
      id: 1378,
      courtNo: "2",
      canReserve: true,
    },
  ],
  startTime: "07:00:00",
  endTime: "22:00:00",
  weekendStartTime: "09:00:00",
  weekendEndTime: "22:00:00",
  location: {
    latitude: 47.5795238,
    longitude: -122.2910945,
  },
};

export const BeaconHillPlayfield: Park = {
  id: 1319,
  name: "Beacon Hill Playfield",
  slug: "beacon-hill-playfield",
  courts: [
    {
      id: 1319,
      courtNo: "1",
      canReserve: true,
    },
    {
      id: 1320,
      courtNo: "2",
      canReserve: false,
      startTime: "08:30:00",
      endTime: "21:00:00",
    },
  ],
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
  slug: "bitter-lake-playfield",
  courts: [
    {
      id: 1315,
      courtNo: "1",
      canReserve: true,
    },
    {
      id: 1316,
      courtNo: "2",
      canReserve: true,
    },
    {
      id: 1317,
      courtNo: "3",
      canReserve: true,
    },
    {
      id: 1318,
      courtNo: "4",
      canReserve: false,
    },
  ],
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
  slug: "rainier-beach-playfield",
  courts: [
    {
      id: 1379,
      courtNo: "1",
      canReserve: true,
    },
    {
      id: 1380,
      courtNo: "2",
      canReserve: true,
    },
    {
      id: 1381,
      courtNo: "3",
      canReserve: true,
    },
    {
      id: 1382,
      courtNo: "4",
      canReserve: false,
    },
  ],
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
  slug: "magnolia-park",
  courts: [
    {
      id: 1361,
      courtNo: "1",
      canReserve: false,
    },
    {
      id: 1362,
      courtNo: "2",
      canReserve: true,
    },
  ],
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
  slug: "green-lake-park-west",
  courts: [
    {
      id: 181,
      courtNo: "1",
      canReserve: true,
    },
    {
      id: 183,
      courtNo: "2",
      canReserve: false,
    },
  ],
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
  slug: "green-lake-park-east",
  courts: [
    {
      id: 2906,
      courtNo: "1",
      canReserve: true,
    },
    {
      id: 2907,
      courtNo: "2",
      canReserve: true,
    },
    {
      id: 2908,
      courtNo: "3",
      canReserve: true,
    },
  ],
  startTime: "07:00:00",
  endTime: "21:00:00",
  location: {
    latitude: 47.6799735,
    longitude: -122.3498842,
  },
};

export const LowerWoodlandPlayfield: Park = {
  id: 353,
  name: "Lower Woodland Playfield",
  slug: "lower-woodland-playfield",
  courts: [
    {
      id: 353,
      courtNo: "1",
      canReserve: false,
    },
    {
      id: 354,
      courtNo: "2",
      canReserve: false,
    },
    {
      id: 355,
      courtNo: "3",
      canReserve: true,
    },
    {
      id: 356,
      courtNo: "4",
      canReserve: true,
    },
    {
      id: 357,
      courtNo: "5",
      canReserve: true,
    },
    {
      id: 358,
      courtNo: "6",
      canReserve: true,
    },
    {
      id: 359,
      courtNo: "7",
      canReserve: true,
    },
    {
      id: 360,
      courtNo: "8",
      canReserve: true,
    },
    {
      id: 361,
      courtNo: "9",
      canReserve: false,
    },
    {
      id: 362,
      courtNo: "10",
      canReserve: false,
    },
  ],
  startTime: "07:00:00",
  endTime: "22:00:00",
  location: {
    latitude: 47.6673973,
    longitude: -122.3459778,
  },
};

export const LowerWoodlandPlayfieldTennis: Park = {
  id: 369,
  name: "Lower Woodland Playfield Tennis",
  slug: "lower-woodland-playfield-tennis",
  courts: [
    {
      id: 369,
      courtNo: "1",
      canReserve: true,
    },
    {
      id: 370,
      courtNo: "2",
      canReserve: true,
    },
    {
      id: 371,
      courtNo: "3",
      canReserve: true,
    },
    {
      id: 372,
      courtNo: "4",
      canReserve: false,
    },
  ],
  startTime: "07:00:00",
  endTime: "21:00:00",
};

export const IngrahamHS: Park = {
  id: 1095,
  name: "Ingraham HS",
  slug: "ingraham-hs",
  courts: [
    {
      id: 1095,
      courtNo: "1",
      canReserve: true,
    },
    {
      id: 1096,
      courtNo: "2",
      canReserve: true,
    },
    {
      id: 1097,
      courtNo: "3",
      canReserve: true,
    },
    {
      id: 1098,
      courtNo: "4",
      canReserve: true,
    },
    {
      id: 2695,
      courtNo: "5",
      canReserve: true,
    },
    {
      id: 2696,
      courtNo: "6",
      canReserve: true,
    },
  ],
  startTime: "10:30:00",
  endTime: "22:15:00",
  location: {
    latitude: 47.726163,
    longitude: -122.3405642,
  },
};

export const GarfieldPlayfield: Park = {
  id: 1341,
  name: "Garfield Playfield",
  slug: "garfield-playfield",
  courts: [
    {
      id: 1341,
      courtNo: "1",
      canReserve: false,
    },
    {
      id: 1342,
      courtNo: "2",
      canReserve: true,
    },
  ],
  startTime: "06:00:00",
  endTime: "23:00:00",
};

export const VolunteerPark: Park = {
  id: 363,
  name: "Volunteer Park",
  slug: "volunteer-park",
  courts: [
    {
      id: 363,
      courtNo: "3 - Lower",
      canReserve: true,
    },
    {
      id: 364,
      courtNo: "4 - Lower",
      canReserve: true,
    },
    {
      id: 365,
      courtNo: "1 - Upper",
      canReserve: true,
    },
    {
      id: 366,
      courtNo: "2 - Upper",
      canReserve: false,
    },
  ],
  startTime: "06:00:00",
  endTime: "22:00:00",
};

export const MadronaPlayground: Park = {
  id: 2279,
  name: "Madrona Playground",
  slug: "madrona-playground",
  courts: [
    {
      id: 2279,
      courtNo: "1",
      canReserve: false,
    },
    {
      id: 2280,
      courtNo: "2",
      canReserve: true,
    },
  ],
  startTime: "06:00:00",
  endTime: "22:00:00",
};

export const SamSmithPark: Park = {
  id: 1391,
  name: "Sam Smith (I90 Lid) Park",
  slug: "sam-smith-park",
  courts: [
    {
      id: 1391,
      courtNo: "1",
      canReserve: true,
    },
    {
      id: 1392,
      courtNo: "2",
      canReserve: false,
    },
  ],
  startTime: "04:00:00",
  endTime: "23:30:00",
};

export const MontlakePlayfield: Park = {
  id: 1375,
  name: "Montlake Playfield",
  slug: "montlake-playfield",
  courts: [
    {
      id: 1375,
      courtNo: "1",
      canReserve: false,
    },
    {
      id: 1376,
      courtNo: "2",
      canReserve: true,
    },
  ],
  startTime: "04:00:00",
  endTime: "23:30:00",
};

export const RogersPlayfield: Park = {
  id: 1389,
  name: "Rogers Playfield",
  slug: "rogers-playfield",
  courts: [
    {
      id: 1389,
      courtNo: "1",
      canReserve: true,
    },
    {
      id: 1390,
      courtNo: "2",
      canReserve: false,
    },
  ],
  startTime: "08:30:00",
  endTime: "23:00:00",
};

export const AYTCOutdoor: Park = {
  id: 279,
  name: "AYTC Outdoor",
  slug: "aytc-outdoor",
  courts: [
    {
      id: 279,
      courtNo: "1",
      canReserve: true,
    },
    {
      id: 280,
      courtNo: "2",
      canReserve: true,
    },
    {
      id: 281,
      courtNo: "3",
      canReserve: true,
    },
    {
      id: 282,
      courtNo: "4",
      canReserve: true,
    },
    {
      id: 283,
      courtNo: "5",
      canReserve: true,
    },
    {
      id: 284,
      courtNo: "6",
      canReserve: true,
    },
  ],
  startTime: "07:00:00",
  endTime: "21:00:00",
};

export const MadisonPark: Park = {
  id: 1359,
  name: "Madison Park",
  slug: "madison-park",
  courts: [
    {
      id: 1359,
      courtNo: "1",
      canReserve: true,
    },
    {
      id: 1360,
      courtNo: "2",
      canReserve: false,
    },
  ],
  startTime: "04:00:00",
  endTime: "23:30:00",
};

export const ObservatoryPark: Park = {
  id: 1119,
  name: "Observatory Park",
  slug: "observatory-park",
  courts: [
    {
      id: 1119,
      courtNo: "1",
      canReserve: false,
    },
    {
      id: 1120,
      courtNo: "2",
      canReserve: true,
    },
  ],
  startTime: "08:30:00",
  endTime: "23:00:00",
};

export const DavidRodgersPark: Park = {
  id: 1330,
  name: "David Rodgers Park",
  slug: "david-rodgers-park",
  courts: [
    {
      id: 1330,
      courtNo: "1",
      canReserve: true,
    },
    {
      id: 1331,
      courtNo: "2",
      canReserve: true,
    },
    {
      id: 1332,
      courtNo: "3",
      canReserve: false,
    },
  ],
  startTime: "04:00:00",
  endTime: "23:30:00",
};

export const JeffersonParkLid: Park = {
  id: 777,
  name: "Jefferson Park Lid",
  slug: "jefferson-park-lid",
  courts: [
    {
      id: 777,
      courtNo: "Upper 1",
      canReserve: true,
    },
    {
      id: 778,
      courtNo: "Upper 2",
      canReserve: false,
    },
    {
      id: 2277,
      courtNo: "Lower 1",
      canReserve: true,
    },
    {
      id: 2278,
      courtNo: "Lower 2",
      canReserve: true,
    },
  ],
  startTime: "07:00:00",
  endTime: "22:00:00",
};

export const WallingfordPlayfield: Park = {
  id: 1408,
  name: "Wallingford Playfield",
  slug: "wallingford-playfield",
  courts: [
    {
      id: 1408,
      courtNo: "1",
      canReserve: true,
    },
    {
      id: 1409,
      courtNo: "2",
      canReserve: false,
    },
  ],
  startTime: "08:30:00",
  endTime: "23:00:00",
};

export const LaurelhurstPlayfield: Park = {
  id: 1353,
  name: "Laurelhurst Playfield",
  slug: "laurelhurst-playfield",
  courts: [
    {
      id: 1353,
      courtNo: "1",
      canReserve: true,
    },
    {
      id: 1354,
      courtNo: "2",
      canReserve: true,
    },
    {
      id: 1355,
      courtNo: "3",
      canReserve: true,
    },
    {
      id: 1356,
      courtNo: "4",
      canReserve: false,
    },
  ],
  startTime: "07:00:00",
  endTime: "22:00:00",
};

export const RainierPlayfield: Park = {
  id: 1383,
  name: "Rainier Playfield",
  slug: "rainier-playfield",
  courts: [
    {
      id: 1383,
      courtNo: "1",
      canReserve: true,
    },
    {
      id: 1384,
      courtNo: "2",
      canReserve: true,
    },
    {
      id: 1385,
      courtNo: "3",
      canReserve: true,
    },
    {
      id: 1386,
      courtNo: "4",
      canReserve: false,
    },
  ],
  startTime: "07:00:00",
  endTime: "22:00:00",
};

export const SolsticePark: Park = {
  id: 1393,
  name: "Solstice Park",
  slug: "solstice-park",
  courts: [
    {
      id: 1393,
      courtNo: "1",
      canReserve: true,
    },
    {
      id: 1394,
      courtNo: "2",
      canReserve: true,
    },
    {
      id: 1395,
      courtNo: "3",
      canReserve: true,
    },
    {
      id: 1396,
      courtNo: "4",
      canReserve: false,
    },
    {
      id: 1397,
      courtNo: "5",
      canReserve: false,
    },
    {
      id: 1398,
      courtNo: "6",
      canReserve: false,
    },
  ],
  startTime: "07:00:00",
  endTime: "22:00:00",
};

export const HiawathaPlayfield: Park = {
  id: 1346,
  name: "Hiawatha Playfield",
  slug: "hiawatha-playfield",
  courts: [
    {
      id: 1346,
      courtNo: "1",
      canReserve: true,
    },
    {
      id: 1347,
      courtNo: "2",
      canReserve: true,
    },
    {
      id: 1348,
      courtNo: "3",
      canReserve: false,
    },
  ],
  startTime: "08:30:00",
  endTime: "23:00:00",
};

export const DelridgePlayfield: Park = {
  id: 1335,
  name: "Delridge Playfield",
  slug: "delridge-playfield",
  courts: [
    {
      id: 1335,
      courtNo: "1",
      canReserve: false,
    },
    {
      id: 1336,
      courtNo: "2",
      canReserve: true,
    },
  ],
  startTime: "08:00:00",
  endTime: "23:00:00",
};

export const DearbornPark: Park = {
  id: 1333,
  name: "Dearborn Park",
  slug: "dearborn-park",
  courts: [
    {
      id: 1333,
      courtNo: "1",
      canReserve: true,
    },
    {
      id: 1334,
      courtNo: "2",
      canReserve: false,
    },
  ],
  startTime: "04:00:00",
  endTime: "23:30:00",
};

export const BryantPlayground: Park = {
  id: 1325,
  name: "Bryant Playground",
  slug: "bryant-playground",
  courts: [
    {
      id: 1325,
      courtNo: "1",
      canReserve: true,
    },
    {
      id: 1326,
      courtNo: "2",
      canReserve: false,
    },
  ],
  startTime: "07:00:00",
  endTime: "21:00:00",
};

export const AlkiPlayfield: Park = {
  id: 1146,
  name: "Alki Playfield",
  slug: "alki-playfield",
  courts: [
    {
      id: 1146,
      courtNo: "1",
      canReserve: true,
    },
    {
      id: 1147,
      courtNo: "2",
      canReserve: false,
    },
  ],
  startTime: "08:30:00",
  endTime: "23:00:00",
};

export const BallardHS: Park = {
  id: 1089,
  name: "Ballard HS",
  slug: "ballard-hs",
  courts: [
    {
      id: 1089,
      courtNo: "1",
      canReserve: true,
    },
    {
      id: 1091,
      courtNo: "2",
      canReserve: true,
    },
    {
      id: 1092,
      courtNo: "3",
      canReserve: true,
    },
    {
      id: 1093,
      courtNo: "4",
      canReserve: true,
    },
  ],
  startTime: "08:30:00",
  endTime: "21:00:00",
};

export const SewardPark: Park = {
  id: 373,
  name: "Seward Park",
  slug: "seward-park",
  courts: [
    {
      id: 373,
      courtNo: "1",
      canReserve: false,
    },
    {
      id: 2437,
      courtNo: "2",
      canReserve: true,
    },
  ],
  startTime: "06:00:00",
  endTime: "22:00:00",
};

export const RiverviewPlayfield: Park = {
  id: 1387,
  name: "Riverview Playfield",
  slug: "riverview-playfield",
  courts: [
    {
      id: 1387,
      courtNo: "1",
      canReserve: false,
    },
    {
      id: 1388,
      courtNo: "2",
      canReserve: false,
    },
  ],
  startTime: "06:00:00",
  endTime: "22:00:00",
};

export const DiscoveryPark: Park = {
  id: 1337,
  name: "Discovery Park",
  slug: "discovery-park",
  courts: [
    {
      id: 1337,
      courtNo: "1",
      canReserve: true,
    },
    {
      id: 1338,
      courtNo: "2",
      canReserve: false,
    },
  ],
  startTime: "04:00:00",
  endTime: "23:30:00",
};

export const SealthHSComplex: Park = {
  id: 2281,
  name: "Sealth HS Complex",
  slug: "sealth-hs-complex",
  courts: [
    {
      id: 2281,
      courtNo: "1",
      canReserve: true,
    },
    {
      id: 2282,
      courtNo: "2",
      canReserve: true,
    },
    {
      id: 2283,
      courtNo: "3",
      canReserve: true,
    },
    {
      id: 2284,
      courtNo: "4",
      canReserve: true,
    },
    {
      id: 2285,
      courtNo: "5",
      canReserve: true,
    },
    {
      id: 2286,
      courtNo: "6",
      canReserve: true,
    },
  ],
  startTime: "08:30:00",
  endTime: "21:00:00",
};

export const MeadowbrookPlayfield: Park = {
  id: 1367,
  name: "Meadowbrook Playfield",
  slug: "meadowbrook-playfield",
  courts: [
    {
      id: 1367,
      courtNo: "1",
      canReserve: true,
    },
    {
      id: 1368,
      courtNo: "2",
      canReserve: true,
    },
    {
      id: 1369,
      courtNo: "3",
      canReserve: true,
    },
    {
      id: 1370,
      courtNo: "4",
      canReserve: false,
    },
    {
      id: 1371,
      courtNo: "5",
      canReserve: false,
    },
    {
      id: 1372,
      courtNo: "6",
      canReserve: false,
    },
  ],
  startTime: "07:00:00",
  endTime: "22:00:00",
};

export const WaltHundleyPlayfield: Park = {
  id: 1410,
  name: "Walt Hundley Playfield",
  slug: "walt-hundley-playfield",
  courts: [
    {
      id: 1410,
      courtNo: "1",
      canReserve: true,
    },
    {
      id: 1411,
      courtNo: "2",
      canReserve: false,
    },
  ],
  startTime: "08:30:00",
  endTime: "23:00:00",
};

export const SoundviewPlayfield: Park = {
  id: 1399,
  name: "Soundview Playfield",
  slug: "soundview-playfield",
  courts: [
    {
      id: 1399,
      courtNo: "1",
      canReserve: true,
    },
    {
      id: 1400,
      courtNo: "2",
      canReserve: false,
    },
  ],
  startTime: "08:30:00",
  endTime: "23:00:00",
};

export const MagnoliaPlayfield: Park = {
  id: 1363,
  name: "Magnolia Playfield",
  slug: "magnolia-playfield",
  courts: [
    {
      id: 1363,
      courtNo: "1",
      canReserve: true,
    },
    {
      id: 1364,
      courtNo: "2",
      canReserve: false,
    },
    {
      id: 1365,
      courtNo: "3",
      canReserve: true,
    },
    {
      id: 1366,
      courtNo: "4",
      canReserve: true,
    },
  ],
  startTime: "08:30:00",
  endTime: "23:00:00",
};

export const GilmanPlayfield: Park = {
  id: 1344,
  name: "Gilman Playfield",
  slug: "gilman-playfield",
  courts: [
    {
      id: 1344,
      courtNo: "1",
      canReserve: true,
    },
    {
      id: 1345,
      courtNo: "2",
      canReserve: false,
    },
  ],
  startTime: "08:30:00",
  endTime: "23:00:00",
};

export const FroulaPlayground: Park = {
  id: 1339,
  name: "Froula Playground",
  slug: "froula-playground",
  courts: [
    {
      id: 1339,
      courtNo: "1",
      canReserve: true,
    },
    {
      id: 1340,
      courtNo: "2",
      canReserve: false,
    },
  ],
  startTime: "07:00:00",
  endTime: "21:00:00",
};

export const BrightonPlayfield: Park = {
  id: 1323,
  name: "Brighton Playfield",
  slug: "brighton-playfield",
  courts: [
    {
      id: 1323,
      courtNo: "1",
      canReserve: true,
    },
    {
      id: 1324,
      courtNo: "2",
      canReserve: false,
    },
  ],
  startTime: "06:00:00",
  endTime: "23:00:00",
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
  LowerWoodlandPlayfield,
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
  HiawathaPlayfield,
  SolsticePark,
  DelridgePlayfield,
  DearbornPark,
  BryantPlayground,
  AlkiPlayfield,
  BallardHS,
  SewardPark,
  RiverviewPlayfield,
  DiscoveryPark,
  SealthHSComplex,
  MeadowbrookPlayfield,
  WaltHundleyPlayfield,
  SoundviewPlayfield,
  MagnoliaPlayfield,
  GilmanPlayfield,
  FroulaPlayground,
  BrightonPlayfield,
  LowerWoodlandPlayfieldTennis,
];

export const parksById: Record<number, Park> = PARKS.reduce((acc, park) => {
  acc[park.id] = park;
  return acc;
}, {});

export const courtsById: Record<number, CourtWithParkId> = PARKS.reduce(
  (acc, park) => {
    park.courts.forEach((court) => {
      acc[court.id] = { ...court, parkId: park.id } as CourtWithParkId;
    });

    return acc;
  },
  {}
);
