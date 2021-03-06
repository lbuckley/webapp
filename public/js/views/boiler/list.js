/*
 * List view
 */

define([
  // dependencies
  'jQuery',
  'Underscore',
  'Backbone'
], function ($, _, Backbone) {
  return Backbone.View.extend({
    
    tagName: 'div',

    attributes: function () {
      return {};
    },

    initialize: function (params, parent) {
      this.parent = parent;
      this.views = [];
      this.setElement(this.make(this.tagName, this.attributes()));
      this.$el.hide();
      if (this.parent && this.model.get('position'))
        this.parent.add(this.$el, this.model.get('position').y.toUpperCase());
      this.on('rendered', this.setup, this);
    },

    render: function () {
      this.$el.html(this.template());
      this.trigger('rendered');
      return this;
    },

    setup: function () {
      return this;
    },

    row: function (model) {
      var view = new this.RowView({ model: model }, this);
      this.views.push(view);
      return view.toHTML();
    }

  });
});
