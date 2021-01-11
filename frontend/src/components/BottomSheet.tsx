import React, { useEffect, useRef } from "react";
import { IonButton, IonCard, IonIcon } from '@ionic/react';
import { close } from 'ionicons/icons';
import { createGesture, Gesture } from '@ionic/core';
import './BottomSheet.css';

interface BottomSheetProps {
    content: object,
    toggleShowBottomSheet: () => void
}

const BottomSheet: React.FC<BottomSheetProps> = ({ content, toggleShowBottomSheet }) => {
    const drawerRef = useRef<HTMLIonCardElement | null>(null);

    // useEffect(() => {
    //     let c = drawerRef.current as HTMLIonCardElement;
    //     if (typeof c !== 'undefined' && c !== null) {
    //         const gesture: Gesture = createGesture({
    //             el: c,
    //             gestureName: "my-swipe",
    //             direction: "y",
    //
    //             onMove: event => {
    //                 if (event.deltaY < -300) return;
    //                 // closing with a downward swipe
    //                 if (event.deltaY > 20) {
    //                     c.style.transform = "";
    //                     c.dataset.open = "false";
    //                     return;
    //                 }
    //                 c.style.transform = `translateY(${event.deltaY}px)`;
    //             },
    //
    //             onEnd: event => {
    //                 c.style.transition = ".5s ease-out";
    //                 if (event.deltaY < -30 && c.dataset.open !== "true") {
    //                     c.style.transform = `translateY(${-350}px) `;
    //                     c.dataset.open = "true";
    //                     console.log("in on end");
    //                 }
    //             }
    //         });
    //         gesture.enable(true);
    //     }
    // }, []);

    const toggleDrawer = () => {
        let c = drawerRef.current as HTMLIonCardElement;
        if (typeof c !== 'undefined' && c !== null) {
            if (c.dataset.open === "true") {
                c.style.transition = ".5s ease-out";
                c.style.transform = "";
                c.dataset.open = "false";
            } else {
                c.style.transition = ".5s ease-in";
                c.style.transform = `translateY(${-350}px) `;
                c.dataset.open = "true";
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
            <div>
                <IonButton
                    size="small"
                    onClick={toggleDrawer}
                    className="button-light"
                />
            </div>
            { content }
        </IonCard>
    );
};
export default BottomSheet;
