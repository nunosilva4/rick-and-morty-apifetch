requirejs.config({
    baseUrl: './js'
});

requirejs(['router'], function (router) {
    $(document).ready(router.init);
});