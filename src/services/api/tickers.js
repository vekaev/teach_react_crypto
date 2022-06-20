import a from "axios";
import URLS from "constants/api";

const axios = a.create({
    baseURL: 'https://min-api.cryptocompare.com/data/'
})

const fetchAllCoinsList = async () => {
    try {
        const { data: { Data } } = await axios.get(URLS.ALL_COINS);

        return Data;
    } catch (error) {
        console.log(error);
        return [];
    }
};

const getAllCoinsList = async () => {
    const data = await fetchAllCoinsList();

    return Object.keys(data);
};



export { getAllCoinsList };
