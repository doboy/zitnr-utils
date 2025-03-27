export type Court = {
  id: number;
  name: string;
  courtNo: string;
};

export type Park = {
  id: number;
  name: string;
  courtIds: number[];
  startTime: string;
  endTime: string;
  location: {
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
