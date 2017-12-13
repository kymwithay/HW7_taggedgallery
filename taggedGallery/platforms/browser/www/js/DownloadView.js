var DownloadView = function (service) {
    var employeeListView;

    this.initialize = function () {
        // Define a div wrapper for the view (used to attach events)
        this.$el = $('<div/>');
        this.$el.on('keyup', '#urlbox', this.findByUrl);

        this.$el.on('keyup', '#tagbox', this.findByTag);
        employeeListView = new EmployeeListView();

        this.render();
    };

    this.render = function () {
      this.$el.html(this.template());
      $('.results', this.$el).html(employeeListView.$el);
      return this;
    };

    this.findByUrl = function () {
        service
            .findByDept($('#urlbox').val())
            .done(function (employees) {
                employeeListView.setEmployees(employees);
            });
    };

    this.findByTag = function () {
        service
            .findByTitle($('#tagbox').val())
            .done(function (employees) {
                employeeListView.setEmployees(employees);
            });
    };

    this.initialize();
};
