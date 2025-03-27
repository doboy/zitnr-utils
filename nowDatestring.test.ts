import { nowDateString } from "./nowDateString";
import { DateTime } from "luxon";

describe("nowDateString", () => {
  it("should return the current date in 'yyyy-MM-dd' format for the 'America/Los_Angeles' timezone", () => {
    const expectedDate = DateTime.now()
      .setZone("America/Los_Angeles")
      .toFormat("yyyy-MM-dd");
    expect(nowDateString()).toBe(expectedDate);
  });
  });