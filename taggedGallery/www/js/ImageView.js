var ImageView = function(image) {

      this.initialize = function() {
          this.$el = $('<div/>');
      };

      this.render = function() {
          this.$el.html(this.template(image));
          return this;
      };

      this.initialize();
    };
