import React, { useState } from 'react';
import { IonModal, IonButton, IonContent, IonChip, IonLabel, IonGrid, IonRow, IonCol, IonIcon } from '@ionic/react';
import { arrowDownOutline } from 'ionicons/icons';

import { NewSpotModalProps } from '../types/types';
import months, { windDirections } from '../constants';
import './NewSpotModal.css';

export const NewSpotModal: React.FC<NewSpotModalProps> = ({ marker }) => {
    const [showModal, setShowModal] = useState<boolean>(true);

    const [name, setName] = useState<string>('');
    const [bestMonths, setBestMonths] = useState<Array<string>>([]);
    const [windStrength, setWindStrength] = useState<string>('');
    const [selectedWindDirections, setSelectedWindDirections] = useState<Array<string>>([]);
    const [gusty, setGusty] = useState<boolean>(false);
    const [water, setWater] = useState<Array<string>>([]);
    const [otherActivities, setOtherActivities] = useState<Array<string>>([]);

    const handleBestMonths = (event: React.MouseEvent<HTMLIonChipElement, MouseEvent>) => {
        const input = event.target as HTMLElement;
        let updatedBestMonths = bestMonths;
        if (bestMonths.includes(input.innerText)) {
            const index = bestMonths.indexOf(input.innerText, 0);
            updatedBestMonths.splice(index, 1)
        } else {
            updatedBestMonths.push(input.innerText);
        }
        setBestMonths([...updatedBestMonths]);
    }

    const handleSelectedWindDirections = (event: React.MouseEvent<HTMLIonChipElement, MouseEvent>) => {
        const input = event.target as HTMLElement;
        let updatedSelectedWindDirections = selectedWindDirections;
        if (selectedWindDirections.includes(input.innerText)) {
            const index = selectedWindDirections.indexOf(input.innerText, 0);
            updatedSelectedWindDirections.splice(index, 1)
        } else {
            updatedSelectedWindDirections.push(input.innerText);
        }
        setSelectedWindDirections([...updatedSelectedWindDirections]);
    }

    const submit = () => {
        console.log('submit');
    }

    return (
        <IonModal isOpen={showModal}>
            <div className="container new-spot-modal">
                <h1>New Spot</h1>
                <form>
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="name"
                            placeholder=""
                            name="name"
                            value={name}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setName(event.target.value);}}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="bestMonths">Best Months</label>
                        <div>
                            <IonCol>
                                { months.map((month) => {
                                    return (
                                        <IonChip
                                            outline
                                            color={
                                                bestMonths.length > 0 ?
                                                bestMonths.includes(month) ?
                                                "success" : "warning" : ""
                                            }
                                            key={ month }
                                            onClick={(event) => handleBestMonths(event)}
                                            >
                                                <IonLabel>{ month }</IonLabel>
                                        </IonChip>
                                    )
                                })}
                            </IonCol>
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="windStrength">Wind Strength</label>
                    </div>
                    <div className="input-group">
                        <label htmlFor="windStrength">Wind Direction</label>
                        <div>
                            <IonCol>
                                { windDirections.map((windDirection) => {
                                    return (
                                        <IonChip
                                            outline
                                            color={
                                                selectedWindDirections.length > 0 ?
                                                selectedWindDirections.includes(windDirection.name) ?
                                                "success" : "warning" : ""
                                            }
                                            key={ windDirection.name }
                                            onClick={(event) => handleSelectedWindDirections(event)}
                                            >
                                                <IonIcon icon={ arrowDownOutline } style={{transform: `rotate(${windDirection.rotation})`}}/>
                                                <IonLabel>{ windDirection.name }</IonLabel>
                                        </IonChip>
                                    )
                                })}
                            </IonCol>
                        </div>
                    </div>
                    <button onClick={submit}>Submit</button>
                </form>
            </div>
            <IonButton onClick={() => setShowModal(false)}>Cancel</IonButton>
        </IonModal>
    );
};

export default NewSpotModal;
