import React from 'react';

import { SpotDetails } from '../types/types';
import { useGetSpot } from '../custom-hooks/use-queries';

import BottomSheet from './BottomSheet';

const SpotDetailsComponent: React.FC<SpotDetails> = ({ marker }) => {
    const spot = useGetSpot(marker._id);
    if (spot) {
        const content = (
            <div className="container">
                <h2>{ spot.name }</h2>
            </div>
        )
        return (
            <BottomSheet
                content={content}
            />
        );
    } else
        return null;
}

export default SpotDetailsComponent;
