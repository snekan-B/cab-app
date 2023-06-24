import React from 'react';
import 'mapbox-gl/dist/mapbox-gl.css'
import Map, { Marker,NavigationControl,GeolocateControl} from 'react-map-gl';
import Geocoder from './components/Geocoder';
function App() {

  const ll = [80.270186,13.083694];
  return (
    <div>
      <Map
        mapboxAccessToken='pk.eyJ1Ijoic25la2FuNyIsImEiOiJjbGo0ZTBndXYwMWl2M2pxeWp1eDQ2NG9uIn0.bE3IY5XI57Qrtck_EfsMxg'
        style={{
          width:"1000px",
          height:"1000px",
          border:"2px solid red"
        }}
        initialViewState={{
          longitude:ll[0],
          latitude:ll[1],
          zoom:8
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker
          longitude={ll[0]}
          latitude={ll[1]}
          draggable
        />

        <NavigationControl position='bottom-right'/>

        <GeolocateControl
        position='top-left'
        trackUserLocation
        showUserHeading
        />

        <Geocoder/>


      </Map>
    </div>
  );
}

export default App;
