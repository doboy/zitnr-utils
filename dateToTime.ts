/**
 * Converts a given date to a time string in the "America/Los_Angeles" timezone (Pacific Time).
 *
 * @param date - The date object to be converted.
 * @returns A string representing the time in HH:mm:ss format in Pacific Time.
 */
export const dateToTime = (date: Date) => {
  const pacificTime = date.toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    hour12: false,
  });
  return new Date(pacificTime).toTimeString().split(" ")[0];
};
