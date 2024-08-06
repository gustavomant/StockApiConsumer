import TreeMap from "../../components/TreeMap";
import useGetStocks from "../../hooks/useStocksBySector";
import * as style from "./style";
import useMediaQuery from '@mui/material/useMediaQuery';

const Home = () => {
    const matches = useMediaQuery('(max-width:600px)');
    const { data, error, isLoading } = useGetStocks();

    if(error) console.error(error);
    if(isLoading) return <>loading...</>

    return (
        <style.styledHome>
            <div>
                <h1> Ações do Setor Alimentício </h1>
                {data && <TreeMap data={data} width={matches? 400 : 800} height={matches? 800 : 400} />}
            </div>
        </style.styledHome>
    )
}

export default Home;