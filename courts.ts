import { Court } from "./types";

export const COURTS: Court[] = [
  {
    id: 1374,
    name: "Miller Playfield Tennis Court 02",
    courtNo: "Court 02",
    parkId: 1374,
  },
  {
    id: 1378,
    name: "Mount Baker Park Tennis Court 02",
    courtNo: "Court 02",
    parkId: 1378,
  },
  {
    id: 1319,
    name: "Beacon Hill Playfield Tennis Court 01",
    courtNo: "Court 01",
    parkId: 1319,
  },
  {
    id: 1315,
    name: "Bitter Lake Playfield Tennis Court 01",
    courtNo: "Court 01",
    parkId: 1315,
  },
  {
    id: 1316,
    name: "Bitter Lake Playfield Tennis Court 02",
    courtNo: "Court 02",
    parkId: 1315,
  },
  {
    id: 1317,
    name: "Bitter Lake Playfield Tennis Court 03",
    courtNo: "Court 03",
    parkId: 1315,
  },
  {
    id: 1379,
    name: "Rainier Beach Playfield Tennis Court 01",
    courtNo: "Court 01",
    parkId: 1379,
  },
  {
    id: 1380,
    name: "Rainier Beach Playfield Tennis Court 02",
    courtNo: "Court 02",
    parkId: 1379,
  },
  {
    id: 1381,
    name: "Rainier Beach Playfield Tennis Court 03",
    courtNo: "Court 03",
    parkId: 1379,
  },
  {
    id: 1362,
    name: "Magnolia Park Tennis Court 02",
    courtNo: "Court 02",
    parkId: 1362,
  },
  {
    id: 2906,
    name: "Green Lake Park East Pickleball Courts 01",
    courtNo: "Courts 01",
    parkId: 2906,
  },
  {
    id: 2907,
    name: "Green Lake Park East Pickleball Courts 02",
    courtNo: "Courts 02",
    parkId: 2906,
  },
  {
    id: 2908,
    name: "Green Lake Park East Pickleball Courts 03",
    courtNo: "Courts 03",
    parkId: 2906,
  },
  {
    id: 181,
    name: "Green Lake Park West Tennis Court 01",
    courtNo: "Court 01",
    parkId: 181,
  },
  {
    id: 369,
    name: "Lower Woodland Playfield Upper Court 01",
    courtNo: "Court 01",
    parkId: 369,
  },
  {
    id: 370,
    name: "Lower Woodland Playfield Upper Court 02",
    courtNo: "Court 02",
    parkId: 369,
  },
  {
    id: 371,
    name: "Lower Woodland Playfield Upper Court 03",
    courtNo: "Court 03",
    parkId: 369,
  },
  {
    id: 1095,
    name: "Ingraham HS Tennis Court 1",
    courtNo: "Court 01",
    parkId: 1095,
  },
  {
    id: 1096,
    name: "Ingraham HS Tennis Court 2",
    courtNo: "Court 02",
    parkId: 1095,
  },
  {
    id: 1097,
    name: "Ingraham HS Tennis Court 3",
    courtNo: "Court 03",
    parkId: 1095,
  },
  {
    id: 1098,
    name: "Ingraham HS Tennis Court 4",
    courtNo: "Court 04",
    parkId: 1095,
  },
  {
    id: 2695,
    name: "Ingraham HS Tennis Court 5",
    courtNo: "Court 05",
    parkId: 1095,
  },
  {
    id: 2696,
    name: "Ingraham HS Tennis Court 6",
    courtNo: "Court 06",
    parkId: 1095,
  },
];

export const courtsById: Record<number, Court> = COURTS.reduce((acc, court) => {
  acc[court.id] = court;
  return acc;
}, {} as Record<number, Court>);
