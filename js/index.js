var quotes = ["You can't be a real country unless you have a beer and an airline. It helps if you have some kind of a football team, or some nuclear weapons, but at the very least you need a beer.", "Without music to decorate it, time is just a bunch of boring production deadlines or dates by which bills must be paid.", "Politics is the entertainment branch of industry.", "Most people wouldn't know music if it came up and bit them on the ass.", "You can't always write a chord ugly enough to say what you want to say, so sometimes you have to rely on a giraffe filled with whipped cream.", "A composer is a guy who goes around forcing his will on unsuspecting air molecules, often with the assistance of unsuspecting musicians.", "Interviewer\: 'So Frank, you have long hair. Does that make you a woman?'  Frank Zappa\: 'You have a wooden leg. Does that make you a table?", "There is more stupidity than hydrogen in the universe, and it has a longer shelf life.", "My best advice to anyone who wants to raise a happy, mentally healthy child is: Keep him or her as far away from a church as you can.", "Music is the only religion that delivers the goods.", "There is no such thing as a dirty word. Nor is there a word so powerful, that it's going to send the listener to the lake of fire upon hearing it.", "Modern Americans behave as if intelligence were some sort of hideous deformity.", "Writing about music is like dancing about architecture.", "Republicans stand for raw, unbridled evil and greed and ignorance smothered in balloons and ribbons.", "Nobody looks good with brown lipstick on.", "The only difference between a cult and a religion is the amount of real estate they own.", "Republican is fine, if your a millionaire. Democrats is fair, if all you own is what you wear. Neither of them's really right, cause neither of them care.", "Let’s be realistic about this, the guitar can be the single most blasphemous device on the face of the earth. That’s why I like it.",  "The disgusting stink of a too-loud electric guitar: now that’s my idea of a good time.", "'Conducting' is when you draw 'designs' in the nowhere-with a stick, or with your hands-which are interpreted as 'instructional messages' by guys wearing bow ties who wish they were fishing.", "Anything played wrong twice in a row is the beginning of an arrangement.", "Just be glad you don't live in one of those little countries where at this very moment, music is severely restricted, or as it is in Iran, totally illegal.", "The problem with drugs is that most of the people that use the drugs, use it as a license to be an asshole.", "What kind of man can name a child Moon Unit?", "They tried to make me go to Catholic school, too. I lasted a very short time. When the penguin came after me with a ruler, I was out of there.", "People make a lot of fuss about my kids having such supposedly 'strange names', but the fact is that no matter what first names I might have given them, it is the last name that is going to get them in trouble.", "Organized religions by their very natures are misleading.", "Take the Kama Sutra. How many people died from the Kama Sutra as opposed to the Bible? Who wins?", "Record companies have a peculiar way of making sure that your expenses always exceed your profits.", "‘Dirty words’ is a fantasy manufactured by religious fanatics and government organizations to keep people stupid. Any word that gets the point across is a good word.", "The rock and roll business is pretty absurd, but the world of serious music is much worse.", "The whole foundation of Christianity is based on the idea that intellectualism is the work of the Devil. Remember the apple on the tree? Okay, it was the Tree of Knowledge. You eat this apple, you're going to be as smart as God. We can't have that."];



$(document).ready(function() { 

  //assign a random quote
  $(".quoteArea").click(function() {
    var newQuote = Math.floor(Math.random() * quotes.length);
  //fade in/out quotes
    $(".quoteArea").animate({opacity: 0}, 1000);
    $("#wit").animate({opacity: 0}, 1000, function() {
      $("#wit").text("'" + quotes[newQuote] + "'").animate({opacity: 1}, 1000);
   //make sure no line break at hyphen
      $("#wit").append("<nobr> -FZ</nobr>").animate({opacity: 1}, 1000);
      $(".quoteArea").animate({opacity: 1}, 500);
     });
   });

  //tweet button activate!
  $("#tweetQuote").click(function() {
      if($("#wit").text().length > 280) {
        alert("Great Googly Moogly, too long to tweet!");
        return;
      }
      window.open("https://twitter.com/intent/tweet?text=" + $("#wit").text());
  });
});
