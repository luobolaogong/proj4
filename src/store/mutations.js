export default {
  resetMap(state, somePayload) {
    // console.log("In mutations.js.resetMap(state) probably because of actions.js.resetMap() called commit('resetMap') and here comes a call to state.theMap.setView(), which will fail");
    state.theMap.setView([51.5007, -0.1246], 11);
    // console.log("Leaving mutations.js.resetMap(state)");
  },
  // saveMap(state, somePayload) {
  //   console.log("In mutations.js.resetMap(state) probably because of actions.js.resetMap() called commit('resetMap') and here comes a call to state.theMap.setView(), which will fail");
  //   state.theMap.setView([51.5007, -0.1246], 11);
  //   console.log("Leaving mutations.js.resetMap(state)");
  // },
  saveMap(state, somePayload) {
    console.log("In mutations.js.saveMap(state, payload)");
    // this next line is the call into the plugin code that eats up all the tiles images in the view
    // associated with a canvas, and gets them ready to write/save to an image.
    var theMap = state.theMap;
    leafletImage(state.theMap, function (err, canvas) {
      console.log("In mutations.js.saveMap leafletImage callback");
      // Here's the callback code that leafletImage eventually calls when it's got the image.
      // First prepare a name for the file, and then causes it to be "downloaded" to the user's file system.
      var date = new Date();
      var dateFormatted = date.getFullYear()
        + '-' + (date.getMonth() + 1)
        + '-' + date.getDate()
        + '-' + date.getHours()
        + '-' + date.getMinutes()
        + '-' + date.getSeconds();

      // Get the map image from 'canvas' and slap it into the page
      var img = document.createElement('img');
      var dimensions = theMap.getSize();
      img.width = dimensions.x;
      img.height = dimensions.y;
      img.src = canvas.toDataURL(); // This becomes a really long base64 string of encoded bits
      //window.location.href = img.src.replace('image/png', 'image/octet-stream');
      var link = document.createElement("a");
      link.setAttribute("href", img.src);
      link.setAttribute("download", "mapimage" + dateFormatted);  // saves as a png file
      link.click();
      console.log("Leaving mutations.js.saveMap leafletImage callback");
    });
    console.log("Leaving mutations.js.saveMap()");
  }

};
