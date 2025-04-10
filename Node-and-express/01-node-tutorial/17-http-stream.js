var http = require('http')
var fs = require('fs')

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')

    // The open event is emitted when the file descriptor is successfully opened.
    fileStream.on('open', () => {
      fileStream.pipe(res)  //The .pipe() method is used to connect a readable stream to a writable stream.
      //  It handles the flow of data and error handling automatically.
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })
  })
  .listen(5000)
