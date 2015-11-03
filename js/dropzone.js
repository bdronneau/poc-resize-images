// loaded.

// Disabling autoDiscover, otherwise Dropzone will try to attach twice.
Dropzone.autoDiscover = false;
// or disable for specific dropzone:
// Dropzone.options.myDropzone = false;

$(function() {
  // Now that the DOM is fully loaded, create the dropzone, and setup the
  // event listeners
  var myDropzone = new Dropzone("#my-awesome-dropzone");
  myDropzone.on("sending",function(file, xhr, formData) {
    console.log('Sending...');
    //crop file
    var fileCrop = FileAPI.Image(file)
      .resize(1920, 1440, 'max')
      .get(function (err, img){
        //Async ici
        console.log('Image crop');
    });
    console.log(formData);
    console.log(file.name);
    formData.append(file, fileCrop, file.name);
  });
})
