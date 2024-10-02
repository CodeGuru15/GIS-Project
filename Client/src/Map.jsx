import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useRef, useEffect } from "react";

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = L.map(mapRef.current).setView([22.9074872, 79.07306671], 5);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

  return <div ref={mapRef} className=" h-full" />;
};

export default Map;
