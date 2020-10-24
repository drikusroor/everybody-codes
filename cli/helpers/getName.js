function getName() {
  const args = process.argv;
  const nameIndex = args.indexOf("--name");
  let name;

  try {
    if (nameIndex > -1) {
      name = args[nameIndex + 1];
    }
  } catch (error) {
    throw new Error("Something went wrong while parsing the name.");
  }

  if (!name || name === "") {
    throw new Error("No name was entered.");
  }

  return name;
}

module.exports = getName;
