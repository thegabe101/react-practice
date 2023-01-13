import axios from "axios";
import { useQuery } from '@tanstack/react-query';

export const useGetCat = () => {
    const { data, refetch, isLoading: isCatLoading, error } = useQuery(['cat'], async () => {
        console.log(data)
        return axios.get('https://catfact.ninja/fact').then((res) => res.data)
    });


    const refetchData = () => {
        alert('Browser reloading data.')
        refetch();
    }

    if (error) {
        console.log('error');
    }

    return { data, refetchData, isCatLoading };
}