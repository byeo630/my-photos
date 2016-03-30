var PhotoDisplayView = Backbone.View.extend({

  template: _.template('<img src="<%= url %>">'),

  initialize: function() {
    this.render();
    // this.collection.on('display', this.render, this);
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});
