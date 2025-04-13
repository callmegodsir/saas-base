const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '..', 'public', 'images');
const files = fs.readdirSync(imagesDir);

files.forEach((file, index) => {
  const ext = path.extname(file); // e.g., .jpg, .png
  const newName = `chou${index + 1}${ext}`;
  const oldPath = path.join(imagesDir, file);
  const newPath = path.join(imagesDir, newName);

  fs.renameSync(oldPath, newPath);
  console.log(`Renamed ${file} to ${newName}`);
}); 