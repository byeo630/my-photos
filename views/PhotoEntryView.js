var PhotoEntryView = Backbone.View.extend({
//needs changes 
  tagName: 'tr',

  template: _.template('<td><%= title %>'),

  initialize: function() {
    // this.model.on('change:plays', this.render, this);
  },

  events: {
    'click': function() {
      this.model.display();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});
