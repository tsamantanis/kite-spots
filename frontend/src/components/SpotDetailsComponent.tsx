import React from 'react';
import { IonGrid, IonRow, IonCol, IonContent, IonChip, IonIcon, IonLabel } from '@ionic/react';
import { arrowDownOutline, close } from 'ionicons/icons';

import { SpotDetails } from '../types/types';
import { useGetSpot } from '../custom-hooks/use-queries';
import BottomSheet from './BottomSheet';
import months, {
    disciplines,
    windStrengths,
    windDirections,
    waterConditions,
    activities
} from '../constants';
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
                                { months.map((month) => {
                                    return (
                                        <IonChip
                                            outline
                                            color={
                                                spot.bestMonths.length > 0 ?
                                                spot.bestMonths.includes(month) ?
                                                "success" : "warning" : ""
                                            }
                                            key={ month }
                                            >
                                            <IonLabel>{ month }</IonLabel>
                                        </IonChip>
                                    )
                                })}
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <h4>Best For:</h4>
                                { disciplines.map((discipline) => {
                                    return (
                                        <IonChip
                                            outline
                                            color={
                                                spot.bestFor !== '' ?
                                                spot.bestFor === discipline ?
                                                "success" : "warning" : ""
                                            }
                                            key={ discipline }
                                            >
                                                <IonLabel>{ discipline }</IonLabel>
                                        </IonChip>
                                    )
                                })}
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <h4>Wind Conditions:</h4>
                                { windStrengths.map((windStrength) => {
                                    return (
                                        <IonChip
                                            outline
                                            color={
                                                spot.windSpeed !== 0 ?
                                                spot.windSpeed === windStrength.speed ?
                                                "success" : "warning" : ""
                                            }
                                            id={ windStrength.speed.toString() }
                                            key={ windStrength.name }
                                            >
                                                <IonLabel
                                                    id={ windStrength.speed.toString() }
                                                >
                                                    { windStrength.name + ' (' + windStrength.speed +'+ kts)' }
                                                </IonLabel>
                                        </IonChip>
                                    )
                                })}
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                { windDirections.map((windDirection) => {
                                    return (
                                        <IonChip
                                            outline
                                            color={
                                                spot.windDirections.length > 0 ?
                                                spot.windDirections.includes(windDirection.name) ?
                                                "success" : "warning" : ""
                                            }
                                            key={ windDirection.name }
                                            >
                                                <IonIcon icon={ arrowDownOutline } style={{transform: `rotate(${windDirection.rotation})`}}/>
                                                <IonLabel>{ windDirection.name }</IonLabel>
                                        </IonChip>
                                    )
                                })}
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                            <IonChip
                                outline
                                color="success"
                            >
                                <IonLabel>{ spot.gusty ? 'Gusty' : 'Not gusty'}</IonLabel>
                            </IonChip>
                        </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <h4>Water</h4>
                                { waterConditions.map((condition) => {
                                    return (
                                        <IonChip
                                            outline
                                            color={
                                                spot.water.length > 0 ?
                                                spot.water.includes(condition) ?
                                                "success" : "warning" : ""
                                            }
                                            key={ condition }
                                            >
                                                <IonLabel>{ condition }</IonLabel>
                                        </IonChip>
                                    )
                                })}
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <h4>Other Activities</h4>
                                { activities.map((activity) => {
                                    return (
                                        <IonChip
                                            outline
                                            color={
                                                spot.otherActivities.length > 0 ?
                                                spot.otherActivities.includes(activity) ?
                                                "success" : "warning" : ""
                                            }
                                            key={ activity }
                                            >
                                                <IonLabel>{ activity }</IonLabel>
                                        </IonChip>
                                    )
                                })}
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
