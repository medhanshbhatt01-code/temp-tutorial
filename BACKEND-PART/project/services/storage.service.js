require("dotenv").config();
const { ImageKit, toFile } = require("@imagekit/nodejs/index.js");

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function uploadfile(buffer) {
  const result = await imagekit.files.upload({
    file: await toFile(buffer, "image.jpg"),
    fileName: "image.jpg",
  });

  return result;
}

module.exports = uploadfile;
