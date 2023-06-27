import axios, { AxiosPromise } from "axios";
import { FoodData } from "../interface/FoodData";
import { useQuery } from "react-query";

const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise<FoodData[]> => {//aqui está falando que vai retornar da forma AxiosPromise só que passando pela interface que foi criada
    const response = axios.get(API_URL + '/food');
    return response
}

export function useFoodData() {
    //o axios é uma bliblioteca para disparar requisições http
    //npm install axios
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['food-data'],
        retry: 2
    })

    return {
        ...query,//aqui ele vai pegar tudo dentro de query
        data: query.data?.data
    }
}