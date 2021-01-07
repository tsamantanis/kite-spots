import React, { useState } from 'react';
import { IonModal, IonButton, IonContent } from '@ionic/react';
import { NewSpotModalProps } from '../types/types';

export const NewSpotModal: React.FC<NewSpotModalProps> = ({ marker }) => {
    const [showModal, setShowModal] = useState<boolean>(true);

    const [name, setName] = useState<string>('');
    const [bestMonths, setBestMonths] = useState<Array<string>>();
    const [windStrength, setWindStrength] = useState<string>('');
    const [windDirection, setWindDirection] = useState<Array<string>>();
    const [gusty, setGusty] = useState<boolean>(false);
    const [water, setWater] = useState<Array<string>>();
    const [otherActivities, setOtherActivities] = useState<Array<string>>();

    const submit = () => {
        console.log('submit');
    }

    return (
        <IonModal isOpen={showModal}>
            <div className="container">
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

                    </div>
                    <button onClick={submit}>Submit</button>
                </form>
            </div>
            <IonButton onClick={() => setShowModal(false)}>Cancel</IonButton>
        </IonModal>
    );
};

export default NewSpotModal;
