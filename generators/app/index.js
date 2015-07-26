'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');
var s = require("underscore.string");
var slugify = require("underscore.string/slugify");
var classify = require("underscore.string/classify");


module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the luminous ' + chalk.red('AngularBrunch') + ' generator!'
    ));

    var prompts = [{
      type    : 'input',
      name    : 'name',
      message : 'Your project name',
      store   : true,
      default : this.appname // Default to current folder name
    },
    {
      type    : 'input',
      name    : 'description',
      message : 'Your project description',
      default : 'The awesome project!'
    }
    ];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),{
          name: this.props.name,
          description: this.props.description
        }
      );
      this.fs.copyTpl(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json'),{
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_brunch-config.coffee'),
        this.destinationPath('brunch-config.coffee'),{
          name: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_README.md'),
        this.destinationPath('README.md'),{
          name: this.props.name,
          description: this.props.description
        }
      );
      this.fs.copyTpl(
        this.templatePath('_index.jade'),
        this.destinationPath('app/index.jade'),{
          name: this.props.name,
          appName: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_app.js'),
        this.destinationPath('app/scripts/app.js'),{
          appName: this.props.name
        }
      );
      this.fs.copyTpl(
        this.templatePath('_main.js'),
        this.destinationPath('app/scripts/controllers/main.js'),{
          appName: this.props.name
        }
      );
      this.fs.copy(
        this.templatePath('_main.jade'),
        this.destinationPath('app/views/main.jade')
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
    },

    misc: function () {
      mkdirp('app/views');
      mkdirp('app/styles');
      mkdirp('app/scripts');
      mkdirp('app/assets');
    }
  },

  install: function () {
    this.config.set('appName', this.props.name);
    this.installDependencies();
  }
});