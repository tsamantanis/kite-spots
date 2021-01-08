import React, { useState } from 'react';
import { IonContent, IonFab, IonFabButton, IonPage, IonIcon, IonToast } from '@ionic/react';
import { add, close } from 'ionicons/icons';

import { Marker, Spot, SpotDetails } from '../types/types';
import { useGetSpot } from '../custom-hooks/use-queries';
import LeafletMap from '../components/LeafletMap';
import NewSpotModal from '../components/NewSpotModal';
import SpotDetailsComponent from '../components/SpotDetailsComponent';
import './Map.css';



const Map: React.FC = () => {
    const [showSpotDetails, setShowSpotDetails] = useState<Marker>();
    const [newSpotMarker, setNewSpotMarker] = useState<Marker>();
    const [addSpot, setAddSpot] = useState<boolean>(false);
    const toggleSpotDetails = (marker: Marker) => {
        setShowSpotDetails(marker);
    }

    const toggleNewSpotMarker = (marker: Marker) => {
        setNewSpotMarker(marker);
    }

    return (
        <IonPage>
            <IonContent fullscreen>
                <IonFab vertical="top" horizontal="end" slot="fixed">
                    <IonFabButton
                        onClick={() => setAddSpot(!addSpot)}
                    >
                        <IonIcon icon={!addSpot ? add : close} />
                    </IonFabButton>
                </IonFab>
                <LeafletMap
                    addSpot={ addSpot }
                    toggleSpotDetails={ toggleSpotDetails }
                    toggleNewSpotMarker={ toggleNewSpotMarker }
                />
                <IonToast
                    color="secondary"
                    isOpen={addSpot && typeof newSpotMarker === 'undefined'}
                    message="Click on the map to add the spot location"
                />
            </IonContent>
            { typeof showSpotDetails !== 'undefined' && <SpotDetailsComponent marker={showSpotDetails}/> }
            { typeof newSpotMarker !== 'undefined'
                && <NewSpotModal
                    isOpen={addSpot}
                    toggleShowModal={() => {setAddSpot(!addSpot); setNewSpotMarker(undefined)}}
                    marker={newSpotMarker}
                />
            }
        </IonPage>
    );
};

export default Map;
