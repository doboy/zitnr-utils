import { PARKS } from "./parks";

const COURTS_THAT_CANNOT_BE_RESERVED = [
  1373, 1377, 1341, 366, 2279, 1392, 1375, 1320, 1390, 1360, 1119, 1377, 1332, 778, 1409, 1356, 372, 1386, 353, 354, 361, 362, 1361, 1348, 1335, 1334, 1326, 1364, 1345, 183, 1340, 1324, 1147, 373, 1387, 1388, 1338, 1411, 1400, 1370, 1371, 1372, 1382, 1396, 1397, 1398, 1318
];

const COURT_ID_TO_NO = {
  '181': 'Court 1',
  '183': 'Court 2',
  '279': 'Court 1',
  '280': 'Court 2',
  '281': 'Court 3',
  '282': 'Court 4',
  '283': 'Court 5',
  '284': 'Court 6',
  '353': 'Court 1',
  '354': 'Court 2',
  '355': 'Court 3',
  '356': 'Court 4',
  '357': 'Court 5',
  '358': 'Court 6',
  '359': 'Court 7',
  '360': 'Court 8',
  '361': 'Court 9',
  '362': 'Court 10',
  '363': 'Court 3 - Lower',
  '364': 'Court 4 - Lower',
  '365': 'Court 1 - Upper',
  '366': 'Court 2 - Upper',
  '369': 'Court 1',
  '370': 'Court 2',
  '371': 'Court 3',
  '372': 'Court 4',
  '373': 'Court 1',
  '777': 'Court Upper 1',
  '778': 'Court Upper 2',
  '1089': 'Court 1',
  '1091': 'Court 2',
  '1092': 'Court 3',
  '1093': 'Court 4',
  '1095': 'Court 1',
  '1096': 'Court 2',
  '1097': 'Court 3',
  '1098': 'Court 4',
  '1119': 'Court 1',
  '1120': 'Court 2',
  '1146': 'Court 1',
  '1147': 'Court 2',
  '1315': 'Court 1',
  '1316': 'Court 2',
  '1317': 'Court 3',
  '1318': 'Court 4',
  '1319': 'Court 1',
  '1320': 'Court 2',
  '1323': 'Court 1',
  '1324': 'Court 2',
  '1325': 'Court 1',
  '1326': 'Court 2',
  '1330': 'Court 1',
  '1331': 'Court 2',
  '1332': 'Court 3',
  '1333': 'Court 1',
  '1334': 'Court 2',
  '1335': 'Court 1',
  '1336': 'Court 2',
  '1337': 'Court 1',
  '1338': 'Court 2',
  '1339': 'Court 1',
  '1340': 'Court 2',
  '1341': 'Court 1',
  '1342': 'Court 2',
  '1344': 'Court 1',
  '1345': 'Court 2',
  '1346': 'Court 1',
  '1347': 'Court 2',
  '1348': 'Court 3',
  '1353': 'Court 1',
  '1354': 'Court 2',
  '1355': 'Court 3',
  '1356': 'Court 4',
  '1359': 'Court 1',
  '1360': 'Court 2',
  '1361': 'Court 1',
  '1362': 'Court 2',
  '1363': 'Court 1',
  '1364': 'Court 2',
  '1365': 'Court 3',
  '1366': 'Court 4',
  '1367': 'Court 1',
  '1368': 'Court 2',
  '1369': 'Court 3',
  '1370': 'Court 4',
  '1371': 'Court 5',
  '1372': 'Court 6',
  '1373': 'Court 1',
  '1374': 'Court 2',
  '1375': 'Court 1',
  '1376': 'Court 2',
  '1377': 'Court 1',
  '1378': 'Court 2',
  '1379': 'Court 1',
  '1380': 'Court 2',
  '1381': 'Court 3',
  '1382': 'Court 4',
  '1383': 'Court 1',
  '1384': 'Court 2',
  '1385': 'Court 3',
  '1386': 'Court 4',
  '1387': 'Court 1',
  '1388': 'Court 2',
  '1389': 'Court 1',
  '1390': 'Court 2',
  '1391': 'Court 1',
  '1392': 'Court 2',
  '1393': 'Court 1',
  '1394': 'Court 2',
  '1395': 'Court 3',
  '1396': 'Court 4',
  '1397': 'Court 5',
  '1398': 'Court 6',
  '1399': 'Court 1',
  '1400': 'Court 2',
  '1408': 'Court 1',
  '1409': 'Court 2',
  '1410': 'Court 1',
  '1411': 'Court 2',
  '2277': 'Court Lower 1',
  '2278': 'Court Lower 2',
  '2279': 'Court 1',
  '2280': 'Court 2',
  '2281': 'Court 1',
  '2282': 'Court 2',
  '2283': 'Court 3',
  '2284': 'Court 4',
  '2285': 'Court 5',
  '2286': 'Court 6',
  '2437': 'Court 2',
  '2695': 'Court 5',
  '2696': 'Court 6',
  '2906': 'Court 1',
  '2907': 'Court 2',
  '2908': 'Court 3',
}

describe("COURTS_THAT_CANNOT_BE_RESERVED", () => {
  it("should have canReserve equal to false for all specified court IDs", () => {
    PARKS.forEach((park) => {
      park.courts.forEach((court) => {
        console.log(court);
        expect(court.canReserve).toBe(
          COURTS_THAT_CANNOT_BE_RESERVED.includes(court.id) ? false : true
        );  
      });
    });
  });
});

describe("COURT_ID_TO_NO", () => {
  it("should have a court number for each court ID", () => {
    PARKS.forEach((park) => {
      park.courts.forEach((court) => {
        expect(COURT_ID_TO_NO[court.id]).toBeDefined();
        expect(court.courtNo).toContain(
          COURT_ID_TO_NO[court.id]
        );
      });
    })
  });
});
