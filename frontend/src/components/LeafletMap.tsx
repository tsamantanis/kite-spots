import React, { useState } from 'react';
import { Map, Marker as LeafletMarker, Popup, TileLayer } from 'react-leaflet';
import { useIonViewDidEnter } from '@ionic/react';
import { LatLngTuple, LeafletMouseEvent, ZoomAnimEvent, Icon } from 'leaflet';

import { LeafletMapProps } from '../types/types';
import { useGetMarkers } from '../custom-hooks/use-queries';

const defaultLatLng: LatLngTuple = [38.2749497, 23.8102717];
const defaultZoom:number = 7;

const LeafletMap: React.FC<LeafletMapProps> = ({ addSpot, reloadMarkers, toggleSpotDetails, toggleNewSpotMarker }) => {
    const [zoom, setZoom] = useState<number>(defaultZoom)
    const markers = useGetMarkers(reloadMarkers);

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

    const markerIcon = new Icon({
        iconUrl: "/assets/icon/location.svg",
        iconSize: [50, 50],
        iconAnchor: [25, zoom > 15 ? 50 : 68 + defaultZoom - zoom]
    });
    return (
        <Map
            id="mapId"
            center={defaultLatLng}
            zoom={defaultZoom}
            onClick={addMarker}
            onZoomEnd={(e: ZoomAnimEvent) => setZoom(e.target._animateToZoom)}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {typeof markers !== 'undefined' && markers.length > 0 ?
                markers.map(marker => {
                    return (
                        <LeafletMarker
                            riseOnHover={true}
                            key={marker._id}
                            position={[
                                marker.lat,
                                marker.lng
                            ]}
                            onClick={() => {
                                toggleSpotDetails(marker);
                            }}
                            icon={markerIcon}
                        />
                    )
                })
            : null }
        </Map>
    );
};

export default LeafletMap;
