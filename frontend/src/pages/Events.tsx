import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid } from '@ionic/react';
import PageHeader from '../components/PageHeader';

const Events: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <IonGrid>
                    <PageHeader header="Events" />
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Events;
