import { combineTimes } from "./combineTimes";
import { GreenLakeParkWest, MillerPark, MountBakerPark } from "./parks";

describe("combineTimes", () => {
  it("should include LifeLong Recreation times for Miller Park on Monday", () => {
    expect(combineTimes("2025-03-24", MillerPark, [], [])).toEqual([
      {
        startTime: "07:00:00",
        endTime: "10:00:00",
        owner: "other reservation(s)",
      },
      {
        startTime: "10:00:00",
        endTime: "12:00:00",
        owner: "LifeLong Recreation",
      },
      {
        startTime: "12:00:00",
        endTime: "22:00:00",
        owner: "other reservation(s)",
      },
    ]);
  });

  it("should include LifeLong Recreation times for Mount Baker Park on Tuesday", () => {
    expect(combineTimes("2025-03-25", MountBakerPark, [], [])).toEqual([
      {
        startTime: "06:00:00",
        endTime: "10:00:00",
        owner: "other reservation(s)",
      },
      {
        startTime: "10:00:00",
        endTime: "12:00:00",
        owner: "LifeLong Recreation",
      },
      {
        startTime: "12:00:00",
        endTime: "22:00:00",
        owner: "other reservation(s)",
      },
    ]);
  });

  it("should handle gaps between unreserved times and fill with other reservations", () => {
    expect(
      combineTimes(
        "2025-03-25",
        MillerPark,
        [
          { startTime: "08:00:00", endTime: "09:00:00" },
          { startTime: "10:00:00", endTime: "11:00:00" },
        ],
        []
      )
    ).toEqual([
      {
        startTime: "07:00:00",
        endTime: "08:00:00",
        owner: "other reservation(s)",
      },
      {
        startTime: "08:00:00",
        endTime: "09:00:00",
        owner: "not reserved",
      },
      {
        startTime: "09:00:00",
        endTime: "10:00:00",
        owner: "other reservation(s)",
      },
      {
        startTime: "10:00:00",
        endTime: "11:00:00",
        owner: "not reserved",
      },
      {
        startTime: "11:00:00",
        endTime: "22:00:00",
        owner: "other reservation(s)",
      },
    ]);
  });

  it("should handle no unreserved or secured times", () => {
    expect(combineTimes("2025-03-25", MillerPark, [], [])).toEqual([
      {
        startTime: "07:00:00",
        endTime: "22:00:00",
        owner: "other reservation(s)",
      },
    ]);
  });

  it("should handle secured times spanning the entire park hours", () => {
    expect(
      combineTimes(
        "2025-03-25",
        MillerPark,
        [],
        [{ startTime: "07:00:00", endTime: "22:00:00" }]
      )
    ).toEqual([
      {
        startTime: "07:00:00",
        endTime: "22:00:00",
        owner: "z.i.t.n.r.",
      },
    ]);
  });

  it("should handle unreserved times for GreenLakeParkWest", () => {
    expect(
      combineTimes(
        "2025-03-26",
        GreenLakeParkWest,
        [
          { startTime: "08:00:00", endTime: "09:00:00" },
          { startTime: "12:00:00", endTime: "13:00:00" },
        ],
        []
      )
    ).toEqual([
      {
        startTime: "00:00:00",
        endTime: "08:00:00",
        owner: "other reservation(s)",
      },
      {
        startTime: "08:00:00",
        endTime: "09:00:00",
        owner: "not reserved",
      },
      {
        startTime: "09:00:00",
        endTime: "12:00:00",
        owner: "other reservation(s)",
      },
      {
        startTime: "12:00:00",
        endTime: "13:00:00",
        owner: "not reserved",
      },
      {
        startTime: "13:00:00",
        endTime: "00:00:00",
        owner: "other reservation(s)",
      },
    ]);
  });
});
