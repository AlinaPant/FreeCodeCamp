$(document).ready(function() {
	
	var quoteArr;
	var defaultQuote = '“When you\'re miserable, you need to make someone even more miserable than yourself.”';
	var author = ' - Lucy "Elfen Lied"';
	var rand;
	var randQuote;
	
	$("#social_share").on("click", function() {
		if (randQuote == undefined) {
			window.open("https://twitter.com/intent/tweet?text=" + defaultQuote + author);
		}
		else {
			window.open("https://twitter.com/intent/tweet?text=" + randQuote + author);
		}
	});
	
  $("button").on("click", function () {
		forQuote();
  });
	
	function forQuote() {
		quoteArr = ['“When you\'re miserable, you need to make someone even more miserable than yourself.”', '“The ones who aren\'t human... the ones who aren\'t people... are actually YOU!”', '“I hate these horns.”', '“You\'re a liar”', '“If i ever end up killing a lot of people... Kouta... Then please, kill me...”', '“Aren’t we all monsters inside?”', '“All this time, I’ve lived in hope of telling you how sorry I am, I’ve fought armies, just to have this chance, but now, there’s nothing I can say.. That’s good enough.”'];
		rand = Math.floor(Math.random() * quoteArr.length);
		randQuote = quoteArr[rand];
		
		$(".quote").html(randQuote);
	}
	
});