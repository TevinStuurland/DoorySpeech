var dooryButton = document.querySelector('.doory-button');

if (annyang) {
  // Let's define a command.
  var commands = {
    'hello': function() { alert('Hello world!'); }, 
    'open': setTimeout(function() { dooryButton.classList.add("circle"); dooryButton.classList.add("spin");, 1000);}
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();

  // Tell KITT to use annyang
  SpeechKITT.annyang();

  // Define a stylesheet for KITT to use
  SpeechKITT.setStylesheet('https://cdnjs.cloudflare.com/ajax/libs/SpeechKITT/0.3.0/themes/flat.css');

  // Render KITT's interface
  SpeechKITT.vroom();

  SpeechKITT.rememberStatus(120);
}

var commands = {
  // annyang will capture anything after a splat (*) and pass it to the function.
  // e.g. saying "Show me Batman and Robin" is the same as calling showFlickr('Batman and Robin');
  'show me *tag': showFlickr,

  // A named variable is a one word variable, that can fit anywhere in your command.
  // e.g. saying "calculate October stats" will call calculateStats('October');
  'calculate :month stats': calculateStats,

  // By defining a part of the following command as optional, annyang will respond to both:
  // "say hello to my little friend" as well as "say hello friend"
  'say hello (to my little) friend': greeting
};

var showFlickr = function(tag) {
  var url = 'http://api.flickr.com/services/rest/?tags='+tag;
  $.getJSON(url);
}

var calculateStats = function(month) {
  $('#stats').text('Statistics for '+month);
}

var greeting = function() {
  $('#greeting').text('Hello!');
}
