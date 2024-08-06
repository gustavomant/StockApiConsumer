import axios from "axios";
import StockData from "../domain/StockData";
import { symbols } from "../data/symbols";

const URL = 'https://api.twelvedata.com/';
//não esqueci a chave secreta aqui, apenas achei mais simples deixar pois é um reposiório que logo tirarei do ar. E deixa-la aqui não me prejudica em nada
const TWELVE_DATA_API_KEY = '372f05f89ae14b61b7e8a476e9c5b377';

export async function getStocks(): Promise<StockData[]> {
    const symbolString = symbols.join(',');
    const endpoint = `${URL}quote?symbol=${symbolString}&apikey=${TWELVE_DATA_API_KEY}`;

    try {
        const response = await axios.get(endpoint);
        const data = response.data;
        
        return Object.values(data).map((stock: any) => ({
            currency: stock.currency,
            datetime: stock.datetime,
            name: stock.name,
            percent_change: parseFloat(stock.percent_change),
            symbol: stock.symbol,
            timestamp: stock.timestamp,
            volume: parseInt(stock.volume, 10)
        }));
    } catch (error) {
        console.error("Error fetching stock data:", error);
        throw new Error("Failed to fetch stock data");
    }
}

export default Object.freeze({
    getStocks
});
