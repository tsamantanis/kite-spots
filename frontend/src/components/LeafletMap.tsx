import React, { useState } from 'react';
import { Map, Marker as LeafletMarker, Popup, TileLayer } from 'react-leaflet';
import { useIonViewDidEnter } from '@ionic/react';
import { LatLngTuple, LeafletMouseEvent } from 'leaflet';

import { LeafletMapProps } from '../types/types';
import { useGetMarkers } from '../custom-hooks/use-queries';

const defaultLatLng: LatLngTuple = [38.2749497, 23.8102717];
const zoom:number = 7;

// use this for custom marker icon
// export const markerIcon = new Icon({
//   iconUrl: "/skateboarding.svg",
//   iconSize: [25, 25]
// });

const LeafletMap: React.FC<LeafletMapProps> = ({ addSpot, toggleSpotDetails, toggleNewSpotMarker }) => {
    // const [markers, setMarkers] = useState<Array<any>>([])
    const markers = useGetMarkers();

    useIonViewDidEnter(() => {
        window.dispatchEvent(new Event('resize'));
    });

    const addMarker = (e: LeafletMouseEvent) => {
        if (addSpot) {
            toggleNewSpotMarker({
                _id: '',
                lat: e.latlng.lat,
                lng: e.latlng.lng
            });
        }
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
            {markers.length > 0 ?
                markers.map(marker => {
                    return (
                        <LeafletMarker
                            key={marker._id}
                            position={[
                                marker.lat,
                                marker.lng
                            ]}
                            onClick={() => {
                                toggleSpotDetails(marker);
                            }}
                            // icon={markerIcon} // use this for custom icon
                        />
                    )
                })
            : null }
        </Map>
    );
};

export default LeafletMap;
