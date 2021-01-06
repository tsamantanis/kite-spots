export interface Marker {
    lat: number,
    lng: number
}

export interface MarkerAPIResponse {
    markers: Marker[]
}

export interface Spot {
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
