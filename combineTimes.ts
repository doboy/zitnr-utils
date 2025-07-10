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
  const month = new Date(dateString).getUTCMonth() + 1;

  const result: TimeRangeWithOwner[] = [
    ...unreservedTimes.map((time) =>
      Object.assign({}, time, { owner: "not reserved" })
    ),
    ...securedTimes.map((time) => Object.assign({ owner: "z.i.t.n.r." }, time)),
  ];

  if (
    park.id == MillerPark.id &&
    (dayOfWeek == 1 || dayOfWeek == 3 || dayOfWeek == 5)
  ) {
    result.push({
      startTime: "10:00:00",
      endTime: "12:00:00",
      owner: "LifeLong Recreation",
    });
  }

  if (park.id == MountBakerPark.id && (dayOfWeek == 2 || dayOfWeek == 4)) {
    result.push({
      startTime: "10:00:00",
      endTime: "12:00:00",
      owner: "LifeLong Recreation",
    });
  }

  if (
    park.id == GreenLakeParkEast.id &&
    month == 7 &&
    (courtId == park.courts[0].id || courtId == park.courts[2].id)
  ) {
    if (
      dayOfWeek == 1 ||
      dayOfWeek == 2 ||
      dayOfWeek == 3 ||
      dayOfWeek == 4 ||
      dayOfWeek == 5
    ) {
      result.push({
        startTime: "17:30:00",
        endTime: "20:15:00",
        owner: "GLP",
      });
    }

    if (dayOfWeek == 3) {
      result.push({
        startTime: "15:00:00",
        endTime: "17:29:00",
        owner: "GLP",
      });
    }

    if (dayOfWeek == 6 || dayOfWeek == 0) {
      result.push({
        startTime: "10:00:00",
        endTime: "14:00:00",
        owner: "GLP",
      });
    }
  }

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
