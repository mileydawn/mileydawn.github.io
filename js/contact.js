var firstPhrase = "I can help with your project?";
var secondPhrase = "Let's contact!";
var counter = 0;
var spelling = true;
var autorun = setInterval(function(){
	spellContact(firstPhrase);
}, 80);

function spellContact(fullphrase){
	if (spelling) {
		if (counter<fullphrase.length) {
			console.log(fullphrase[counter]);
			$('.typed-text').append(fullphrase[counter]);
			counter++;
		}
		else {
			spelling = false;
		}
	} else {
		if (counter>-1) {
			$('.typed-text').html(fullphrase.slice(0,counter));
			counter--;
		}
		else {
			spelling = true;
			clearInterval(autorun);

			if (fullphrase === firstPhrase) {
				autorun = setInterval(function(){
					spellContact(secondPhrase);
				}, 80);
			}
			else if (fullphrase === secondPhrase) {
				autorun = setInterval(function(){
					spellContact(firstPhrase);
				}, 80);
			}

			// clearInterval(autorun);
		}
	}
}