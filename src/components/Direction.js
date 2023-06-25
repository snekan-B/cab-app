import React, { useEffect, useRef ,useState} from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';

const Direction = () => {
     const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const mapContainerRef = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic25la2FuNyIsImEiOiJjbGo0ZTBndXYwMWl2M2pxeWp1eDQ2NG9uIn0.bE3IY5XI57Qrtck_EfsMxg';
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [80.270186, 13.083694],
      zoom: 8
    });

    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
    });

    directions.on('origin', (event) => {
        console.log("inside orgin")
      const enteredOrigin = event.feature;
      //setOrigin(console.log(enteredOrigin.place_name));
      console.log(enteredOrigin);
    });

    directions.on('destination', (event) => {
        console.log("inside dest");
      const enteredDestination = event.feature;
      //setDestination(enteredDestination.place_name);
      console.log(enteredDestination);
    });



    map.addControl(directions, 'top-left');

    return () => map.remove();
  }, []);
  return <div ref={mapContainerRef} style={{ width: '100%', height: '100%' }} />;
};

export default Direction;


// const Direction = () => {
//   const mapContainerRef = useRef(null);
//   const [origin, setOrigin] = useState('');
//   const [destination, setDestination] = useState('');

//   useEffect(() => {
//     mapboxgl.accessToken = 'pk.eyJ1Ijoic25la2FuNyIsImEiOiJjbGo0ZTBndXYwMWl2M2pxeWp1eDQ2NG9uIn0.bE3IY5XI57Qrtck_EfsMxg';
//     const map = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       style: 'mapbox://styles/mapbox/streets-v9',
//       center: [80.270186, 13.083694],
//       zoom: 8
//     });

//     const directions = new MapboxDirections({
//       accessToken: mapboxgl.accessToken,
//     });

    

//     map.addControl(directions, 'top-left');

//     return () => map.remove();
//   }, []);

//   return (
//     <div>
//       <div>Origin: {origin}</div>
//       <div>Destination: {destination}</div>
//       <div ref={mapContainerRef} style={{ width: '100%', height: '100%' }} />
//     </div>
//   );
// };

// export default Direction;