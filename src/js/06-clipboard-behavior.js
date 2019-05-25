(function() {
  "use strict";
  var clipboard = new ClipboardJS(".copybtn");

  clipboard.on("success", function(e) {
    //console.info('Text:', e);
    //e.clearSelection();
  });

  clipboard.on("error", function(e) {
    console.error("Action:", e.action);
    console.error("Trigger:", e.trigger);
  });
})();
