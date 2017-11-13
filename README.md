[logo]: https://github.com/TevinStuurland/DoorySpeech/blob/gh-pages/img/doory.jpg "Logo Title Text 2"

# DoorySpeech
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

# Setup
First you need to setup the html page start with this

[logo]: https://github.com/TevinStuurland/DoorySpeech/blob/gh-pages/img/doory.jpg "Logo Title Text 2"

# DoorySpeech
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

# Setup of Javascript (we have everything what now?)
Well now comes the hardest part, the manipulation.

1. Create a new javascript file
2. Save it and link it to the html page
1. Quick reminder, you already made the link in the HTML file 
```html 
<script src="pathto/js/script.js"></script>
``` 
3. Start creating variables
```javascript
var dooryButton = document.querySelector('.doory .button');
var dooryText = document.querySelector('.doory .text');
var dooryHello = ['Hello!', 'Hey!'];
```

1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.






