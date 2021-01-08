import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import {
    IonModal,
    IonButton,
    IonContent,
    IonChip,
    IonLabel,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon
} from '@ionic/react';
import { arrowDownOutline, close } from 'ionicons/icons';

import { usePostNewSpot } from '../custom-hooks/use-queries';
import { NewSpotModalProps, Spot } from '../types/types';
import months, {
    disciplines,
    windStrengths,
    windDirections,
    waterConditions,
    activities
} from '../constants';
import './NewSpotModal.css';

export const NewSpotModal: React.FC<NewSpotModalProps> = ({ isOpen, toggleShowModal, marker }) => {
    const [name, setName] = useState<string>('');
    const [bestMonths, setBestMonths] = useState<Array<string>>([]);
    const [bestFor, setBestFor] = useState<string>('');
    const [windSpeed, setWindSpeed] = useState<number>(0);
    const [selectedWindDirections, setSelectedWindDirections] = useState<Array<string>>([]);
    const [gusty, setGusty] = useState<boolean>(false);
    const [water, setWater] = useState<Array<string>>([]);
    const [otherActivities, setOtherActivities] = useState<Array<string>>([]);

    const [newSpot, setNewSpot] = useState<Spot | null>(null);
    const [submit, setSubmit] = useState<boolean>(false);

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

    const handleBestFor = (event: React.MouseEvent<HTMLIonChipElement, MouseEvent>) => {
        const input = event.target as HTMLElement;
        let updatedBestFor = '';
        if (bestFor !== input.innerText)
            updatedBestFor = input.innerText;
        setBestFor(updatedBestFor);
    }

    const handleWindSpeed = (event: React.MouseEvent<HTMLIonChipElement, MouseEvent>) => {
        const input = event.target as HTMLElement;
        let updatedWindSpeed = 0;
        if (windSpeed !== parseInt(input.id))
            updatedWindSpeed = parseInt(input.id);
        setWindSpeed(updatedWindSpeed);
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

    const handleWater = (event: React.MouseEvent<HTMLIonChipElement, MouseEvent>) => {
        const input = event.target as HTMLElement;
        let updatedWater = water;
        if (water.includes(input.innerText)) {
            const index = water.indexOf(input.innerText, 0);
            updatedWater.splice(index, 1)
        } else {
            updatedWater.push(input.innerText);
        }
        setWater([...updatedWater]);
    }

    const handleOtherActivities = (event: React.MouseEvent<HTMLIonChipElement, MouseEvent>) => {
        const input = event.target as HTMLElement;
        let updatedOtherActivities = otherActivities;
        if (otherActivities.includes(input.innerText)) {
            const index = otherActivities.indexOf(input.innerText, 0);
            updatedOtherActivities.splice(index, 1)
        } else {
            updatedOtherActivities.push(input.innerText);
        }
        setOtherActivities([...updatedOtherActivities]);
    }

    const createNewSpot = (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const newSpotInfo = {
            _id: '',
            location: '',
            name: name,
            bestFor: bestFor,
            bestMonths: bestMonths,
            windSpeed: windSpeed,
            windDirections: selectedWindDirections,
            gusty: gusty,
            water: water,
            otherActivities: otherActivities,
        }
        setNewSpot(newSpotInfo)
        setSubmit(true)
    }

    const spot = usePostNewSpot(newSpot, marker, submit);
    if (typeof spot !== 'undefined') {
        toggleShowModal();
    }
    useEffect(() => {
        setSubmit(false);
    }, [newSpot])

    if (localStorage.getItem('token') === null) {
        return (<Redirect to="/login"/>);
    }

    return (
        <IonModal isOpen={isOpen}>
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
                        <label htmlFor="bestFor">Best For</label>
                        <div>
                            <IonCol>
                                { disciplines.map((discipline) => {
                                    return (
                                        <IonChip
                                            outline
                                            color={
                                                bestFor !== '' ?
                                                bestFor === discipline ?
                                                "success" : "warning" : ""
                                            }
                                            key={ discipline }
                                            onClick={(event) => handleBestFor(event)}
                                            >
                                                <IonLabel>{ discipline }</IonLabel>
                                        </IonChip>
                                    )
                                })}
                            </IonCol>
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="windSpeed">Wind Speed</label>
                        <div>
                            <IonCol>
                                { windStrengths.map((windStrength) => {
                                    return (
                                        <IonChip
                                            outline
                                            color={
                                                windSpeed !== 0 ?
                                                windSpeed === windStrength.speed ?
                                                "success" : "warning" : ""
                                            }
                                            id={ windStrength.speed.toString() }
                                            key={ windStrength.name }
                                            onClick={(event) => handleWindSpeed(event)}
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
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="windDirection">Wind Direction</label>
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
                                                <IonIcon size="small" icon={ arrowDownOutline } style={{transform: `rotate(${windDirection.rotation})`}}/>
                                                <IonLabel>{ windDirection.name }</IonLabel>
                                        </IonChip>
                                    )
                                })}
                            </IonCol>
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="gusty">Is it gusty?</label>
                        <div>
                            <IonCol>
                                <IonChip
                                    outline
                                    color={ gusty ? "success" : "" }
                                    onClick={(event) => setGusty(!gusty)}
                                    >
                                        <IonLabel>{ gusty ? 'Yes' : 'No'}</IonLabel>
                                </IonChip>
                            </IonCol>
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="waterConditions">Water Conditions</label>
                        <div>
                            <IonCol>
                                { waterConditions.map((condition) => {
                                    return (
                                        <IonChip
                                            outline
                                            color={
                                                water.length > 0 ?
                                                water.includes(condition) ?
                                                "success" : "warning" : ""
                                            }
                                            key={ condition }
                                            onClick={(event) => handleWater(event)}
                                            >
                                                <IonLabel>{ condition }</IonLabel>
                                        </IonChip>
                                    )
                                })}
                            </IonCol>
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="otherActivities">Other Activities</label>
                        <div>
                            <IonCol>
                                { activities.map((activity) => {
                                    return (
                                        <IonChip
                                            outline
                                            color={
                                                otherActivities.length > 0 ?
                                                otherActivities.includes(activity) ?
                                                "success" : "warning" : ""
                                            }
                                            key={ activity }
                                            onClick={(event) => handleOtherActivities(event)}
                                            >
                                                <IonLabel>{ activity }</IonLabel>
                                        </IonChip>
                                    )
                                })}
                            </IonCol>
                        </div>
                    </div>
                    <button onClick={createNewSpot}>Submit</button>
                </form>
            </div>
            <IonIcon className="modal-close" icon={close} size="large" onClick={() => toggleShowModal()} />
        </IonModal>
    );
};

export default NewSpotModal;
