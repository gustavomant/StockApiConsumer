import { useEffect, useState } from "react";
import * as style from "./style";
import { useParams } from "react-router-dom";
import useGetStocks from "../../hooks/useStocksBySector";
import StockData from "../../domain/StockData";

const StockDetails = () => {
    const { symbol } = useParams();
    const { data, error, isLoading } = useGetStocks();
    const [stock, setStock] = useState<StockData>();

    useEffect(() => {
        const newStock = data?.filter(data => data.symbol == symbol);
        if(!newStock) return ;
        setStock(newStock[0]);
    }, [data]);

    if(error) console.error(error);
    if(isLoading) return <>loading...</>

    return (
        <style.styledStockDetails>
            <div className="content">
                <h2>empresa: {stock?.name}</h2>
                <p><strong>data da atualização:</strong> {stock?.datetime}</p>
                <p><strong>símbolo: </strong> {stock?.symbol}</p>
                <p><strong>moeda:</strong> {stock?.currency}</p>
                <p><strong>lucro:</strong> {stock?.percent_change}%</p>
                <p><strong>volume de mercado:</strong> {stock?.volume}</p>
            </div>
        </style.styledStockDetails>
    )
}

export default StockDetails;