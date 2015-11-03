var preview = document.getElementById('previewFiles');
var upload = document.getElementById('uploadFiles');
var inputFiles = document.getElementById('myFiles');
var plop;


// Change for inputFiles for dynamic upload at selection
FileAPI.event.on(plop, 'change', function (evt){
  var files = FileAPI.getFiles(evt); // Retrieve file list

  FileAPI.filterFiles(files, function (file, info/**Object*/){
    if( /^image/.test(file.type) ){
      return  info.width >= 320 && info.height >= 240;
    }
    return false;
  }, function (files/**Array*/, rejected/**Array*/){
    if (files.length) {
      FileAPI.each(files, function (file){
        console.log('start working');
          // Make preview 100x100
        FileAPI.Image(file).preview(100).get(function (err, img){
          images.appendChild(img);
          console.log('Add image');
        });
        //crop file
        file = FileAPI.Image(file)
          .resize(1920, 1440, 'max')
          .get(function (err, img){
            console.log('Image crop')
        });
        // Uploading File
        FileAPI.upload({
          url: 'http://localhost:3000',
          files: { images: file },
          imageTransform: {
            type: 'image/jpeg'
          },
          progress: function (evt){},
          complete: function (err, xhr){
            console.log('Image is upload')
          }
        });
      });
    }
  });
});

FileAPI.event.on(preview, 'click', function (evt){
  console.log('Fire event preview');
  var files = FileAPI.getFiles(inputFiles); // Retrieve file list
    if (files.length) {
      FileAPI.each(files, function (file){
        console.log('start working preview');
          // Make preview 100x100
        FileAPI.Image(file).preview(100).get(function (err, img){
          images.appendChild(img);
          console.log('Add image');
        });
      });
    };
});

FileAPI.event.on(upload, 'click', function (evt){
  console.log('Fire event upload');
  var files = FileAPI.getFiles(inputFiles); // Retrieve file list

  FileAPI.filterFiles(files, function (file, info/**Object*/){
    if( /^image/.test(file.type) ){
      return  info.width >= 320 && info.height >= 240;
    }
    return false;
  }, function (files/**Array*/, rejected/**Array*/){
    if (files.length) {
      FileAPI.each(files, function (file){
        console.log('start working');
        //crop file
        file = FileAPI.Image(file)
          .resize(1920, 1440, 'max')
          .get(function (err, img){
            console.log('Image crop')
        });
        // Uploading File
        FileAPI.upload({
          url: 'http://localhost:3000',
          files: { images: file },
          imageTransform: {
            type: 'image/jpeg'
          },
          progress: function (evt){},
          complete: function (err, xhr){
            console.log('Image is upload')
          }
        });
      });
    }
  });
});
