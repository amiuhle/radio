(function(document) {
  'use strict';

  var m3u = /(?:#EXTINF:-?\d*,(.*)\n)*(http.*)/g;

  document.addEventListener('polymer-ready', function() {
    var radio = document.querySelector('#radio');
    radio.addStation = function(e, detail/*, target*/) {
      console.log('addStation');
      var content = detail.body;
      var match;
      while((match = m3u.exec(content)) !== null) {
        var /*entry = match[0],*/
            name = match[1],
            url = match[2];
        this.url = url;
        this.stations.push({
          name: name,
          url: url
        });
      }
    };
  });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
