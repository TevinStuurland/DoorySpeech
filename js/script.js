var dooryButton = document.querySelector('.doory .button');
var dooryText = document.querySelector('.doory .text');
var dooryHello = ['Hello', 'Hey'];

if (annyang) {
  // Let's define a command.
  var commands = {
    'hello': function() {
        for (var i = 0; i < dooryHello.length; i++) {
            var helloThere = dooryHello[i];
            console.log(helloThere); 
        }
        
        dooryText.textContent += helloThere; 
        dooryText.classList.add("dissappear");
    }, 

    'open': function() { 
        dooryButton.classList.add("spin"); 
        dooryButton.classList.add("circle"); 
    }
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

function a(x) {   
  function b(y) { 
    return x + y; 
  }
  return b;       
}