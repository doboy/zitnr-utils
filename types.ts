export type Court = {
  id: number;
  canReserve: boolean;
  courtNo: string;
};

export type CourtWithParkId = Court & {
  parkId: Park["id"];
};

export type Park = {
  id: number;
  name: string;
  slug: string;
  courts: Court[];
  startTime: string;
  endTime: string;
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
  times: Array<{
    TimeRangeWithUsage;
  }>;
}
