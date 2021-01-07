import React from 'react';

import { SpotDetails } from '../types/types';
import { useGetSpot } from '../custom-hooks/use-queries';

import BottomSheet from './BottomSheet';

const SpotDetailsComponent: React.FC<SpotDetails> = ({ marker }) => {
    const spot = useGetSpot(marker._id);
    if (spot) {
        // content

        return (
            <BottomSheet
                // content={content}
            />
        );
    } else
        return null;
}

export default SpotDetailsComponent;
