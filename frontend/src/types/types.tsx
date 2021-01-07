export interface UserLogin {
    _id: string,
    name: string,
    email: string,
    photo: string,
    token: string
}

export interface UserLoginAPIResponse {
    user: UserLogin
}

export interface Marker {
    _id: string,
    lat: number,
    lng: number
}

export interface MarkerAPIResponse {
    markers: Marker[]
}

export interface Spot {
    _id: string,
    location: string,
    name: string,
    bestMonths: Array<string>,
    windStrength: string,
    windDirection: string,
    gusty: boolean,
    water: Array<string>,
    otherActivities: Array<string>,
}

export interface SpotDetails {
    marker: Marker
}

export interface SpotDetailsAPIResponse {
    spot: Spot
}

export interface LeafletMapProps {
    toggleSpotDetails: (marker: Marker) => void;
}
