var express        = require("express");
var multer         = require('multer');
var app            = express();
var upload         = multer({ dest: './uploads/'});
var dateFormat     = require('dateformat');
var md5File        = require('md5-file')
var microtime      = require('microtime');

app.use(function (req, res, next) {
  // Enable CORS for non static files
  var origin = req.get('Origin');

  if (origin) {
    res.set({
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Range, Content-Disposition, Content-Type, X-Foo, X-Rnd, Cache-Control',
      'Access-Control-Allow-Credentials': 'true'
    });
  }
  next();
});

app.use(multer({ dest: './uploads/',
  rename: function (fieldname, filename, req, res) {
    return dateFormat(new Date(), "yyyymmdd_HHMMss_" + microtime.now());
  },
  onFileUploadStart: function (file) {
    console.log('[' + dateFormat(new Date(), "isoDateTime") +'] ' + file.originalname + ' is starting ...');
  },
  onFileUploadComplete: function (file) {
    console.log('[' + dateFormat(new Date(), "isoDateTime") +'] ' + file.originalname + ' uploaded to ' + file.path)
  }
}));

app.get('/',function(req,res){
      res.sendFile(__dirname + "/index.html");
});

app.listen(3000,function(){
    var utime = microtime.now();
    console.log("Working on port 3000, start at : " + utime);
});
