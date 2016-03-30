var AppView = Backbone.View.extend({
  
  initialize: function(params) {
    // console.log(this.model.get('library').models[0]);
    this.photoDisplayView = new PhotoDisplayView({model: this.model.get('library').models[0]});
    this.photoLibraryView = new PhotoLibraryView({collection: this.model.get('library')});
  },
  render: function() {
    return this.$el.html([
      this.photoLibraryView.$el,
      this.photoDisplayView.$el
    ]);
  }
});