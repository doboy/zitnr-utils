import { combineTimes } from "./combineTimes";
import { GreenLakeParkWest, MillerPark, MountBakerPark } from "./parks";

describe("combineTimes", () => {
  it("should handle gaps between unreserved times and fill with other reservations", () => {
    expect(
      combineTimes(
        MillerPark,
        [
          { startTime: "08:00:00", endTime: "09:00:00" },
          { startTime: "10:00:00", endTime: "11:00:00" },
        ],
        [],
      )
    ).toEqual([
      {
        startTime: "07:00:00",
        endTime: "08:00:00",
        owner: "other reservation(s)",
        use: 'other',
      },
      {
        startTime: "08:00:00",
        endTime: "09:00:00",
        owner: "not reserved",
        use: 'other',
      },
      {
        startTime: "09:00:00",
        endTime: "10:00:00",
        owner: "other reservation(s)",
        use: 'other',
      },
      {
        startTime: "10:00:00",
        endTime: "11:00:00",
        owner: "not reserved",
        use: 'other',
      },
      {
        startTime: "11:00:00",
        endTime: "22:00:00",
        owner: "other reservation(s)",
        use: 'other',
      },
    ]);
  });

  it("should handle no unreserved or secured times", () => {
    expect(
      combineTimes(MillerPark, [], [])
    ).toEqual([
      {
        startTime: "07:00:00",
        endTime: "22:00:00",
        owner: "other reservation(s)",
        use: 'other',
      },
    ]);
  });

  it("should handle secured times spanning the entire park hours", () => {
    expect(
      combineTimes(
        MillerPark,
        [],
        [{ startTime: "07:00:00", endTime: "22:00:00", owner: 'z.i.t.n.r.', use: 'pickleball' }],
      )
    ).toEqual([
      {
        startTime: "07:00:00",
        endTime: "22:00:00",
        owner: "z.i.t.n.r.",
        use: 'pickleball',
      },
    ]);
  });

  it("should handle unreserved times for GreenLakeParkWest", () => {
    expect(
      combineTimes(
        GreenLakeParkWest,
        [
          { startTime: "08:00:00", endTime: "09:00:00" },
          { startTime: "12:00:00", endTime: "13:00:00" },
        ],
        [],
      )
    ).toEqual([
      {
        startTime: "00:00:00",
        endTime: "08:00:00",
        owner: "other reservation(s)",
        use: 'other',
      },
      {
        startTime: "08:00:00",
        endTime: "09:00:00",
        owner: "not reserved",
        use: 'other',
      },
      {
        startTime: "09:00:00",
        endTime: "12:00:00",
        owner: "other reservation(s)",
        use: 'other',
      },
      {
        startTime: "12:00:00",
        endTime: "13:00:00",
        owner: "not reserved",
        use: 'other',
      },
      {
        startTime: "13:00:00",
        endTime: "00:00:00",
        owner: "other reservation(s)",
        use: 'other',
      },
    ]);
  });
});
