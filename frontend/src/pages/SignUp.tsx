import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { IonContent, IonGrid, IonPage, IonRow, IonCol, IonRouterLink, IonIcon } from '@ionic/react';
import { close } from 'ionicons/icons';
import { usePostSignUp } from '../custom-hooks/use-queries';

import './LoginRegister.css';

const SignUp: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [submit, setSubmit] = useState<boolean>(false);

    const user = usePostSignUp(name, email, password, submit);

    const signUp = (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (name.length < 2) {
            setErrorMessage("Name must be at least 2 characters");
            return
        }
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
            <h1>Sign Up</h1>
            <form>
                <div className="input-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="name"
                        placeholder="Jesse Richman"
                        name="name"
                        value={name}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setName(event.target.value); setErrorMessage('')}}
                    />
                </div>
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
                    { user === null && <small>An error occurred. Please try again.</small> }
                </div>
                <button onClick={signUp}>Sign Up</button>
                <IonRouterLink href="/login">Already have an account?</IonRouterLink>
            </form>
        </div>
    );
};

export default SignUp;
