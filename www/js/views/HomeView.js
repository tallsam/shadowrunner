app.views.HomeView = Backbone.View.extend({

  initialize: function () {
  },

  render: function () {
    this.$el.html(this.template());
    $('.scroller', this.el).append('appended!');
    console.log(this);
    return this;
  },

});
