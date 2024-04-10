export interface IInputField {
  name: string;
  type: string;
  value: string;
  title: string;
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IStock {
  "Meta Data": {
    Information: string;
    Symbol: string;
    "Last Refreshed": string;
    Interval: string;
    "Output Size": string;
    "Time Zone": string;
  };
  "Time Series (5min)": {
    "2024-04-09 19:55:00": {
      open: string;
      high: string;
      low: string;
      close: string;
      volume: string;
    };
  };
}
