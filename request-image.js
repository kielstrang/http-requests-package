const request = require('request');
const fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', (err) => { throw err; })
  .on('response', (response) => {
    console.log('Response Status: ', response.statusCode + ' ' + response.statusMessage);
    console.log('Response Content: ', response.headers['content-type']);
    console.log('Downloading image...');
  })
  .pipe(fs.createWriteStream('./future.jpg')
    .on('finish', () => { console.log('Download complete'); })
  );