define(['view/list'], function (listView) {

    var public = {};
    var private = {}

    private.reRoute = function (id) {
        require(['router'], function (router) {
            router.setId(id);
            window.location.hash = 'character?id=' + id;
        })
    };

    public.init = () => {
        listView.show(id => private.reRoute(id));
    
        //service.list(view.show(id => private.reRoute(id))); //todo
    }

    return public;
}); 