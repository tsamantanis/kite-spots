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
    otherActions: Array<string>,
}

export interface SpotAPIResponse {
    data: Spot[]
}
