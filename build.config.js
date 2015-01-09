module.exports = {

    build_dir: 'build',

    app_files: {
        js: ['src/**/*.js', '!src/assets/**/*.js'],
        tpl: ['src/**/*.tpl.html'],
        html: ['src/index.html'],
        css: ['src/**/*.css']
    },

    bower_files: {
        js: [
            'dependencies/jquery/dist/jquery.js',
            'dependencies/angular/angular.js',
            'dependencies/angular-mocks/angular-mocks.js',
            'dependencies/angular-resource/angular-resource.js',
            'dependencies/bootstrap/dist/js/bootstrap.js',
            'dependencies/angular-bootstrap/ui-bootstrap-tpls.min.js',
            'dependencies/angular-ui-router/release/angular-ui-router.js'
        ],
        css: [
            'dependencies/bootstrap/dist/css/bootstrap.css',
            'dependencies/bootstrap/dist/css/bootstrap.css.map',
            'dependencies/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf',
            'dependencies/bootstrap/dist/fonts/glyphicons-halflings-regular.woff'
        ],
        assets: [

        ]
    }
};
