var PhotoLibraryView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>Gallery</th>').append(
      this.collection.map(function(photo) {
        return new PhotoEntryView({model: photo}).render();
      })
    );
  }

});
