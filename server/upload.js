const IncomingForm = require('formidable').IncomingForm;
const fs = require('fs');

module.exports = function upload(req, res) {
  // To avoid issue for the limit of max file size upload 
  var opts = { maxFileSize: 1 * 1024 * 1024 * 1024 };
  var form = new IncomingForm(opts);
  let readStream;
  form.on('file', (field, file) => {
    // Do something with the file
    // e.g. save it to the database
    // you can access it using file.path
    console.log('file', file.name);
    readStream = fs.createReadStream(file.path);
  });
  form.on('end', () => {
    res.json();
  });
  form.parse(req);
};
