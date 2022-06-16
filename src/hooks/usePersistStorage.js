import { useCallback, useMemo, useState } from "react";

const usePersistStorage = (initialData, key) => {
    const localData = useMemo(() => JSON.parse(localStorage.getItem(key)), [key]);

    const [data, setData] = useState(localData || initialData);

    const setValue = useCallback((value) => {
        setData(value)
        localStorage.setItem(key, JSON.stringify(value))
    }, [key]);

    return [data, setValue];
}

export default usePersistStorage;
