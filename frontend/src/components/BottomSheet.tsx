import React, { useEffect, useRef } from "react";
import { IonButton, IonCard } from '@ionic/react';
import { createGesture, Gesture } from '@ionic/core';
import './BottomSheet.css';

const BottomSheet: React.FC = () => {
    const drawerRef = useRef<HTMLIonCardElement | null>(null);
    // when the page is loaded, we find the element that is the drawer
    // and attach the gesture to it's reference using react `useRef` hook
    useEffect(() => {
        let c = drawerRef.current as HTMLIonCardElement;
        if (typeof c !== 'undefined' && c !== null) {
            console.log(c)
            const gesture: Gesture = createGesture({
                el: c,
                gestureName: "my-swipe",
                direction: "y",
                /**
                * when moving, we start to show more of the drawer
                */
                onMove: event => {
                    if (event.deltaY < -300) return;
                    // closing with a downward swipe
                    if (event.deltaY > 20) {
                        c.style.transform = "";
                        c.dataset.open = "false";
                        return;
                    }
                    c.style.transform = `translateY(${event.deltaY}px)`;
                },
                /**
                * when the moving is done, based on a specific delta in the movement; in this
                * case that value is -150, we determining the user wants to open the drawer.
                *
                * if not we just reset the drawer state to closed
                */
                onEnd: event => {
                    c.style.transition = ".5s ease-out";
                    if (event.deltaY < -30 && c.dataset.open !== "true") {
                        c.style.transform = `translateY(${-350}px) `;
                        c.dataset.open = "true";
                        console.log("in on end");
                    }
                }
            });
            gesture.enable(true);
        }// enable the gesture for the item
    }, []);
    /**
    * this function is called when the button on the top of the drawer
    * is clicked.  We are using the data-set attributes on the element
    * to determine the state of the drawer.
    *
    * this could be done using react state if you like.
    */
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
            <div>
                <IonButton
                    size="small"
                    onClick={toggleDrawer}
                    className="button-light"
                />
            </div>
        </IonCard>
    );
};
export default BottomSheet;
