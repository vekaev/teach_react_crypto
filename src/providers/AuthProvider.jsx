import { createContext, useCallback, useMemo } from "react";
import { usePersistStorage } from "hooks";

const initialData = {
    authed: false,
    user: {},
}

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = usePersistStorage(initialData, "auth");

    const login = useCallback((userData) => {
        setAuthData({
            authed: true,
            user: userData,
        });
    }, []);
    const logout = useCallback(() => {
        setAuthData({
            authed: false,
            user: {},
        });
    }, []);

    const value = {
        ...authData,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};


export { AuthProvider, AuthContext };