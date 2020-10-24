import { useEffect, useState } from "react";
import React from "react";

function CameraTable({ cameraData, loading }) {
  const [cameraColumns, setCameraColumns] = useState([]);

  const getColumnData = () => {
    const columnData = cameraData.reduce(
      (acc, curr) => {
        if (curr.Number % 3 === 0 && curr.Number % 5 === 0) {
          acc[2].items.push(curr);
        } else if (curr.Number % 3 === 0 && curr.Number % 5 !== 0) {
          acc[0].items.push(curr);
        } else if (curr.Number % 5 === 0 && curr.Number % 3 !== 0) {
          acc[1].items.push(curr);
        } else {
          acc[3].items.push(curr);
        }
        return [...acc];
      },
      [
        { title: "Cameras 3", id: "column3", items: [] },
        { title: "Cameras 5", id: "column5", items: [] },
        { title: "Cameras 3 & 5", id: "column15", items: [] },
        { title: "Cameras Overig", id: "columnOther", items: [] },
      ]
    );
    setCameraColumns(columnData);
  };

  useEffect(() => {
    getColumnData();
  }, [cameraData]);

  return (
    <table id="cameratable">
      <tbody>
        <tr>
          {loading ? (
            // Implement Skeletons
            <span>loading...</span>
          ) : (
            cameraColumns.map((columnData, cIndex) => (
              <td key={cIndex}>
                <table id={columnData.id}>
                  <table aria-label="simple table">
                    <thead>
                      <tr>
                        <th colSpan="4">{columnData.title}</th>
                      </tr>
                      <tr>
                        <th>Number</th>
                        <th>Name</th>
                        <th>Longitude</th>
                        <th>Latitude</th>
                      </tr>
                    </thead>
                    <tbody>
                      {columnData.items.map((item, iIndex) => (
                        <tr key={`${item.Number}-${iIndex}`}>
                          <td>{item.Number}</td>
                          <td>{item.Camera}</td>
                          <td>{item.Longitude}</td>
                          <td>{item.Latitude}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </table>
              </td>
            ))
          )}
        </tr>
      </tbody>
    </table>
  );
}

export default CameraTable;
