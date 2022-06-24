import { useCallback, useState } from "react";

const usePersistStorage = (initialData, key) => {
    const [data, setData] = useState(() => JSON.parse(localStorage.getItem(key)) || initialData);

    const setValue = useCallback((value) => {
        setData(value)
        localStorage.setItem(key, JSON.stringify(value))
    }, [key]);

    return [data, setValue];
}

export default usePersistStorage;
