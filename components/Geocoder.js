import MapBoxGeocoder from 'mapbox-gl-geocoder';
import { useControl } from 'react-map-gl';
import 'mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

const Geocoder = () => {
  const ctrl = new MapBoxGeocoder({
    accessToken:'pk.eyJ1Ijoic25la2FuNyIsImEiOiJjbGo0ZTBndXYwMWl2M2pxeWp1eDQ2NG9uIn0.bE3IY5XI57Qrtck_EfsMxg',
    marker: true,
    collapsed: true,
  });
  useControl(() => ctrl);
};

export default Geocoder;