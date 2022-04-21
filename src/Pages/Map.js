import React from "react";
import { ColContainer } from "../components/styled/Container.styled";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";
import L from "leaflet"

function Map() {
  const [map, setMap] = useState(null);
  // const mapPreferences = useSelector((state) => state.mapPreferences);
  // const mapDistance = useSelector((state) => state.mapDistance);
  // const mapCenter = useSelector((state) => state.mapCenter);
  
  const location = [38.9072,-77.0369]
  const markerIcon = new L.Icon({
    iconUrl: "./images/marker.png",
    iconSize:[60,60],
    iconAnchor:[17,46],
    popupAnchor:[14,-40],
  })
  return (
    <ColContainer>
      <MapContainer
        style={{ height: "500px", width: "50vw" }}
        center={location}
        zoom={4}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker 
        position={location}
        icon={markerIcon}
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </ColContainer>
  );
}

export default Map;
