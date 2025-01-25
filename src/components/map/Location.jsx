import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
// Import marker icon images
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Set up marker icon
const customMarkerIcon = new L.Icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

function Location() {
    const shopPosition = [35.6895, 51.3890]; // Coordinates for the shop
    return (
        
        <MapContainer center={shopPosition} zoom={13} style={{ height: "80vh",borderRadius:"16px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={shopPosition} icon={customMarkerIcon}>
          <Popup>
            This is your shop!
          </Popup>
        </Marker>
      </MapContainer>
    );
}

export default Location