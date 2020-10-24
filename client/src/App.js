import { useEffect, useState } from "react";

import "./App.css";
import CameraTable from "./components/CameraTable";
import CameraMap from "./components/CameraMap";

import { fetchCameraData } from "./services/camera-data";

function App() {
  const [loading, setLoading] = useState(false);
  const [cameraData, setCameraData] = useState([]);

  const getCameraData = async () => {
    try {
      setLoading(true);
      const data = await fetchCameraData();
      setCameraData(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCameraData();
  }, []);

  return (
    <div className="App">
      <h1>Security cameras Utrecht</h1>
      <CameraMap id="mapid" cameraData={cameraData} loading={loading} />
      <div id="source">
        source:
        <a href="https://data.overheid.nl/data/dataset/camera-s">
          https://data.overheid.nl/data/dataset/camera-s
        </a>
      </div>
      <CameraTable cameraData={cameraData} loading={loading} />
    </div>
  );
}

export default App;
