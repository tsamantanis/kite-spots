import React, { useState } from 'react';
import { IonContent, IonFab, IonFabButton, IonPage, IonIcon } from '@ionic/react';
import { add } from 'ionicons/icons';

import { Marker, Spot } from '../types/types';
import LeafletMap from '../components/LeafletMap';
import BottomSheet from '../components/BottomSheet';
import './Map.css';

const Map: React.FC = () => {
    const [showSpotDetails, setShowSpotDetails] = useState<Spot>();
    const toggleSpotDetails = (marker: Marker) => {
        console.log(marker);
    }

    return (
        <IonPage>
            <IonContent fullscreen>
                <IonFab vertical="top" horizontal="end" slot="fixed">
                    <IonFabButton>
                        <IonIcon icon={add} />
                    </IonFabButton>
                </IonFab>
                <LeafletMap
                    toggleSpotDetails={toggleSpotDetails}
                />
            </IonContent>
            <BottomSheet />

        </IonPage>
    );
};

export default Map;
