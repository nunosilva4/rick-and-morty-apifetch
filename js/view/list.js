define(function () {

    var public = {};
    var private = {};

    private.textStyle = {
        'text-align': 'center',
        'color': '#5bc1df',
        '-webkit-text-stroke-width': '1px',
        '-webkit-text-stroke-color': 'white',
        'fontFamily': 'Big Caslon',
        'fontSize': '50px'
    }

    private.btnStyle = {
        'border': 'solid',
        'marginTop': '2px',
        'borderWidth': '1px',
        'alignSelf': 'center',
        'width': '40%'
    }

    private.prevBtn = {
        'width': '200px',
        'marginRight': '10px',
        'border': 'solid',
        'borderColor': 'white',
        'borderWidth': '1px'
    }

    private.nextBtn = {
        'width': '200px',
        'marginLeft': '10px',
        'border': 'solid',
        'borderColor': 'white',
        'borderWidth': '1px'
    }

    private.resetBtn = {
        'border': 'solid',
        'borderColor': 'white',
        'borderWidth': '1px',
        'width': '100px'
    }

    private.pageNumber = !private.pageNumber ? 1 : private.pageNumber;

    private.show = onClick => characters => {
        var div = $('#app');
        div.empty();

        div.append($('<h1>')
            .append('Characters')
            .css(private.textStyle)
        )

        for (var c of characters.results) {
            div.append($('<button class="btn btn-info">')
                .append(c.name)
                .css(private.btnStyle)
                .click((id => () => onClick(id))(c.id)));
        }

        div.append($('<div id="nav">')
            .append($('<button class="btn btn-info">')
                .append('Previous Page')
                .css(private.prevBtn)
                .click(function () { private.pageNumber > 1 ? private.pageNumber-- : null; public.show(onClick) })
            )
            .append($('<button class="btn btn-warning">')
                .append('Reset')
                .css(private.resetBtn)
                .click(function () { private.pageNumber = 1; public.show(onClick) })
            )
            .append($('<button class="btn btn-info">')
                .append('Next Page')
                .css(private.nextBtn)
                .click(function () { private.pageNumber < characters.info.pages ? private.pageNumber++ : null; public.show(onClick) })
            )
            .append('<p>')
            .append('<b>Page: ' + private.pageNumber)
            .css('color', 'white')
        )
    }

    public.show = (onClick) => {
        $.get({
            url: 'https://rickandmortyapi.com/api/character?page=' + private.pageNumber,
            success: private.show(onClick)
        });
    }

    return public;
});