define(function () {

    var public = {};
    var private = {};
    
    private.id = () => window.location.hash.substring(14);

    private.show = onClick => character => {
        var div = $('#app');
        div.empty();

        div.append($('<h1>')
            .append(character.name)
            .css('color', 'white')
            .css('textAlign', 'center')
            .append($('<br><img>')
                .attr('src', character.image)
                .css('marginTop', '20px')
            )
            .append($('<br><button class="btn btn-info">')
            .append('Back to Search')
            .click(onClick)
            ))
    }

    public.show = (onClick) => {
        $.get({
            url: 'https://rickandmortyapi.com/api/character/' + private.id(),
            success: private.show(onClick)
        });
    }

    return public;
}); 