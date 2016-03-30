var AppModel = Backbone.Model.extend({

  initialize: function(params) {
    this.set('currentPhoto', new PhotoModel());
  },

  select: function() {
    this.trigger()
  }
});