import React from 'react';
import { IonRow, IonCol, IonText, IonIcon } from '@ionic/react';
import { chevronForwardOutline } from 'ionicons/icons';

import './Account.css';

interface ContainerProps {
  title: string,
  description: string
}

const AccountCard: React.FC<ContainerProps> = ({ title, description }) => {
    return (
        <IonRow>
            <IonCol>
                <div className="account-card">
                    <div className="account-card-content">
                        <h3>{ title }</h3>
                        <span>{ description }</span>
                    </div>
                    <IonIcon
                        icon={ chevronForwardOutline }
                        size="large"
                        color="primary"
                    />
                </div>
            </IonCol>
        </IonRow>
    );
};

export default AccountCard;
