import { Park, TimeRange, TimeRangeWithOwner } from "./types";
import { GreenLakeParkEast, MillerPark, MountBakerPark } from "./parks";

export const combineTimes = (
  dateString: string,
  park: Park,
  unreservedTimes: TimeRange[],
  securedTimes: TimeRange[],
  courtId: number
): TimeRangeWithOwner[] => {
  const dayOfWeek = new Date(dateString).getUTCDay();
  const dayOfMonth = new Date(dateString).getUTCDate();
  const month = new Date(dateString).getUTCMonth() + 1;

  const result: TimeRangeWithOwner[] = [
    ...unreservedTimes.map((time) =>
      Object.assign({}, time, { owner: "not reserved" })
    ),
    ...securedTimes.map((time) => Object.assign({ owner: "z.i.t.n.r." }, time)),
  ];

  result.sort((a, b) => a.startTime.localeCompare(b.startTime));

  let lastEndTime = park.startTime;

  result.forEach((time) => {
    if (time.startTime > lastEndTime) {
      result.push({
        startTime: lastEndTime,
        endTime: time.startTime,
        owner: "other reservation(s)",
      });
    }
    lastEndTime = time.endTime > lastEndTime ? time.endTime : lastEndTime;
  });

  if (
    lastEndTime < park.endTime ||
    (park.endTime == "00:00:00" && lastEndTime < "24:00:00")
  ) {
    result.push({
      startTime: lastEndTime,
      endTime: park.endTime,
      owner: "other reservation(s)",
    });
  }

  result.sort((a, b) => a.startTime.localeCompare(b.startTime));

  return result;
};
