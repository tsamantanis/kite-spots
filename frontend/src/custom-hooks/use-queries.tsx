import { useState, useEffect } from 'react';
import {
    Marker,
    MarkerAPIResponse,
    Spot,
    SpotAPIResponse,
    UserLogin,
    UserLoginAPIResponse
 } from '../types/types';
import { get, getParams, postBody } from '../fetchers/fetchers';

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
        const { spot } = await getParams<SpotAPIResponse>(process.env.REACT_APP_URI + '/markers/spot', {params: {id: markerId.toString()}});
        setData(spot)
    }

    useEffect(() => {
        getData()
    }, [])

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

export const usePostNewSpot = (spotObj: object, submit: boolean) => {
    const [data, setData] = useState<Spot>();

    const getData = async () => {
        const { spot } = await postBody<SpotAPIResponse>(process.env.REACT_APP_URI + '/spots/new', {
            spotObj
        });
        setData(spot)
    }

    useEffect(() => {
        if (submit)
            getData()
    }, [submit])

    return data;
}
