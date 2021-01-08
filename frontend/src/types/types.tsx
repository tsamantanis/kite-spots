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
    marker: Marker
}

export interface MarkersAPIResponse {
    markers: Marker[]
}

export interface Spot {
    _id: string,
    location: string,
    name: string,
    bestFor: string,
    bestMonths: Array<string>,
    windSpeed: number,
    windDirections: Array<string>,
    gusty: boolean,
    water: Array<string>,
    otherActivities: Array<string>,
}

export interface SpotDetails {
    marker: Marker
}

export interface SpotAPIResponse {
    spot: Spot
}

export interface LeafletMapProps {
    addSpot: boolean,
    reloadMarkers: boolean,
    toggleNewSpotMarker: (marker: Marker) => void,
    toggleSpotDetails: (marker: Marker) => void,
}

export interface NewSpotModalProps {
    isOpen: boolean,
    toggleReloadMarkers: () => void,
    toggleShowModal: () => void,
    marker: Marker
}
