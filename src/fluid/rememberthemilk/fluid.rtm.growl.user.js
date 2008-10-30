// ==UserScript==
// @name        RTM Growl
// @namespace   http://rememberthemilk.com
// @description Growl notifications for RTM
// @include     *rememberthemilk.com/*
// @author      Josh Knowles
// ==/UserScript==

(function () {
  if (window.fluid) {
    var originalStatusBox = statusBox.setText;

    var growlStatusBox = function(text, x, y) {
      window.fluid.showGrowlNotification({
          title: "RTM",
          description: text,
          priority: 1,
          sticky: false,
          identifier: "RTM"
      });

      originalStatusBox.call(statusBox, text, x, y);
    };

    statusBox.setText = growlStatusBox;
  }
})();