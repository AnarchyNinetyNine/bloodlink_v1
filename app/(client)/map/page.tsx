"use client";
import React, { useState, useEffect, useRef } from "react";
import { GoogleMap, Circle, Marker, useJsApiLoader } from "@react-google-maps/api";
import { APIProvider } from "@vis.gl/react-google-maps";

type SkinType = "oldSkin" | "newSkin";

const App = () => {
  // Load Google Maps API using @vis.gl/react-google-maps
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyD9Zb_9tSTaYLiLn3juM9XCX_luQWqELyw", 
  });

  const [currentSkin, setCurrentSkin] = useState<SkinType>("oldSkin");
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [currentMarker, setCurrentMarker] = useState<{ lat: number; lng: number } | null>(null);
  const [radius, setRadius] = useState(0);
  const [markers, setMarkers] = useState<{ lat: number; lng: number }[]>([]);

  const center = { lat: 32.28791, lng: -9.23743 };
  const zoom = 16;

  const houseLocations = [
    { lat: 32.29000, lng: -9.24050 },
    { lat: 32.28650, lng: -9.23400 },
    { lat: 32.28580, lng: -9.23900 },
    { lat: 32.28900, lng: -9.23600 },
    { lat: 32.28850, lng: -9.23250 },
  ];

  const skins = {
    oldSkin: {
      fixedCircle: { strokeColor: "#FF0000", fillColor: "#FFCCCC" },
      rangeCircle: { strokeColor: "#FF9999", fillColor: "#FF0000" },
    },
    newSkin: {
      fixedCircle: { strokeColor: "#008000", fillColor: "#CCFFCC" },
      rangeCircle: { strokeColor: "#009900", fillColor: "#009900" },
    },
  };

  useEffect(() => {
    if (!map) return;

    const interval = setInterval(() => {
      setRadius((prev) => (prev >= 700 ? 0 : prev + 10));
    }, 50);

    return () => clearInterval(interval);
  }, [map]);

  const handleMapClick = (e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      const location = { lat: e.latLng.lat(), lng: e.latLng.lng() };
      setCurrentMarker(location);
    }
  };

  const handleToggleSkin = () => {
    setCurrentSkin((prev) => (prev === "oldSkin" ? "newSkin" : "oldSkin"));

    if (currentSkin === "newSkin") {
      setMarkers([]);
    } else {
      setMarkers(houseLocations);
    }
  };

  const handleToggleMapType = () => {
    if (map) {
      const currentType = map.getMapTypeId();
      map.setMapTypeId(currentType === "terrain" ? "satellite" : "terrain");
    }
  };

  const handleReset = () => {
    if (map) {
      map.panTo(center);
    }
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div id="menuContainer" style={{ position: "absolute", top: "10px", left: "10px", zIndex: 1000 }}>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleToggleMapType}>Toggle Map Type</button>
        <button onClick={handleToggleSkin}>Toggle Skin</button>
      </div>

      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={center}
        zoom={zoom}
        onLoad={(mapInstance) => setMap(mapInstance)}
        onClick={handleMapClick}
        options={{ streetViewControl: false, fullscreenControl: false, mapTypeControl: false }}
        
      >
        {/* Fixed Circle */}
        <Circle
          center={center}
          radius={700}
          options={{
            strokeColor: skins[currentSkin].fixedCircle.strokeColor,
            fillColor: skins[currentSkin].fixedCircle.fillColor,
            strokeOpacity: 1,
            strokeWeight: 1,
            fillOpacity: 0.2,
          }}
        />

        {/* Animated Circle */}
        <Circle
          center={center}
          radius={radius}
          options={{
            strokeColor: skins[currentSkin].rangeCircle.strokeColor,
            fillColor: skins[currentSkin].rangeCircle.fillColor,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillOpacity: 0.2,
          }}
        />

        {/* Current Marker */}
        {currentMarker && (
          <Marker
            position={currentMarker}
            draggable={true}
            animation={google.maps.Animation.BOUNCE}
          />
        )}

        {/* House Markers */}
        {currentSkin === "newSkin" &&
          markers.map((location, index) => (
            <Marker
              key={index}
              position={location}
              animation={google.maps.Animation.BOUNCE}
            />
          ))}
      </GoogleMap>
    </div>
  );
};

export default App;
