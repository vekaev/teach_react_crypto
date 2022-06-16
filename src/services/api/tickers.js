import axios from "axios";

const ALL_COINS_URL = 'https://min-api.cryptocompare.com/data/all/coinlist?summary=true';

const fetchAllCoinsList = async () => {
    try {
        const { data: { Data } } = await axios.get(ALL_COINS_URL);

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
