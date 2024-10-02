import { useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

const MyMapContainer = () => {
  const [position, setPosition] = useState([51.505, -0.09]);
  const [popUp, setPopUp] = useState("Hi, I am a pop up.");

  return (
    <MapContainer
      className=" h-full w-full"
      center={position}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>{popUp}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MyMapContainer;
