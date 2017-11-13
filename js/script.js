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
			dooryButton.value = "Open";
			dooryButton.classList.add(".spin::before", "spin", ".spin::after"); 
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
var input;
var analyzer;

function setup() {
  var myCanvas = createCanvas(1920, 974);
	myCanvas.parent('myContainer');


  // Create an Audio input
  input = new p5.AudioIn();

  input.start();
}

function draw() {
  // Get the overall volume (between 0 and 1.0)
  var volume = input.getLevel();

  // If the volume > 0.1,  a rect is drawn at a random location.
  // The louder the volume, the larger the rectangle.
  var threshold = 0.1;
  if (volume > threshold) {
    document.getElementById("myContainer").style.background = "#487c67";
  }else{
		document.getElementById("myContainer").style.background = "none";
	}

  // Graph the overall potential volume, w/ a line at the threshold
  var y = map(volume, 0, 1, height, 0);
  var ythreshold = map(threshold, 0, 1, height, 0);
}