const fs = require("fs");
const getData = require("../shared/getData");
const getName = require("./helpers/getName");
const name = getName();

const logFoundCameras = async () => {
  const path = __dirname + "/../data/cameras-defb.csv";
  const data = await getData(path);
  const foundCameras = data
    .filter((row) => row.Camera.includes(name))
    .map((row) => {
      // TODO: Replace with regex
      const number = row.Camera.substring(7, 10);
      const rowString = `${number} | ${row.Camera} | ${row.Latitude} | ${row.Longitude}`;
      console.log(rowString);
    });
};

logFoundCameras(name);
