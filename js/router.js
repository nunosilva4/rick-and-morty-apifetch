define(function () {

    var private = {};
    var public = {};

    private.id = 1;

    public.setId = function(id) {
        private.id = id;
    }

    private.routes = {
        list: { hash: () =>  '#list', controller: 'list' },
        character: { hash: () => '#character?id=' + private.id, controller: 'character' }
    }

    private.defaultRoute = private.routes.list;

    private.initController = function (route) {
        require(['controller/' + route.controller], function (controller) {
            controller.init();
        });
    };

    private.getRoute = function () {
        return Object.values(private.routes).find(function (route) {
            return window.location.hash === route.hash();
        });
    };

    window.onhashchange = function () {
        try {
            private.initController(private.getRoute());
        } catch (error) {
            window.location.hash = private.defaultRoute.hash();
        }
    };

    public.init = () => {
        private.initController(
            private.getRoute() || private.defaultRoute
        );
    }

    return public;
});