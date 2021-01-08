import { useState, useEffect } from 'react';
import {
    Marker,
    MarkerAPIResponse,
    MarkersAPIResponse,
    Spot,
    SpotAPIResponse,
    UserLogin,
    UserLoginAPIResponse
 } from '../types/types';
import { get, getParams, postBody } from '../fetchers/fetchers';

export const useGetMarkers = (reloadMarkers: boolean) => {
    const [data, setData] = useState<Marker[]>([]);

    const getData = async () => {
        const { markers } = await get<MarkersAPIResponse>(process.env.REACT_APP_URI + '/markers');
        setData(markers)
    }

    useEffect(() => {
        getData()
    }, [reloadMarkers])

    return data;
}

export const useGetSpot = (markerId: string) => {
    const [data, setData] = useState<Spot>();

    const getData = async () => {
        const { spot } = await getParams<SpotAPIResponse>(process.env.REACT_APP_URI + '/markers/spot', {params: {id: markerId.toString()}});
        setData(spot)
    }

    useEffect(() => {
        getData()
    }, [markerId])

    return data;
}

export const usePostLogin = (email: string, password: string, submit: boolean) => {
    const [data, setData] = useState<UserLogin>();

    const getData = async () => {
        const { user } = await postBody<UserLoginAPIResponse>(process.env.REACT_APP_URI + '/user/login', {
            user: {
                email: email,
                password: password
            }
        });
        setData(user)
    }

    useEffect(() => {
        if (submit)
            getData()
    }, [submit])

    return data;
}

export const usePostNewSpot = (spotObj: Spot | null, markerObj: Marker, submit: boolean) => {
    const [data, setData] = useState<Spot>();

    const getData = async () => {
        const { marker } = await postBody<MarkerAPIResponse>(process.env.REACT_APP_URI + '/markers/new', {
            marker: {
                lat: markerObj.lat,
                lng: markerObj.lng
            }
        });
        const { spot } = await postBody<SpotAPIResponse>(process.env.REACT_APP_URI + '/spots/new', {
            spot: {
                location: marker._id,
                name: spotObj !== null ? spotObj.name : '',
                bestFor: spotObj !== null ? spotObj.bestFor : undefined,
                bestMonths: spotObj !== null ? spotObj.bestMonths : undefined,
                windSpeed: spotObj !== null ? spotObj.windSpeed : 0,
                windDirections: spotObj !== null ? spotObj.windDirections : undefined,
                gusty: spotObj !== null ? spotObj.gusty : undefined,
                water: spotObj !== null ? spotObj.water : undefined,
                otherActivities: spotObj !== null ? spotObj.otherActivities : undefined,
            }

        });
        setData(spot)
    }

    useEffect(() => {
        if (submit && spotObj !== null)
            getData()
    }, [submit])

    return data;
}
