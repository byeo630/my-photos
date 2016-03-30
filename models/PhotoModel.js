var PhotoModel = Backbone.Model.extend({
  defaults: {
    filepath: '',
    description: ''
  },

  display: function() {
    this.trigger('display', this);
  }
});