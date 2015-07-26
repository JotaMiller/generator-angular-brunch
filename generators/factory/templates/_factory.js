'use strict';

/**
 * @ngdoc service
 * @name <%= appName %>.<%= name %>
 * @description
 * # <%= name %>
 * Factory in the <%= appName %>.
 */
angular.module('<%= appName %>')
  .factory('<%= name %>', function () {
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