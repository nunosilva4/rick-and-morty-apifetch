define(['view/character'], function (characterView) {

    var public = {};
    var private = {}

    private.reRoute = function () {
        window.location.hash = 'list';
    };

    public.init = () => {
        characterView.show(private.reRoute);
    }
    
    return public;
});