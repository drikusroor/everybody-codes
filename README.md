# Everybody codes

By Drikus Roor

## How to use

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

  - What is meant by "de data"? All the data or the data filtered by name? For now, I choose all data.

- Need to eliminate the "ERROR" line in the csv earlier in the process so that the API will not get dirty data.
