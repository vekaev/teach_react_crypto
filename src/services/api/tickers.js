import a from "axios";
import URLS from "constants/api";

const axios = a.create({
    baseURL: 'https://min-api.cryptocompare.com/data/'
})

const subscriptions = {};

const notify = (key, data) => {
    if (subscriptions[key]) subscriptions[key].forEach(callback => callback(data));
}

export const subscribe = (key, callback) => {
    subscriptions[key] = subscriptions[key] ? subscriptions[key].push(callback) : [callback];
}

const unSubscribe = (key, callback) => {
    if (subscriptions[key]) {
        subscriptions[key] = subscriptions[key].filter(item => item !== callback);
    }

    if (subscriptions[key].length === 0) {
        delete subscriptions[key];
    }
}

setInterval(async () => {
    const coinsNames = Object.keys(subscriptions);

    if (coinsNames.length === 0) return;

    const data = await getCoinsInfo(coinsNames);

    if (data.length > 0) {
        data.forEach(({name, price})=> {
            console.log(name, price)
            notify(name, price);
        })
    }
}, 3000)

const getCoinsInfo = async (names) => {
    const { data } = await axios.get(`${URLS.COINS_INFO_FOR}${names.join(",")}`);

    return Object.entries(data).map(([name, { USD: price}]) => ({name, price }));
};

const getUser = async (id) => {
    try {
        const data = await axios.patch(`http://localhost:3001/user/${id}`)
        console.log(data)
    } catch (error) {
        console.log({ error })
    }
}

const changeUserInfo = async (id) => {
    try {
        const data = await axios
            .put(`http://localhost:3001/users/${id}`,
                { username: 'test', email: 'test' }
            );

        console.log(data)
    } catch (error) {
        console.log({ error })
    }
}


const fetchAllCoinsList = async () => {
    try {
        const { data: { Data } } = await axios.get(URLS.ALL_COINS);
        changeUserInfo(1)
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
