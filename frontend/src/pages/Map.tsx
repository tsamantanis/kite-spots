import React, { useState } from 'react';
import { IonContent, IonFab, IonFabButton, IonPage, IonIcon, IonToast } from '@ionic/react';
import { add, close, checkmarkCircleOutline } from 'ionicons/icons';

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
    const [confirmNewSpot, setConfirmNewSpot] = useState<boolean>(false);
    const [cancelNewSpot, setCancelNewSpot] = useState<boolean>(false);
    const [reloadMarkers, setReloadMarkers] = useState<boolean>(false);
    const toggleSpotDetails = (marker: Marker) => {
        setShowSpotDetails(marker);
    }

    const toggleNewSpotMarker = (marker: Marker) => {
        setNewSpotMarker(marker);
    }

    const toggleClearNewSpotMarker = () => {
        setCancelNewSpot(!cancelNewSpot);
        setNewSpotMarker(undefined);
    }

    const toggleConfirmNewSpot = () => {
        setConfirmNewSpot(!confirmNewSpot);
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
                    reloadMarkers={ reloadMarkers }
                    toggleSpotDetails={ toggleSpotDetails }
                    toggleNewSpotMarker={ toggleNewSpotMarker }
                    confirmNewSpot={ cancelNewSpot }
                />
                { typeof newSpotMarker === 'undefined'  ?
                    <IonToast
                        color="warning"
                        isOpen={addSpot && typeof newSpotMarker === 'undefined'}
                        message="Click on the map to add the spot location"
                    />
                    :
                    <div className="action-buttons">
                        <button
                            className="btn-cancel"
                            onClick={toggleClearNewSpotMarker}
                        >
                            Cancel
                        </button>
                        <button
                            className="btn-success"
                            onClick={toggleConfirmNewSpot}
                        >
                            Confirm
                        </button>
                    </div>
                }
            </IonContent>
            { typeof showSpotDetails !== 'undefined' && <SpotDetailsComponent marker={showSpotDetails} /> }
            { typeof newSpotMarker !== 'undefined'
                && confirmNewSpot
                && <NewSpotModal
                    isOpen={addSpot}
                    toggleReloadMarkers={() => setReloadMarkers(!reloadMarkers)}
                    toggleShowModal={() => {
                        setAddSpot(!addSpot);
                        toggleClearNewSpotMarker();
                        toggleConfirmNewSpot();
                    }}
                    marker={newSpotMarker}
                />
            }
        </IonPage>
    );
};

export default Map;
