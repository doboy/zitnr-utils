import { dateToTime } from "./dateToTime";

describe("dateToTime", () => {
  it("should convert a date to Pacific Time in HH:mm:ss format", () => {
    const date = new Date("2023-03-15T15:00:00Z"); // UTC time
    expect(dateToTime(date)).toBe("08:00:00"); // Pacific Time (PDT)
  });

  it("should handle dates during Pacific Standard Time (PST)", () => {
    const date = new Date("2023-01-15T15:00:00Z"); // UTC time
    expect(dateToTime(date)).toBe("07:00:00"); // Pacific Time (PST)
  });

  it("should handle midnight in Pacific Time", () => {
    const date = new Date("2023-03-15T08:00:00Z"); // UTC time
    expect(dateToTime(date)).toBe("01:00:00"); // Pacific Time (PDT)
  });

  it("should handle edge cases for seconds and milliseconds", () => {
    const date = new Date("2023-03-15T15:00:59.999Z"); // UTC time
    expect(dateToTime(date)).toBe("08:00:59"); // Pacific Time (PDT)
  });

  it("should handle leap years correctly", () => {
    const date = new Date("2024-02-29T15:00:00Z"); // UTC time
    expect(dateToTime(date)).toBe("07:00:00"); // Pacific Time (PST)
  });
});
