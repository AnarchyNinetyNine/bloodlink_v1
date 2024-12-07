"use client";

import React from 'react';
import { GoogleMap, Circle, Marker, useJsApiLoader } from "@react-google-maps/api";
import { AdvancedMarker, APIProvider, Map } from '@vis.gl/react-google-maps';
import Menu from '@/components/navigation_menu/menu';

const App = () => {
    // Load Google Maps API using @vis.gl/react-google-maps
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyD9Zb_9tSTaYLiLn3juM9XCX_luQWqELyw", 
    });

    if (!isLoaded) return <div>Loading...</div>;
    return (
        <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
            <APIProvider apiKey="AIzaSyD9Zb_9tSTaYLiLn3juM9XCX_luQWqELyw">
                <Map
                    defaultZoom={17}
                    defaultCenter={{ lat: 32.28791, lng: -9.23743 }}
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}
                    mapId={"73b2f20f34b6a413"}
                >
                    <AdvancedMarker
                        position={{ lat: 32.28791, lng: -9.23743 }}
                        title={"Home"}
                    >
                        <div
                            style={{
                                width: "40px",
                                height: "40px",
                                backgroundImage: "url(/map-pin-fill-1.png)", 
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                            }}
                        />
                    </AdvancedMarker>
                </Map>
            </APIProvider>
            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%)", // Center the menu horizontally
                    textAlign: "center",
                    width: "100%",
                }}
            >
                <Menu />
            </div>
        </div>
    );
};

export default App;
