import Router from "router";
import { AuthProvider } from "providers";
import { useAllCoinsList } from "hooks";

import './App.css';


function App() {
    const allCoinsList = useAllCoinsList();

    return (
        <AuthProvider>
            <Router />
        </AuthProvider>
  );
}

export default App;
