const fs = require('fs');
const util = require('util');

const readdir = util.promisify(fs.readdir);

const getDesignFlie = async () => {
  const files = await readdir('./asserts/plan');
  return files;
}

const getMediaFlie = async () => {
  const files = await readdir('./asserts/media');
  return files;
}

const getVideoFlie = async () => {
  const files = await readdir('./asserts/video');
  return files;
}

module.exports = {
  getDesignFlie,
  getMediaFlie,
  getVideoFlie
};