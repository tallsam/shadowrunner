app.views.MapView = Backbone.View.extend({

  initialize: function () {
  },

  activate: function () {
    var map;
    var marker;
    var infowindow;
    var watchID;

    var latlng = new google.maps.LatLng(55.17, 23.76);
    var myOptions = {
      zoom: 6,
      center: latlng,
      streetViewControl: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoomControl: true
    };
    var domElement = this.$('#gmap');
    this.map = new google.maps.Map(domElement.get(0), myOptions);
  },

  render: function () {
    this.$el.html(this.template());
    this.activate();
    return this;
  },

  back: function() {
    window.history.back();
    return false;
  }

});
