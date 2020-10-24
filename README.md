# Everybody codes

By Drikus Roor

## How to use

### Prequisites

- Node.js installed
- Yarn installed

### CLI

```sh
# Navigate to cli folder
cd cli

# Search for cameras with "Neude" in its name
node search.js --name Neude
```

### API

```sh
cd api      # Navigate to api folder
yarn        # Install dependencies
yarn start  # Start server at http://localhost:3001
```

### Client

First, make sure the API is running (see step above)

```sh
cd client     # Navigate to client folder
yarn          # Install dependencies
yarn start    # Start server at http://localhost:3000
```

In your browser, navigate to http://localhost:3000

## Thought process

### 09:30 - 10:30

- Are there any shared functionalities?

  - I cannot see any for now
  - Perhaps the functionality to read, parse and return the CSV data is shared

- How to read command line arguments in node.js?

- What is a good, quick and easy way to read and parse csv data in Node.js?

- Need to do some regex to filter out number from UTR-CM-xxx

  - For now, use substring as all camera ids are in the same place in the string

- Need to filter out ERROR line from csv file

### 10:30 - 10.45

- "Serveer de data uit de csv vanuit een web-API, zodat een webapplicatie die data ergens kan ophalen."

  - What is meant by `de data`? All the data or the data filtered by name? For now, I choose all data.

- Need to eliminate the "ERROR" line in the csv earlier in the process so that the API will not get dirty data.

### 10.45 - 12.00

- Oops, perhaps I should not have deleted the `code/index.html` file.

- Should I use the existing index.html in combination with Vue or should I integrate the contents of the index.html page into a React application?

  - I choose React, it has been some months since I last used Vue and React is still fresh in my mind.

- HTTP request from localhost:3000 (client) to localhost:3001 (api) blocked by cors :/ ... Aren't they both localhost and therefore the same origin?

  - Add CORS to API, although it does not feel right.

- Hmmm, maybe I should extract the camera numbers in the shared module already as well.

```
Als het number van de camera deelbaar is door 3, dan belandt hij in de eerste kolom
Als het number van de camera deelbaar is door 5, dan belandt hij in de tweede kolom
Als het number van de camera deelbaar is door zowel 3 als door 5, dan belandt hij in de derde kolom
Als het number van de camera niet deelbaar is door 3 en niet deelbaar is door 5, dan belandt hij in de laatste kolom
```

- This seems kind of ambiguous to me. If the camera number can be divided by 3 and 5, does that mean it will end up in column 1, 2 and 3?
  - For now I play the common sense card and assume that every camera item can only end up in one column at the same time.

Done with rendering table data, moving on to map markers

### 12:00 - 12:15

Lunch time

### 12.15 - 13:45

- Tried to work with leaflet and react-leaflet, but got too many errors

  - Pidgeon maps seems to do the trick

- Right now, I need the last minutes of this 4 hours to write the `How to use`-section in this readme, but if I had more time, I would:
  - Add styling (using Material UI)
  - Add map controls
  - Do more git commits and use branching per feature
  - Write documentation for the Javascript functions in `./shared` and `./cli`
  - Add testing for the Javascript functions in `./shared` and `./cli`
