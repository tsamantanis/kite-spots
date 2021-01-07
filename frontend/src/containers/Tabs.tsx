import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
    IonIcon,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonRouterOutlet
} from '@ionic/react';
import { globeOutline, calendarOutline, personOutline } from 'ionicons/icons';
import Map from '../pages/Map';
import Events from '../pages/Events';
import Account from '../pages/Account';

const Tabs: React.FC = () => (
    <IonTabs>
        <IonRouterOutlet>
            <Route path="/map" component={Map} />
            <Route path="/events" component={Events} exact={true} />
            <Route path="/account" component={Account} exact={true}/>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
            <IonTabButton tab="map" href="/map">
                <IonIcon icon={globeOutline} />
            </IonTabButton>
            <IonTabButton tab="events" href="/events">
                <IonIcon icon={calendarOutline} />
            </IonTabButton>
            <IonTabButton tab="account" href="/account">
                <IonIcon icon={personOutline} />
            </IonTabButton>
        </IonTabBar>
    </IonTabs>
);

export default Tabs;
