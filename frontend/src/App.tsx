import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {
    IonApp,
    IonIcon,
    IonLabel
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Tabs from './containers/Tabs';

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
import './theme/forms.css';

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <Switch>
                <Route path="/login" component={SignIn} exact={true}/>
                <Route path="/register" component={SignUp} exact={true}/>
                <Route path="/" component={Tabs} />
            </Switch>
        </IonReactRouter>
    </IonApp>
);

export default App;
