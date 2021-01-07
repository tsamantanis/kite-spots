import React from 'react';
import { IonContent, IonGrid, IonPage, IonRow, IonCol } from '@ionic/react';

import './LoginRegister.css';

const SignIn: React.FC = () => {
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
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        placeholder="s0m3@-sTr0ng!-Pa5$"
                        name="password"
                    />
                </div>
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default SignIn;
