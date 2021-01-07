import React from 'react';
import { IonGrid, IonRow, IonCol, IonContent } from '@ionic/react';
import { SpotDetails } from '../types/types';
import { useGetSpot } from '../custom-hooks/use-queries';

import BottomSheet from './BottomSheet';

import './SpotDetails.css';

const SpotDetailsComponent: React.FC<SpotDetails> = ({ marker }) => {
    const spot = useGetSpot(marker._id);
    if (spot) {
        const content = (
            <div className="spot-details-content">
                <IonContent>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <h1>{ spot.name }</h1>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <h4>Best Months:</h4>
                                <span>{ spot.bestMonths.join(', ') }</span>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <h4>Wind</h4>
                                <span>{ spot.gusty ? 'Gusty. ' : 'Not gusty. ' + spot.windStrength + ' ' + spot.windDirection }</span>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <h4>Water</h4>
                                <span>{ spot.water.join(', ') }</span>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <h4>Other Activities</h4>
                                <span>{ spot.otherActivities.join(', ') }</span>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </div>
        )
        return (
            <BottomSheet
                content={content}
            />
        );
    } else
        return null;
}

export default SpotDetailsComponent;
