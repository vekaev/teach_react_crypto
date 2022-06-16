import { useCallback } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "hooks";

const PageContainer = ({ children }) => {
    const { authed, user, logout } = useAuth();

    const onClick = useCallback(() => {
        authed && logout();
    }, [authed, logout]);

    return (
        <div className="container mx-auto flex flex-col items-center bg-gray-100 p-4">
            <div style={{ display: 'flex', justifyContent: "space-between", width: '100%', background: "yellow"}}>
                <div>HEADER {authed && `- Hello, ${user.username}`}</div>
                <div onClick={onClick}>
                    <Link to="/auth">{!authed ? 'login' : 'logout'}</Link>
                </div>
            </div>
            {children}
        </div>
    )
};

export default PageContainer;
