import React from 'react';
import { Box, Card } from '@chakra-ui/react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const center = {
  lat: -26.993610382080078,
  lng: -48.63444137573242,
};

const MapComponent = () => (
  <LoadScript googleMapsApiKey="AIzaSyC22h31eoAjlhnIPhVlDsGXcOMBDjnmsco">
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: '400px' }}
      center={center}
      zoom={18}
    >
      <Marker position={center}  />
    </GoogleMap>
  </LoadScript>
);
export default function Map() {
  return (
    <Card width={{base:"100%",md:"600px"}}  borderRadius="8px" boxShadow="4px 4px 8px rgba(0,0,0,0.8)"  p={2} height={{base:"200px",md:"300px"}}>
      <MapComponent />
    </Card>
  );
}