import { useEffect } from "react";

import usePersistStorage from "./usePersistStorage";
import { getAllCoinsList } from "services/api/tickers";

const ALL_COINS_KEY = 'allCoins';
let calledOnce = false;

const useAllCoinsList = () => {
    const [allCoinsList, setAllCoinsList] = usePersistStorage([], ALL_COINS_KEY);

    useEffect(() => {
        if (!calledOnce && allCoinsList.length === 0) {
            getAllCoinsList()
                .then(setAllCoinsList);
        }

        if (!calledOnce) calledOnce = true;
    }, []);

    return allCoinsList;
}

export default useAllCoinsList;
