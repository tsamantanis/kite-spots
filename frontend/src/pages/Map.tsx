import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import LeafletMap from '../components/LeafletMap';
import './Map.css';

const Map: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <LeafletMap />
            </IonContent>
        </IonPage>
    );
};

export default Map;
