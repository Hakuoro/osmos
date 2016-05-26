requirejs.config({
    baseUrl: 'js',

    paths: {
        jquery: 'lib/jquery',
        underscore: 'lib/underscore-min',
        backbone: 'lib/backbone-min'
    }


});

require(['app'],
    function(App) {

    }
);