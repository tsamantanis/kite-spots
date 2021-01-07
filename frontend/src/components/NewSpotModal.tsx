import React, { useState } from 'react';
import { IonModal, IonButton, IonContent, IonChip, IonLabel, IonGrid, IonRow, IonCol } from '@ionic/react';
import { NewSpotModalProps } from '../types/types';

import months from '../constants';
import './NewSpotModal.css';

export const NewSpotModal: React.FC<NewSpotModalProps> = ({ marker }) => {
    const [showModal, setShowModal] = useState<boolean>(true);

    const [name, setName] = useState<string>('');
    const [bestMonths, setBestMonths] = useState<Array<string>>([]);
    const [windStrength, setWindStrength] = useState<string>('');
    const [windDirection, setWindDirection] = useState<Array<string>>([]);
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
                    <button onClick={submit}>Submit</button>
                </form>
            </div>
            <IonButton onClick={() => setShowModal(false)}>Cancel</IonButton>
        </IonModal>
    );
};

export default NewSpotModal;
