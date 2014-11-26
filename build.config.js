module.exports = {
 
  build_dir: 'build',

  app_files: {
    js: [ 'src/**/*.js', '!src/assets/**/*.js' ],
    tpl: [ 'src/**/*.tpl.html' ],
    html: [ 'src/index.html' ]
  },

  bower_files: {
    js: [
      'dependencies/angular/angular.js',
      'dependencies/angular-resource/angular-resource.js',
      'dependencies/angular-bootstrap/ui-bootstrap-tpls.min.js',
      'dependencies/angular-ui-router/release/angular-ui-router.js',
      'dependencies/angular-ui-utils/modules/route/route.js'
    ],
    css: [
      'dependencies/bootstrap/dist/css/bootstrap.css',
      'dependencies/bootstrap/dist/css/bootstrap.css.map'
    ],
    assets: [
    ]
  }
};
