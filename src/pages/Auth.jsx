import { useCallback, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Input } from 'components';
import { PageContainer } from "containers";
import { useAuth } from "hooks";


const InputField = ({ label, type, value, onChange }) => (
    <label>
        {label}
        <Input
            type={type}
            value={value}
            onChange={onChange}
        />
    </label>
);

const LogInForm = ({ onSubmit }) => {
    const [logInData, setLogInData] = useState({
        email: 'test@gmail.com',
        password: 'testtest',
        username: 'John Doe',
    });
    const { email, password, username } = logInData;

    const handleInputChange = useCallback(key => value => {
        setLogInData({ ...logInData, [key]: value })
    }, []);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        onSubmit(logInData);
    }, [logInData, onSubmit]);

    return (
        <PageContainer>
            <form
                style={{ display: "grid" }}
                onSubmit={handleSubmit}
            >
                <InputField
                    label="Enter your username"
                    value={username}
                    onChange={handleInputChange('username')}
                />
                <InputField
                    label="Enter your email"
                    type="email"
                    value={email}
                    onChange={handleInputChange('email')}
                />
                <InputField
                    label="Enter your password"
                    type="password"
                    value={password}
                    onChange={handleInputChange('password')}
                />
                <button
                    className="flex items-center justify-center font-medium w-full bg-gray-100 px-4 py-4 sm:px-6 text-md text-gray-500 hover:text-gray-600 hover:bg-gray-200 hover:opacity-20 transition-all focus:outline-none"
                >Submit</button>
            </form>
        </PageContainer>
    );
};

const initialData = {
    nickname: "John",
    email: "maklovich@gmail.com",
    password: "ilikecats"
};

//TODO: add auth functionality when mentor add backend
const Auth = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = useCallback((data) => {
        login(data);
        navigate("/", { replace: true });
    }, []);

    return (
        <div>
            <LogInForm
                initialData={initialData}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default Auth;