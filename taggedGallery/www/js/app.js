// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {
  FastClick.attach(document.body);

    /* ---------------------------------- Local Variables ---------------------------------- */
    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
    SearchView.prototype.template = Handlebars.compile($("#search-tpl").html());
    EmployeeListView.prototype.template = Handlebars.compile($("#employee-list-tpl").html());
    DownloadView.prototype.template = Handlebars.compile($("#download-tpl").html());

    var slider = new PageSlider($('body'));

    var service = new EmployeeService();
    service
        .initialize()
        .done(function () {
            router
                .addRoute('', function () {
                    slider.slidePage(new HomeView(service).render().$el);
                });

            router.addRoute('name', function () {
                slider.slidePage(new DownloadView(service).render().$el);
            });

            router.addRoute('dept', function () {
                slider.slidePage(new SearchView(service).render().$el);
            });

            // router.addRoute('employees/:id', function (id) {
            //     service
            //         .findById(parseInt(id))
            //         .done(function (employee) {
            //             slider.slidePage(new EmployeeView(employee).render().$el);
            //         });
            // });

            router.start();

        });

}());
