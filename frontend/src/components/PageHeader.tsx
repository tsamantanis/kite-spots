import React from 'react';
import { IonRow, IonCol, IonText } from '@ionic/react';

interface ContainerProps {
  header: string;
}

const PageHeader: React.FC<ContainerProps> = ({ header }) => {
    return (
        <IonRow>
            <IonCol>
                <IonText color="dark">
                    <h1>{header}</h1>
                </IonText>
                <hr />
            </IonCol>
        </IonRow>
    );
};

export default PageHeader;
