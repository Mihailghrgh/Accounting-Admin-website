import "leaflet/dist/leaflet.css";
import L from "leaflet";
import React, { useEffect, useRef } from "react";

//Reseting and Creating the icon again
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default function MapSection() {
  const mapRef = useRef(null);

  useEffect(() => {
    console.log("mapRef.current", mapRef.current);

    if (!mapRef.current) return;

    const map = L.map("map").setView([44.436129, 26.038793], 12);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([44.436129, 26.038793])
      .addTo(map)
      .bindPopup("Locatia Noastra")
      .openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div ref={mapRef} id="map" style={{ height: "400px", width: "100%" }}></div>
  );
}
