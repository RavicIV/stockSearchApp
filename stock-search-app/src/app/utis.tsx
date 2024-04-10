import { APIKEY } from "./constants";
import { IStock } from "./types";

export const getStock = async function (
    stock: string
  ): Promise<IStock> {
    return await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stock}&interval=5min&apikey=${APIKEY}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data;
      });
  };
  