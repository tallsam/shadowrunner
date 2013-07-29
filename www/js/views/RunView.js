app.views.RunView = Backbone.View.extend({

  activate: function() {
    document.addEventListener("deviceready", onDeviceReady, false);
    navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError);
  },

  onSuccess: function (position)  {
    var element = document.getElementById('gps-status');
    element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
      'Longitude: '          + position.coords.longitude             + '<br />' +
      'Altitude: '           + position.coords.altitude              + '<br />' +
      'Accuracy: '           + position.coords.accuracy              + '<br />' +
      'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
      'Heading: '            + position.coords.heading               + '<br />' +
      'Speed: '              + position.coords.speed                 + '<br />' +
      'Timestamp: '          +                                   position.timestamp          + '<br />';
  },

  onError: function (error) {
    alert('code: '    + error.code    + '\n' +
      'message: ' + error.message + '\n');
  },

  render: function () {
    this.$el.html(this.template());
    this.activate();
    return this;
  },

  events: {
    "click .back-button": "back"
  },

  back: function () {
    window.history.back();
    return false;
  }



});

function onDeviceReady() {
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

