import React from 'react';
import { IonContent, IonPage, IonGrid } from '@ionic/react';
import PageHeader from '../components/PageHeader';

const Events: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <IonGrid>
                    <PageHeader header="Events" />
                    <img src="../../../assets/illustration/Service.svg" alt="Coming Soon" />
                    <h3 style={{ textAlign: 'center' }}>Coming Soon</h3>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Events;
