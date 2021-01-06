import { useState, useEffect } from 'react';
import { Marker, MarkerAPIResponse } from '../types/types';
import { get } from '../fetchers/fetchers';

export const useGetMarkers = () => {
    const [data, setData] = useState<Marker[]>([]);

    const getData = async () => {
        const { markers } = await get<MarkerAPIResponse>(process.env.REACT_APP_URI + '/markers');
        setData(markers)
    }

    useEffect(() => {
        getData()
    }, [])

    return data;
}
