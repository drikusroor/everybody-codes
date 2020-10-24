const csv = require("csv-parser");
const fs = require("fs");

const getData = (path, separator = ";") => {
  const results = [];

  return new Promise((resolve, reject) => {
    try {
      fs.createReadStream(path)
        .pipe(csv({ separator }))
        .on("data", (data) => {
          // TODO: Replace with regex
          if (data.Camera.includes("ERROR")) {
            return;
          }
          const number = data.Camera.substring(7, 10);
          data.Number = number;
          results.push(data);
        })
        .on("end", () => {
          resolve(results);
        });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = getData;
