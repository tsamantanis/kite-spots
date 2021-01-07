import { useState, useEffect } from 'react';
import { Marker, MarkerAPIResponse, Spot, SpotDetailsAPIResponse } from '../types/types';
import { get, getParams } from '../fetchers/fetchers';

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

export const useGetSpot = (markerId: string) => {
    const [data, setData] = useState<Spot>();

    const getData = async () => {
        const { spot } = await getParams<SpotDetailsAPIResponse>(process.env.REACT_APP_URI + '/markers/spot', {params: {id: markerId.toString()}});
        setData(spot)
    }

    useEffect(() => {
        getData()
    }, [])

    return data;
}
