import React from 'react';
import { IonContent, IonPage, IonGrid } from '@ionic/react';
import PageHeader from '../components/PageHeader';

const Account: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <IonGrid>
                    <PageHeader header="Account" />
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Account;
