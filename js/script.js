var dooryButton = document.querySelector('.doory .button');
var dooryText = document.querySelector('.doory .text');
var dooryHello = ['Hello!', 'Hey!'];

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
        dooryButton.classList.add("spin", ".spin::before", ".spin::after"); 
        dooryButton.classList.add("circle"); 
    }, 

    'help': function() { 
        dooryButton.classList.add("spin emergency"); 
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

//P5 code

var mic, fft;

function setup() {
   createCanvas(710,400);
   noFill();

   mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT();
   fft.setInput(mic);dwa
}

function draw() {
   background(200);

   var spectrum = fft.analyze();

   beginShape();
   for (i = 0; i<spectrum.length; i++) {
    vertex(i, map(spectrum[i], 0, 255, height, 0) );
   }
   endShape();
}
