exports.config =
  # See http://brunch.io/#documentation for docs.
  modules:
    definition: false
    wrapper: false
    
  files:
    javascripts:
      joinTo:
        'app.js': /^app/
        'vendor.js': /^(bower_components|vendor)/
    stylesheets:
      joinTo: 'app.css'

    templates:
      joinTo:
        'js/templates.js': /.+\.jade$/

  plugins:
   
    jade:
      options:          # can be added all the supported jade options
        pretty: yes 
    jade_angular:
      modules_folder: 'views'
      locals: {}