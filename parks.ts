import { Park } from "./types";

export const MillerPark: Park = {
  id: 1374,
  name: "Miller Playfield",
  courtIds: [1374],
  startTime: "07:00:00",
  endTime: "22:00:00",
  location: {
    latitude: 47.6207559,
    longitude: -122.3095551,
  },
};

export const MountBakerPark: Park = {
  id: 1378,
  name: "Mount Baker Park",
  courtIds: [1378],
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
  courtIds: [1319],
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
  courtIds: [1315, 1316, 1317],
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
  courtIds: [1379, 1380, 1381],
  startTime: "08:30:00",
  endTime: "23:00:00",
  location: {
    latitude: 47.5255442,
    longitude: -122.2757479,
  },
};

export const MagnoliaPark: Park = {
  id: 1362,
  name: "Magnolia Park",
  courtIds: [1362],
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
  courtIds: [181],
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
  courtIds: [2906, 2907, 2908],
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
  courtIds: [369, 370, 371],
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
  courtIds: [1095, 1096, 1097, 1098, 2695, 2696],
  startTime: "08:30:00",
  endTime: "23:15:00",
  location: {
    latitude: 47.726163,
    longitude: -122.3405642,
  },
};

export const PARKS: Park[] = [
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
];

export const parksById: Record<number, Park> = PARKS.reduce((acc, park) => {
  acc[park.id] = park;
  return acc;
}, {} as Record<number, Park>);
