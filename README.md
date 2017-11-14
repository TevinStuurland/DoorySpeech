[logo]: https://github.com/TevinStuurland/DoorySpeech/blob/gh-pages/img/doory.jpg "Logo Title Text 2"

# Speech (page voice control)

## What is this?
This code is created so you can create your own voice-controlled webpage.
With this code you can control different objects in your page, and if you're at a higher level of understanding Javascript. Then you can make an even more powerful application.


## What you need for this to work
1. https://github.com/TalAter/annyang a speech recognition api
2. https://github.com/TalAter/SpeechKITT a flexible GUI for interacting with Speech Recognition
3. https://p5js.org/download/ a processing javascript tool

## What now?
First put the annyang and speechkitt codes to your HTML head
* https://cdnjs.cloudflare.com/ajax/libs/annyang/2.6.0/annyang.min.js
* https://cdnjs.cloudflare.com/ajax/libs/SpeechKITT/0.3.0/speechkitt.min.js
* Link to P5.js in your root file, together with p5.sound and p5.dom js

Once you have this you can start with coding.

# Setup
First you need to setup the html page start with this

## DoorySpeech
What you need for this to work
1. https://github.com/TalAter/annyang a speech recognition api
2. https://github.com/TalAter/SpeechKITT a flexible GUI for interacting with Speech Recognition
3. https://p5js.org/download/ a processing javascript tool

## What now?
First put the annyang and speechkitt codes to your HTML head
* https://cdnjs.cloudflare.com/ajax/libs/annyang/2.6.0/annyang.min.js
* https://cdnjs.cloudflare.com/ajax/libs/SpeechKITT/0.3.0/speechkitt.min.js
* Link to P5.js in your root file, together with p5.sound and p5.dom js

Once you have this you can start with coding.

# Setup of html
1. First you need to setup the html page, start with this

```html
<html>
<head><!DOCTYPE html>
<html>
<head>
	<title>your Title</title>
	<meta charset='utf-8'>
	<link rel="stylesheet" href="pathto/css/main.css" type="text/css" media="all">
	<link rel="shortcut icon" href="pathto/img/favicon.jpg" />
</head>
<body>

<script src="pathto/js/script.js"></script>
<script src="pathto/js/p5/p5.js"></script>
<script src="pathto/js/p5/addons/p5.sound.js"></script>
<script src="pathto/js/p5/addons/p5.dom.js"></script>
</body>
</html>
``` 
Make sure that everything is linked correctly!

_why do you have the javascript code underneath the website?_

Well that is to make sure that everything is loaded before javascript
tries to change things in the website. With this project we're not creating 
new objects, we're manipulating them.

On to the next step!

2. Putting all object that are going to be manipulated into place!
```html
<body>
	<main>
		<div id="myContainer"></div>

		<h1>Doory</h1>

		<div class="doory">
			<button class="button">Open</button>
			<p class="text"></p>
		</div>
	</main>

	<script src="js/script.js"></script>
	<script src="js/p5/p5.js"></script>
	<script src="js/p5/addons/p5.sound.js"></script>
	<script src="js/p5/addons/p5.dom.js"></script>
</body>
``` 
_what are all these going to be used for?_
Well we start with the name of the project to make 
clear what people are working with here.

The div is created for everything that is going to be manipulated
by Doory. And the main is just a personal preference ;)

# Use Annyang.js (we have everything what now?)
Well now comes the hardest part, the manipulation.

1. Create a new javascript file
2. Save it and link it to the html page 
_Quick reminder, you already made the link in the HTML file_ 
```html 
<script src="pathto/js/script.js"></script>
``` 
4. Start creating variables _we'll need them later_
```javascript
var dooryButton = document.querySelector('.doory .button');
var dooryText = document.querySelector('.doory .text');
var dooryHello = ['Hello!', 'Hey!'];
```
5. Start initializing Annyang + SpeechKitt
```javascript
if (annyang) {
  // Add our commands to annyang
  annyang.addCommands({
    'hello': function() { alert('Hello world!'); }
  });

  // Tell KITT to use annyang
  SpeechKITT.annyang();

  // Define a stylesheet for KITT to use
  SpeechKITT.setStylesheet('//cdnjs.cloudflare.com/ajax/libs/SpeechKITT/0.3.0/themes/flat.css');

  // Render KITT's interface
  SpeechKITT.vroom();
}
</script>
```
6. Test Test TEST!!!
I can't stress more that you should test, if anything is going wrong
rollback and try it again. If it's really not working shoot me a message.

If the testing went well then proceed to the next step

7. Creating our own commands
Well we made it pretty far huh? Now it's time to do some cool stuff with Annyang.
I did something small but pretty interesting. I wanted a class to be added to dooryButton when I said 'Open'. This is cool but actually pretty easy to do.

```javascript
if (annyang) {
	// Let's define a command.
	var commands = {
		'open': function() { 
				dooryButton.classList.add(".spin::before", "spin", ".spin::after"); 
				dooryButton.classList.add("circle"); 
		}
	};
}
```
That's all you need to create a cool interaction with voice control
but you can go even further.

```javascript
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
```

If you go even beyond that, you can have a full conversation with Annyang.
It all depends on the time and effort.

# Using P5.js (we're not done yet!)
remember the P5 you linked in your HTML? Yeah, we're gonna do some cool stuff
with that. 

_What is P5.js?_
It is a javascript library which makes it possible to draw
on a canvas with different types of input. Including text, video, webcam and **sound**

yep, I felt that too, that tingling feeling you get when you hear something
awesome.

_But how can I use it? It sounds a bit complicated.._
Don't be scared, that's why I'm here, I already did all the hardwork 
and debugging for you!

```javascript
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

  // If the volume > 0.1,  the background color changes.
  // The louder the volume, the longer the background remains changed.
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
```

So essentially what this does is, it picks up the sound of your microphone.
Once your microphone detects a certain volume height coming in, the if else
statement kicks in.

```javascript
var threshold = 0.1;
  if (volume > threshold) {
    document.getElementById("myContainer").style.background = "#487c67";
  }else{
		document.getElementById("myContainer").style.background = "none";
	}
```

The lower the threshold, the quicker it kicks in. 
once it does you can add whatever you want to that if else statement
you can even do this:

```javascript
// If the volume > 0.1,  a rect is drawn at a random location.
  // The louder the volume, the larger the rectangle.
  var threshold = 0.1;
  if (volume > threshold) {
    stroke(0);
    fill(0, 100);
    rect(random(40, width), random(height), volume*50, volume*50);
  }

  // Graph the overall potential volume, w/ a line at the threshold
  var y = map(volume, 0, 1, height, 0);
  var ythreshold = map(threshold, 0, 1, height, 0);

  noStroke();
  fill(175);
  rect(0, 0, 20, height);
  // Then draw a rectangle on the graph, sized according to volume
  fill(0);
  rect(0, y, 20, y);
  stroke(0);
  line(0, ythreshold, 19, ythreshold);
```

Now you will see a visual representation of your sound 
and... there will be random rectangles added to your canvas.
On random spots too, pretty cool huh.

# Why were you telling me all this in the first place?
Well I just want to be able to teach people cool things, also I want 
to show you that even though it can be hard to code sometimes the reward
can be astonishingly good. I mean how great does it feel once you're able 
to create what you had in your head?

I hope this was useful to you, and if not tell me why, I'm pretty curious.






