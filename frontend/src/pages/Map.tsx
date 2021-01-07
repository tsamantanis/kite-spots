import React, { useState } from 'react';
import { IonContent, IonFab, IonFabButton, IonPage, IonIcon } from '@ionic/react';
import { add } from 'ionicons/icons';

import { Marker, Spot, SpotDetails } from '../types/types';
import { useGetSpot } from '../custom-hooks/use-queries';
import LeafletMap from '../components/LeafletMap';
import SpotDetailsComponent from '../components/SpotDetailsComponent';
import './Map.css';



const Map: React.FC = () => {
    const [showSpotDetails, setShowSpotDetails] = useState<Marker>();
    const toggleSpotDetails = (marker: Marker) => {
        setShowSpotDetails(marker);
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
            {typeof showSpotDetails !== 'undefined' && <SpotDetailsComponent marker={showSpotDetails}/>}
        </IonPage>
    );
};

export default Map;
