var SearchView = function (service) {
    var employeeListView;

    this.initialize = function () {
        // Define a div wrapper for the view (used to attach events)
        this.$el = $('<div/>');
        this
            .$el
            .on('keyup', '#string', this.findByString);
        employeeListView = new EmployeeListView();


        this.render();
    };

    this.render =  function () {
        this.$el.html(this.template());
        $('.results', this.$el).html(employeeListView.$el);
        return this;
    };

    this.findByString = function() {
        service.findByString($('#string').val().trim().done(function(employees) {
            employeeListView.setEmployees(employees);
        }));
    };


    this.initialize();
};
