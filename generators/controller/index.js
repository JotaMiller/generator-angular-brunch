'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');


module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      chalk.red('Controller') + ' generator!'
    ));

    var prompts = [{
      type    : 'input',
      name    : 'name',
      message : 'Controller name',
      default : 'Main'
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copyTpl(
        this.templatePath('_controller.js'),
        this.destinationPath('app/controllers/'+ this.props.name +'.js'),{
          name: this.props.name,
          appName: this.config.get('appName')
        }
      );
    },
  },
});
