export type Court = {
  id: number;
  canReserve: boolean;
  courtNo: string;
  // These are start times and end times for courts that have different hours than the park they belong to
  startTime?: string;
  endTime?: string;
};

export type CourtWithParkId = Court & {
  parkId: Park["id"];
};

export type Park = {
  id: number;
  name: string;
  slug: string;
  address: string;
  comments: string;
  courts: Court[];
  startTime: string;
  endTime: string;
  weekendStartTime?: string;
  weekendEndTime?: string;
  location?: {
    latitude: number;
    longitude: number;
  };
};

export interface TimeRange {
  startTime: string;
  endTime: string;
}

export interface TimeRangeWithOwner extends TimeRange {
  owner: string;
}

export interface TimeRangeWithUsage extends TimeRange {
  use: "pickleball" | "tennis" | "schools" | "other";
}

export interface SecuredDoc {
  times: Array<TimeRangeWithOwner>;
}

export interface UnreservedDoc {
  id?: string;
  date: string;
  parkId: number;
  courtId: number;
  times: Array<TimeRange>;
}

export interface ReservationDoc {
  times: Array<TimeRangeWithUsage>;
}
