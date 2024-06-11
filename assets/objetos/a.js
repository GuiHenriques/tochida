const fs = require("fs");

// Directory path
const directory = "objetos/";

// Read the contents of the directory
fs.readdir(directory, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  // Loop through the files
  files.forEach((file) => {
    // Check if the file name matches the pattern objectsXX.png
    if (file.startsWith("objects")) {
      // Generate the new file name
      const newFileName = file.replace("objects", "objeto");
      // Rename the file
      fs.rename(`${directory}${file}`, `${directory}${newFileName}`, (err) => {
        if (err) {
          console.error(`Error renaming ${file}:`, err);
        } else {
          console.log(`Renamed ${file} to ${newFileName}`);
        }
      });
    }
  });
});
