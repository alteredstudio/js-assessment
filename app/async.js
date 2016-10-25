if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(Value) {
      var data = $.Deferred();
      setTimeout(function() {
        data.resolve(Value);
      }, 15);
      return data.promise();
    },
    manipulateRemoteData : function(URL) {
      var data = $.Deferred();
      $.ajax(URL).then(function(resp) {
        var people = $.map(resp.people, function(person) {
          return person.name;
        });
        data.resolve(people.sort());
      });
      return data.promise();
    }
  };
});
