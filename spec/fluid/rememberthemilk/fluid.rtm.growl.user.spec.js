Screw.Unit(function() {
  describe("fluid.rtm.growl.user", function() {
    describe("statusBox.setText", function() {
      it("should send a growl notification", function() {
        var growlNotified = false;

        window.fluid = {
          showGrowlNotification: function(settings) {
            growlNotified = true;
          }
        };

        statusBox.setText("text");

        expect(growlNotified).to(be_true);
        expect(originalSetTextCalled).to(be_true);
      });
    });
  });
});
