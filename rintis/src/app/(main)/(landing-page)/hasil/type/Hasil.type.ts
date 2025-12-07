export interface SuggestionItemType {
  insight: string;
  businesName: string;
  description: string;
  initialCapital: string;
  note?: string;
  details: SuggestionItemDetail[];
}

export interface SuggestionItemDetail {
  category: string;
  dailyTurnover: string;
  hpp: string;
  profit: string;
  note?: string;
}
