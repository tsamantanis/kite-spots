import React from 'react';
import { IonContent, IonPage, IonGrid } from '@ionic/react';
import PageHeader from '../components/PageHeader';
import AccountCard from '../components/Account/AccountCard';

const Account: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <IonGrid>
                    <PageHeader
                        header="Account"
                    />
                    <AccountCard
                        title="Saved Spots"
                        description="View a list of your favorite spots"
                    />
                    <AccountCard
                        title="Security"
                        description="Manage your email and password"
                    />
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Account;
