app.routers.AppRouter = Backbone.Router.extend({

  routes: {
    "": "home",
    "map": "map",
  },

  initialize: function () {
     app.slider = new PageSlider($('body'));
  },

  home: function () {
    // Since the home view never changes, we instantiate it and render it only once
    if (!app.homeView) {
        app.homeView = new app.views.HomeView();
        app.homeView.render();
    } else {
        console.log('reusing home view');
        app.homeView.delegateEvents(); // delegate events when the view is recycled
    }
    app.slider.slidePage(app.homeView.$el);
  },

  map: function () {
    if (!app.mapView) {
      app.mapView = new app.views.MapView();
      app.mapView.render();
    } else {
      app.mapView.delegateEvents();
    }
    app.slider.slidePage(app.mapView.$el);
  },

});
