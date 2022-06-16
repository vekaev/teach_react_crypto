import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Auth, Home } from "pages";
import { useAuth } from "hooks";

const Router = () => {
    const { authed } = useAuth();

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="auth" element={<Auth />} />
            </Routes>
        </BrowserRouter>
    );
}
{/*{authed ?*/}
{/*    <Home /> :*/}
{/*    <Auth />*/}
{/* }*/}

export default Router;
