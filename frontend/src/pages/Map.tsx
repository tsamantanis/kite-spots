import React from 'react';
import { IonContent, IonFab, IonFabButton, IonPage, IonIcon } from '@ionic/react';
import { add } from 'ionicons/icons';
import LeafletMap from '../components/LeafletMap';
import BottomSheet from '../components/BottomSheet';
import './Map.css';

const Map: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <IonFab vertical="top" horizontal="end" slot="fixed">
                    <IonFabButton>
                        <IonIcon icon={add} />
                    </IonFabButton>
                </IonFab>
                <LeafletMap />
                <BottomSheet />
            </IonContent>
        </IonPage>
    );
};

export default Map;
