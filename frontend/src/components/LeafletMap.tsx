import React, { useState } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { useIonViewDidEnter } from '@ionic/react';

import { LatLngTuple, LeafletMouseEvent } from 'leaflet';

const defaultLatLng: LatLngTuple = [38.2749497, 23.8102717];
const zoom:number = 7;

const LeafletMap: React.FC = () => {
    const [markers, setMarkers] = useState<Array<any>>([])

    useIonViewDidEnter(() => {
        window.dispatchEvent(new Event('resize'));
    });

    const addMarker = (e: LeafletMouseEvent) => {
        const updatedMarkers = markers;
        updatedMarkers.push(e.latlng);
        setMarkers(updatedMarkers);
    }

    return (
        <Map
            id="mapId"
            center={defaultLatLng}
            zoom={zoom}
            onClick={addMarker}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
        </Map>
    );
};

export default LeafletMap;
