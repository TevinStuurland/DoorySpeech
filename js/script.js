var dooryButton = document.querySelector('.doory .button');
var dooryText = document.querySelector('.doory .text');

if (annyang) {
  // Let's define a command.
  var commands = {
    'hello': function() {
        dooryText.textContent += "Hello!"; 
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