import React, { useState, useEffect, useRef } from "react";
import { IonButton, IonCard, IonIcon } from '@ionic/react';
import { close, chevronUpOutline, chevronDownOutline } from 'ionicons/icons';
import { createGesture, Gesture } from '@ionic/core';
import './BottomSheet.css';

interface BottomSheetProps {
    content: object,
    toggleShowBottomSheet: () => void
}

const BottomSheet: React.FC<BottomSheetProps> = ({ content, toggleShowBottomSheet }) => {
    const drawerRef = useRef<HTMLIonCardElement | null>(null);

    const toggleDrawer = () => {
    let c = drawerRef.current as HTMLIonCardElement;
        if (typeof c !== 'undefined' && c !== null) {
            if (c.dataset.open === "true") {
                c.style.transition = ".5s ease-out";
                c.style.transform = "";
                c.dataset.open = "false";
                c.children[1].classList.add('derotate');
                c.children[1].classList.remove('rotate');
            } else {
                c.style.transition = ".5s ease-in";
                c.style.transform = `translateY(${-350}px) `;
                c.dataset.open = "true";
                c.children[1].classList.add('rotate');
                c.children[1].classList.remove('derotate');

            }
        }
    };

    return (
        <IonCard className="bottom-drawer" ref={drawerRef}>
            <IonIcon
                icon={close}
                size="large"
                className="close-icon"
                color="light"
                onClick={toggleShowBottomSheet}
            />
            <div className="button-container" onClick={toggleDrawer}>
                <IonIcon
                    color="primary"
                    className="chevron"
                    icon={chevronUpOutline}
                />
            </div>
            { content }
        </IonCard>
    );
};
export default BottomSheet;
