"use client"

import React, { FC, useCallback, useState } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle: React.CSSProperties = {
  width: '1200px',
  height: '800px'
};

const center: google.maps.LatLngLiteral = {
  lat: 38.745,
  lng: 38.523
};

const MyComponent: FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AlmjaSyBQzdfhk9-0YUnjk5g0_nysopni68avtj93fhk"
  });

  const handleMapClick = (event: google.maps.MapMouseEvent): void => {
    alert('Map clicked at: ' + event.latLng);
  };

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback((map: google.maps.Map) => {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={6}
      onLoad={onLoad}
      onUnmount={onUnmount}
      onClick={handleMapClick}
    >
      { /* other components, such as markers, info windows, etc. */ }
      <></>
    </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)