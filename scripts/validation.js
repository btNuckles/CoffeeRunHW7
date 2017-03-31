(function (window) {
  'use strict';
  var App = window.App || {};

  var Validation = {
      isCompanyEmail: function (email) {
        return /.+@bignerdranch\.com$/.test(email);
      },

      isDecaf: function (order, slider) {
        var checker = new RegExp('decaf','g')
        if (slider > 20 && (checker.test(order) === true))
        {
          return true;
        }
          return false;
      }
  };

  App.Validation = Validation;
  window.App = App;
})(window);
