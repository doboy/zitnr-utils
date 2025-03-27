/**
 * Converts the current date and time in the Pacific Time Zone (America/Los_Angeles)
 * to a string formatted as `YYYY-MM-DD`.
 *
 * @returns {string} The formatted date string in the format `YYYY-MM-DD`.
 */
export const dateToString = (date: Date) => {
  const pacificTime = date.toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
  });
  const [month, day, year] = new Date(pacificTime)
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};
