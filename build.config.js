module.exports = {

    build_dir: 'build',

    app_files: {
        js: ['src/**/*.js', '!src/assets/**/*.js'],
        tpl: ['src/**/*.tpl.html'],
        html: ['src/index.html']
    },

    bower_files: {
        js: [
            'dependencies/ng-ckeditor/libs/ckeditor/ckeditor.js',
            'dependencies/ng-ckeditor/libs/ckeditor/adapters/jquery.js',
            'dependencies/chell-iam/adapters/SCIMIamAdapter.js',
            'dependencies/chell-iam/adapters/SCIMIamMock.js',
            'dependencies/chell-cms/adapters/MockCmsAdapter.js',
            'dependencies/chell-cms/adapters/MockCmsMock.js'
        ],
        css: [

        ],
        assets: [

        ]
    }
};
