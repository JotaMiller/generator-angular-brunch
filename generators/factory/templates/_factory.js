'use strict';

/**
 * @ngdoc service
 * @name <%= appName %>.<%= name %>Factory
 * @description
 * # <%= name %>Factory
 * Factory in the <%= appName %>.
 */
angular.module('<%= appName %>')
  .factory('<%= name %>Factory', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });