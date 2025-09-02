import {
  Park,
  TimeRange,
  TimeRangeWithOwner,
  TimeRangeWithUsage,
} from "./types";

export const combineTimes = (
  park: Park,
  unreservedTimes: TimeRange[],
  securedTimes: TimeRangeWithOwner[],
  reservations: TimeRangeWithUsage[]
): TimeRangeWithOwner[] => {
  const reservationsMinusSecured = reservations.filter((resevation) => {
    return !securedTimes.some((time) => time.startTime == resevation.startTime);
  });

  const result: TimeRangeWithOwner[] = [
    ...unreservedTimes.map(
      (time) =>
        Object.assign({}, time, { owner: "not reserved" }) as TimeRangeWithOwner
    ),
    ...securedTimes.map(
      (time) =>
        Object.assign({ owner: "z.i.t.n.r." }, time) as TimeRangeWithOwner
    ),
    ...reservationsMinusSecured.map(
      (time) =>
        Object.assign({
          owner:
            time.use === "pickleball"
              ? "pickleball reservation"
              : time.use === "tennis"
              ? "tennis reservation"
              : time.use === "schools"
              ? "school reservation"
              : "other reservation",
          startTime: time.startTime,
          endTime: time.endTime,
        }) as TimeRangeWithOwner
    ),
  ];

  result.sort((a, b) => a.startTime.localeCompare(b.startTime));

  let prevEndTime = park.startTime;

  result.forEach((time) => {
    if (time.startTime > prevEndTime) {
      result.push({
        startTime: prevEndTime,
        endTime: time.startTime,
        owner: "other reservation(s)",
      });
    }
    prevEndTime = time.endTime > prevEndTime ? time.endTime : prevEndTime;
  });

  if (
    prevEndTime < park.endTime ||
    (park.endTime == "00:00:00" && prevEndTime < "24:00:00")
  ) {
    result.push({
      startTime: prevEndTime,
      endTime: park.endTime,
      owner: "other reservation(s)",
    });
  }

  result.sort((a, b) => a.startTime.localeCompare(b.startTime));

  return result;
};
