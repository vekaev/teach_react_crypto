import axios from "axios";

const ALL_COINS_URL = 'https://min-api.cryptocompare.com/data/all/coinlist?summary=true';

const getAllCoinsList = async () => {
    try {
        const { data: { Data } } = await axios.get(ALL_COINS_URL);
        const coinsList = Object.keys(Data);

        if (coinsList.length > 0)
            return coinsList;
    } catch (error) {
        console.log(error);
    }

    return [];
};

export { getAllCoinsList };
