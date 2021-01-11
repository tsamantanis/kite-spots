import React, { useState, useEffect } from 'react';
import { Map, Marker as LeafletMarker, Popup, TileLayer } from 'react-leaflet';
import { useIonViewDidEnter } from '@ionic/react';
import { NewSpotModalProps, Spot } from '../types/types';
import { LatLngTuple, LeafletMouseEvent, ZoomAnimEvent, Icon } from 'leaflet';

import { LeafletMapProps, Marker } from '../types/types';
import { useGetMarkers } from '../custom-hooks/use-queries';

const defaultLatLng: LatLngTuple = [38.2749497, 23.8102717];
const defaultZoom:number = 7;

const LeafletMap: React.FC<LeafletMapProps> = ({ addSpot, reloadMarkers, toggleSpotDetails, toggleNewSpotMarker, confirmNewSpot }) => {
    const [zoom, setZoom] = useState<number>(defaultZoom)
    const [newSpot, setNewSpot] = useState<Marker | null>(null);
    const markerIcon = new Icon({
        iconUrl: "/assets/icon/location.svg",
        iconSize: [50, 50],
        iconAnchor: [25, zoom > 15 ? 50 : 68 + defaultZoom - zoom]
    });
    const newSpotIcon = new Icon({
        iconUrl: "/assets/icon/newLocation.svg",
        iconSize: [50, 50],
        iconAnchor: [25, zoom > 15 ? 50 : 68 + defaultZoom - zoom]
    });
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
            setNewSpot({
                _id: (e.latlng.lat + e.latlng.lng).toString(),
                lat: e.latlng.lat,
                lng: e.latlng.lng
            });
        }
    }

    useEffect(() => {
        setNewSpot(null);
    }, [confirmNewSpot]);

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
            { newSpot !== null && addSpot &&
                <LeafletMarker
                    riseOnHover={true}
                    key={newSpot._id}
                    position={[
                        newSpot.lat,
                        newSpot.lng
                    ]}
                    icon={newSpotIcon}
                />
            }
        </Map>
    );
};

export default LeafletMap;
