var PhotoDisplayView = Backbone.View.extend({

  template: _.template('<img src="<%= url %>" class="display-img"><p class="display-img-title"><%= title %></p>'),

  initialize: function(params) {
    this.render();
    console.log(params);
    this.collection.on('display', this.render, this);
  },

  render: function(param) {
    return param === undefined ? this.$el.html(this.template(this.model.attributes)) : this.$el.html(this.template(param.attributes));
  }

});
