import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { globeOutline, calendarOutline, personOutline } from 'ionicons/icons';
import Map from './pages/Map';
import Events from './pages/Events';
import Account from './pages/Account';
import SignIn from './pages/SignIn';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route path="/map" component={Map} exact={true} />
                    <Route path="/events" component={Events} exact={true} />
                    <Route path="/account" component={Account} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/" render={() => <Redirect to="/map" />} exact={true} />
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
        </IonReactRouter>
    </IonApp>
);

export default App;
