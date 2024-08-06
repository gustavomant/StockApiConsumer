import { useQuery } from '@tanstack/react-query';
import { getStocks } from '../services/StockService';

const useGetStocks = () => {
    return useQuery({
        queryKey: ['getStocks'],
        queryFn: () => getStocks(),
        staleTime: Infinity,
        gcTime: Infinity,
        refetchOnWindowFocus: false,
    });
    
};

export default useGetStocks;
