export type AuditStateType = "0" | "1" | "2" | "3" | string; //审核状态值

export interface ISResponeInfo {
  code: number;
  info: string;
}
export interface ISResponeRecord<T> extends ISResponeInfo {
  record: T;
}
export interface ISResponeItems<T> extends ISResponeInfo {
  items: T[];
}

type ISMistakeStatisticType = {
  [key in AuditStateType]: number;
};
export interface ISMistakeStatistic extends ISMistakeStatisticType {}

export interface ISDistrict {
  name: string;
  pac: string;
}
