import React, { useState } from 'react';
import { IonContent, IonGrid, IonPage, IonRow, IonCol } from '@ionic/react';

import './LoginRegister.css';

const SignIn: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const login = (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (!email.match('/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/')) {
            setErrorMessage("Email is not valid");
            return
        }
        if (password.length < 8) {
            setErrorMessage("Password must be at least 8 characters");
            return
        }

        // usePostLogin(email, password);
    }

    return (
        <div className="container center-items">
            <img src="../../../assets/illustration/Globe.svg" alt="Globe" />
            <h1>Sign In</h1>
            <form>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder="example@example.com"
                        name="email"
                        value={email}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setEmail(event.target.value); setErrorMessage('')}}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        placeholder="s0m3@-sTr0ng!-Pa5$"
                        name="password"
                        minLength={8}
                        value={password}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setPassword(event.target.value); setErrorMessage('')}}
                    />
                    {errorMessage.length > 0 && <small>{errorMessage}</small>}

                </div>
                <button onClick={login}>Sign In</button>
            </form>
        </div>
    );
};

export default SignIn;
