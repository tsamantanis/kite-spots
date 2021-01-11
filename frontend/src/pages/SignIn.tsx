import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { IonContent, IonGrid, IonPage, IonRow, IonCol, IonRouterLink, IonIcon } from '@ionic/react';
import { close } from 'ionicons/icons';
import { usePostLogin } from '../custom-hooks/use-queries';

import './LoginRegister.css';

const SignIn: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [submit, setSubmit] = useState<boolean>(false);

    const user = usePostLogin(email, password, submit);

    const login = (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (!email.match(new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))) {
            setErrorMessage("Email is not valid");
            return
        }
        if (password.length < 8) {
            setErrorMessage("Password must be at least 8 characters");
            return
        }
        setSubmit(true);
    }

    useEffect(() => {
        setSubmit(false);
    }, [user])

    if (typeof user !== 'undefined' && user !== null) {
        localStorage.setItem('token', user.token);
        return (<Redirect to="/map" />);
    }

    return (
        <div className="container center-items">
            <IonRouterLink href="/#/map">
                <IonIcon
                    icon={close}
                    size="large"
                    className="close-icon"
                    color="light"
                />
            </IonRouterLink>
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
                    { user === null && <small>Invalid email and/or password</small> }
                </div>
                <button onClick={login}>Sign In</button>
                <IonRouterLink href="/register">Don't have an account yet?</IonRouterLink>
            </form>
        </div>
    );
};

export default SignIn;
