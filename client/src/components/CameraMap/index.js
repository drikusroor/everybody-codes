import { useState } from "react";
import Map from "pigeon-maps";
import Marker from "pigeon-marker/react";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import ZoomOutIcon from "@material-ui/icons/ZoomOut";
import "./CameraMap.css";

function mapTilerProvider(x, y, z) {
  return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
}

function CameraMap({ cameraData, loading }) {
  const center = [52.0914, 5.1115];
  const [zoom, setZoom] = useState(13);

  return loading ? (
    // Implement skeletons
    <span>Loading...</span>
  ) : (
    <Box className="map">
      <Map
        id="mapid"
        provider={mapTilerProvider}
        center={center}
        zoom={zoom}
        width={600}
        height={400}
      >
        {cameraData.map((camera, index) => (
          <Marker
            key={index}
            anchor={[parseFloat(camera.Latitude), parseFloat(camera.Longitude)]}
            payload={1}
          />
        ))}
      </Map>
      <Box>
        <IconButton aria-label="zoom-in" onClick={() => setZoom(zoom + 1)}>
          <ZoomInIcon />
        </IconButton>
        <IconButton aria-label="zoom-out" onClick={() => setZoom(zoom - 1)}>
          <ZoomOutIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default CameraMap;
