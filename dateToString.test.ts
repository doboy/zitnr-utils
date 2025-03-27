import { dateToString } from "./dateToString";

describe("dateToString", () => {
  it("should convert a date to Pacific Time and format it as YYYY-MM-DD", () => {
    const date = new Date("2023-03-15T15:00:00Z"); // UTC time
    expect(dateToString(date)).toBe("2023-03-15"); // Pacific Time (PDT)
  });

  it("should handle dates during Pacific Standard Time (PST)", () => {
    const date = new Date("2023-01-15T15:00:00Z"); // UTC time
    expect(dateToString(date)).toBe("2023-01-15"); // Pacific Time (PST)
  });

  it("should handle leap years correctly", () => {
    const date = new Date("2024-02-29T15:00:00Z"); // UTC time
    expect(dateToString(date)).toBe("2024-02-29"); // Pacific Time (PST)
  });

  it("should handle the transition from one day to the next in Pacific Time", () => {
    const date = new Date("2023-03-15T06:59:59Z"); // UTC time
    expect(dateToString(date)).toBe("2023-03-14"); // Pacific Time (PDT)
  });

  it("should handle edge cases for midnight in Pacific Time", () => {
    const date = new Date("2023-03-15T07:00:00Z"); // UTC time
    expect(dateToString(date)).toBe("2023-03-15"); // Pacific Time (PDT)
  });
});
